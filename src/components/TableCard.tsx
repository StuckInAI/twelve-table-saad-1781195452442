import clsx from 'clsx';

type TableCardProps = {
  number: number;
  isHighlighted: boolean;
  onSelect: () => void;
};

export default function TableCard({ number, isHighlighted, onSelect }: TableCardProps) {
  const rows = Array.from({ length: 12 }, (_, i) => i + 1);

  const cardColors = [
    'from-yellow-500 to-yellow-700',
    'from-amber-500 to-amber-700',
    'from-orange-500 to-orange-700',
    'from-yellow-600 to-amber-800',
    'from-amber-600 to-orange-800',
    'from-orange-500 to-amber-700',
    'from-yellow-500 to-orange-700',
    'from-amber-500 to-yellow-700',
    'from-orange-600 to-amber-800',
    'from-yellow-600 to-orange-800',
    'from-amber-600 to-yellow-800',
    'from-orange-500 to-yellow-700',
  ];

  const colorClass = cardColors[(number - 1) % cardColors.length];

  return (
    <div
      className={clsx(
        'rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer',
        isHighlighted
          ? 'ring-4 ring-yellow-400 scale-105 shadow-yellow-400/30'
          : 'hover:scale-102 hover:shadow-2xl'
      )}
      onClick={onSelect}
    >
      {/* Card Header */}
      <div className={clsx('bg-gradient-to-r px-4 py-3 flex items-center justify-between', colorClass)}>
        <span className="text-white font-extrabold text-xl">
          × {number}
        </span>
        <span className="text-white/70 text-sm font-medium">Table of {number}</span>
      </div>

      {/* Table Rows */}
      <div className="bg-white/5 backdrop-blur-sm">
        {rows.map((multiplier, idx) => {
          const result = number * multiplier;
          const isEven = idx % 2 === 0;
          return (
            <div
              key={multiplier}
              className={clsx(
                'flex items-center justify-between px-4 py-1.5 text-sm transition-colors',
                isEven ? 'bg-white/5' : 'bg-transparent'
              )}
            >
              <span className="text-yellow-100 font-medium">
                {number} × {multiplier}
              </span>
              <span className="text-white font-bold">=</span>
              <span
                className={clsx(
                  'font-extrabold text-base w-10 text-right',
                  result > 100 ? 'text-white' : 'text-yellow-200'
                )}
              >
                {result}
              </span>
            </div>
          );
        })}
      </div>

      {/* Card Footer */}
      <div className={clsx('bg-gradient-to-r px-4 py-2', colorClass)}>
        <p className="text-white/60 text-xs text-center">
          1 – 12 × {number}
        </p>
      </div>
    </div>
  );
}
