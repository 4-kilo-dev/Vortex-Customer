import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/data/services";
import { CONTACT } from "@/lib/site";

/**
 * EmailJS credentials — set these in .env.local for local dev
 * and in the Vercel dashboard for production.
 *
 *   VITE_EMAILJS_SERVICE_ID          — from EmailJS → Email Services
 *   VITE_EMAILJS_TEMPLATE_ID         — from EmailJS → Email Templates (inquiry notification)
 *   VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID — from EmailJS → Email Templates (client auto-reply)
 *   VITE_EMAILJS_PUBLIC_KEY          — from EmailJS → Account → Public Key
 */
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

// Initialize EmailJS SDK with the public key once at module load.
// This is required for EmailJS v4 and ensures every send() call
// is authenticated without needing to pass publicKey repeatedly.
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const BUDGET_RANGES = [
  "Under Br 50,000",
  "Br 50,000 – 150,000",
  "Br 150,000 – 500,000",
  "Br 500,000 – 1,500,000",
  "Br 1,500,000+",
] as const;

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be 100 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number must be 20 characters or fewer.")
    .regex(/^[+()\-\s0-9]+$/, "Phone may contain digits, spaces, +, -, ()."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Email must be 200 characters or fewer."),
  projectDate: z.string().min(1, "Please pick a project or event date."),
  serviceType: z.string().min(1, "Please choose a service."),
  location: z
    .string()
    .trim()
    .min(2, "Please tell us where the project takes place.")
    .max(200, "Location must be 200 characters or fewer."),
  budgetRange: z.string().optional(),
  description: z
    .string()
    .trim()
    .min(20, "Give us at least a couple of sentences (20+ characters).")
    .max(2000, "Description must be 2,000 characters or fewer."),
});

type InquiryValues = z.infer<typeof inquirySchema>;

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function InquiryForm({
  defaultService,
}: {
  /** Service slug used to prefill the select (from ?service= search param). */
  defaultService?: string;
}) {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  const knownService = SERVICES.find((s) => s.slug === defaultService);

  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectDate: "",
      serviceType: knownService?.slug ?? "",
      location: "",
      budgetRange: "",
      description: "",
    },
  });

  async function onSubmit(values: InquiryValues) {
    setState({ status: "submitting" });

    // Shared fields used by both the notification and the auto-reply templates.
    const sharedParams = {
      from_name:    values.name,
      from_email:   values.email,
      from_phone:   values.phone,
      service_type: values.serviceType,
      project_date: values.projectDate,
      location:     values.location,
      budget_range: values.budgetRange || "Not specified",
      message:      values.description,
      submitted_at: new Date().toLocaleString("en-ET", { timeZone: "Africa/Addis_Ababa" }),
      // Notification recipient — used by the EmailJS template "To Email" field as {{to_email}}
      to_email:     CONTACT.email,
      to_name:      "Vortex Visual",
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, sharedParams);
      if (EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, {
          ...sharedParams,
          to_email: values.email,
          to_name: values.name,
          business_email: CONTACT.email,
        });
      }
      setState({ status: "success" });
      form.reset();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error("EmailJS submission failed:", msg);
      setState({
        status: "error",
        message:
          "We couldn't send your inquiry. Please check your connection and try again, or reach us on WhatsApp.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="pro-panel pro-panel--accent flex flex-col items-center p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-yellow" aria-hidden />
        <h3 className="mt-4 text-xl font-bold">Inquiry received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks — we&rsquo;ll review the brief and come back with a plan and a
          quote, usually within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setState({ status: "idle" })}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+251 9xx xxx xxx"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project / event date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <option value="" disabled>
                      Choose a service…
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                    <option value="other">Something else</option>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budgetRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Budget range{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Select {...field}>
                    <option value="">Prefer not to say</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  placeholder="City / venue where the screen goes"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about the project</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Venue or site, audience size, indoor/outdoor, screen size you have in mind, content you'll show…"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The more context you give, the sharper the quote.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {state.status === "error" && (
          <div
            role="alert"
            className="rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground"
          >
            {state.message}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={state.status === "submitting"}
        >
          {state.status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" aria-hidden /> Sending…
            </>
          ) : state.status === "error" ? (
            <>
              <RotateCcw aria-hidden /> Retry
            </>
          ) : (
            "Send inquiry"
          )}
        </Button>
      </form>
    </Form>
  );
}
