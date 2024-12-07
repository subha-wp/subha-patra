interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
      {description && <p className="text-gray-300 text-lg">{description}</p>}
    </div>
  );
}
