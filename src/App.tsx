import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Add } from './pages/Add';
import { Cart } from './pages/Cart';
import { Erro404 } from './pages/Erro404';
import { List } from './pages/List';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="add" element={<Add />} />
        <Route path="cart" element={<Cart />} />
        <Route path="list" element={<List />} />
        <Route path="/" element={<List />} />
        <Route path="*" element={<Erro404/>} />
      </Routes>
    </Router>
  );
}