import { useRef, useState } from "react";
import { GripVertical } from "lucide-react";

/**
 * Draggable before/after comparison slider. Pointer events cover mouse and
 * touch; arrow keys work when the handle is focused.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, next)));
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-lg"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 1) updateFromClientX(e.clientX);
      }}
    >
      <img src={afterSrc} alt={`${alt} — after edit`} className="block w-full" draggable={false} />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${percent}%` }}
      >
        <img
          src={beforeSrc}
          alt={`${alt} — before edit`}
          className="block h-full w-full object-cover"
          draggable={false}
        />
        <span className="absolute left-3 top-3 rounded bg-charcoal-deep/80 px-2 py-0.5 text-xs font-semibold text-paper">
          Before
        </span>
      </div>
      <span className="absolute right-3 top-3 rounded bg-charcoal-deep/80 px-2 py-0.5 text-xs font-semibold text-paper">
        After
      </span>
      <div
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison"
        aria-valuenow={Math.round(percent)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPercent((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPercent((p) => Math.min(100, p + 5));
        }}
        className="absolute inset-y-0 flex w-1 cursor-ew-resize items-center bg-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={{ left: `calc(${percent}% - 2px)` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow text-charcoal shadow-md">
          <GripVertical className="size-4" aria-hidden />
        </span>
      </div>
    </div>
  );
}
