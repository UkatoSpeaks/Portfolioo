import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 px-6 md:py-32 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
}
