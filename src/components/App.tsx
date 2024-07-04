import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from '../pages/front-page';
import CatalogPage from '../pages/catalog-page';
import SizesPage from '../pages/sizes-page';
import ItemPage from '../pages/item-page';
import CartPage from '../pages/cart-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<FrontPage/>} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="sizes" element={<SizesPage />} />
          <Route path="item/:article" element={<ItemPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
