import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonTone = "primary" | "secondary" | "ghost";

const toneClasses: Record<ButtonTone, string> = {
  primary:
    "bg-navy-950 text-stonewarm-50 hover:bg-navy-800 border-navy-950",
  secondary:
    "bg-transparent text-navy-950 hover:bg-stonewarm-100 border-stonewarm-300",
  ghost:
    "bg-transparent text-navy-950 hover:text-gold-700 border-transparent px-0"
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  tone?: ButtonTone;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  showArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  tone = "primary",
  className,
  onClick,
  showArrow = true
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 border px-5 text-sm font-semibold transition duration-300 ease-calm",
        toneClasses[tone],
        className
      )}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
        />
      ) : null}
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: ButtonTone;
};

export function Button({ children, tone = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center border px-5 text-sm font-semibold transition duration-300 ease-calm disabled:cursor-not-allowed disabled:opacity-60",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
