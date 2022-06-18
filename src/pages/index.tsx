import {
  Routes,
  Route
} from "react-router-dom";
import { Add } from './Add';
import { Cart } from './Cart';
import { List } from './List';

export const Pages = () => {
  return (
    <Routes>
      <Route path="add" element={<Add />} />
      <Route path="cart" element={<Cart />} />
      <Route path="list" element={<List />} />
      <Route path="/" element={<List />} />
      <Route path="*" element={<h1>404 Não Econtrado</h1>} />
    </Routes>
  );
}
