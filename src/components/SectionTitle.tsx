interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  align = 'left',
  light = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-bold tracking-wider uppercase text-amber-500">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2 text-3xl md:text-4xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}