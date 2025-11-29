import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-[#ffffff30] relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-[#00ffff] h-full w-full flex-1  rounded-full transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%) `,
        animation: ` slideInBar 1.5s forwards`
      }} 
        />
    </ProgressPrimitive.Root>
  );
}

export { Progress }
