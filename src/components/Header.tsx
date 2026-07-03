import { Calculator } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-yellow-400 rounded-2xl p-3 shadow-lg">
          <Calculator className="w-8 h-8 text-amber-900" />
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Multiplication Table
        </h1>
      </div>
      <p className="text-yellow-100 text-lg font-medium">
        Times tables from <span className="text-yellow-300 font-bold">1</span> to{' '}
        <span className="text-yellow-300 font-bold">12</span>
      </p>
    </div>
  );
}
