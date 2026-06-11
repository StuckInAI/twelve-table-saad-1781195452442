import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MultiplicationPage from '@/pages/MultiplicationPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultiplicationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
