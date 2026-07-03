import { useState } from 'react';
import clsx from 'clsx';
import TableCard from '@/components/TableCard';

export default function MultiplicationTable() {
  const [highlight, setHighlight] = useState<number | null>(null);

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-7xl">
      {/* Selector Row */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {numbers.map((n) => (
          <button
            key={n}
            onClick={() => setHighlight(highlight === n ? null : n)}
            className={clsx(
              'w-10 h-10 rounded-full font-bold text-sm transition-all duration-200 shadow',
              highlight === n
                ? 'bg-yellow-300 text-amber-900 scale-110 shadow-yellow-400/50'
                : 'bg-amber-700 text-white hover:bg-amber-500'
            )}
          >
            {n}
          </button>
        ))}
        {highlight !== null && (
          <button
            onClick={() => setHighlight(null)}
            className="px-4 h-10 rounded-full font-bold text-sm bg-orange-500 text-white hover:bg-orange-400 transition-all duration-200 shadow"
          >
            Clear
          </button>
        )}
      </div>

      {/* Table Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {numbers.map((n) => (
          <TableCard
            key={n}
            number={n}
            isHighlighted={highlight === n}
            onSelect={() => setHighlight(highlight === n ? null : n)}
          />
        ))}
      </div>
    </div>
  );
}
