import {
  Tooltip as TooltipShadcn,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltipPrimitive";

export default function Tooltip({
  children,
  tooltipChildren,
}: {
  children: React.ReactNode;
  tooltipChildren: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <TooltipShadcn delayDuration={10}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{tooltipChildren}</TooltipContent>
      </TooltipShadcn>
    </TooltipProvider>
  );
}
