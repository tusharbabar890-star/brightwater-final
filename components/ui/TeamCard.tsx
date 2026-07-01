import { ImageFrame } from "@/components/ui/ImageFrame";

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export function TeamCard({ name, role, bio, image }: TeamCardProps) {
  return (
    <article className="grid h-full grid-rows-[auto_1fr] gap-7">
      <ImageFrame
        src={image}
        alt={`${name}, ${role}`}
        className="h-[320px] w-full md:h-[260px] lg:h-[300px]"
        sizes="(min-width: 768px) 40vw, 100vw"
      />
      <div className="grid content-start">
        <p className="min-h-12 text-sm font-semibold uppercase leading-6 tracking-[0.18em] text-gold-700">
          {role}
        </p>
        <h3 className="mt-2 font-heading text-4xl font-medium leading-tight text-navy-950">
          {name}
        </h3>
        <p className="mt-4 leading-8 text-stonewarm-700">{bio}</p>
      </div>
    </article>
  );
}
