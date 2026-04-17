import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import GraphPage from '../pages/GraphPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iniciativa/:id" element={<DetailPage />} />
      <Route path="/grafo" element={<GraphPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}