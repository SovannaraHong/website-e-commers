import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Component
import { RootLayout } from "./layouts/index";
import {
  HomePage,
  BlogPage,
  CategoryPage,
  FeaturePage,
  ShopPage,
} from "./pages/LayoutPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="feature" element={<FeaturePage />}></Route>
        <Route path="category" element={<CategoryPage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="blog" element={<BlogPage />}></Route>
        <Route path=":id" element={<ProductDetail />} />
      </Route>
    )
  );
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  );
}

export default App;
