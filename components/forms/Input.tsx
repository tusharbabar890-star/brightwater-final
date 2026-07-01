import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id || props.name;

  return (
    <label className="grid gap-2 text-sm font-semibold text-navy-950" htmlFor={inputId}>
      {label}
      <input
        id={inputId}
        className={cn(
          "min-h-12 border border-stonewarm-300 bg-white px-4 text-base font-normal text-navy-950 transition duration-200 placeholder:text-stonewarm-700/70",
          className
        )}
        {...props}
      />
    </label>
  );
}
