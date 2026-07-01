type TimelineItem = {
  title: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="grid gap-0 border-t border-stonewarm-200 md:grid-cols-4">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="border-b border-stonewarm-200 py-8 md:border-b-0 md:border-r md:px-7 last:md:border-r-0"
        >
          <span className="text-sm font-semibold text-gold-700">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 font-heading text-3xl font-medium text-navy-950">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-stonewarm-700">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
