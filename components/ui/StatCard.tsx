type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border-l border-stonewarm-300 pl-5">
      <p className="font-heading text-4xl font-medium text-navy-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-stonewarm-700">{label}</p>
    </div>
  );
}
