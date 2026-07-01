import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageFrame({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw"
}: ImageFrameProps) {
  return (
    <div className={cn("image-quiet relative", className)}>
      {/* Replace this placeholder with commissioned firm photography before launch. */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition duration-700 ease-calm hover:scale-[1.02]"
      />
    </div>
  );
}
