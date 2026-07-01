import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function Textarea({ label, id, className, ...props }: TextareaProps) {
  const textareaId = id || props.name;

  return (
    <label className="grid gap-2 text-sm font-semibold text-navy-950" htmlFor={textareaId}>
      {label}
      <textarea
        id={textareaId}
        className={cn(
          "min-h-36 resize-y border border-stonewarm-300 bg-white px-4 py-3 text-base font-normal leading-7 text-navy-950 transition duration-200 placeholder:text-stonewarm-700/70",
          className
        )}
        {...props}
      />
    </label>
  );
}
