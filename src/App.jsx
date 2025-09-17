import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Components
import { RootLayout } from "./layouts/index";
import {
  HomePage,
  BlogPage,
  CategoryPage,
  FeaturePage,
  ShopPage,
} from "./pages/LayoutPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import NotFound from "./pages/NotFound";
import Cart from "./components/cart/Cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
        <Route index element={<HomePage />} />

        <Route path="category" element={<CategoryPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path=":id" element={<ProductDetail />} />
        <Route path="cart/:id" element={<Cart />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
