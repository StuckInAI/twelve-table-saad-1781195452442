import MultiplicationTable from '@/components/MultiplicationTable';
import Header from '@/components/Header';

export default function MultiplicationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <Header />
      <MultiplicationTable />
    </div>
  );
}
