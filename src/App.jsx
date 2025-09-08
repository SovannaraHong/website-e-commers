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
import { productLoader } from "./components/FeatureComponent/WrapperProduct";
import FeatureDetail, {
  LoaderProductDetail,
} from "./components/ProductDetail/FeatureDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="feature"
          element={<FeaturePage />}
          loader={productLoader}
        />
        <Route
          path="feature/:id"
          element={<FeatureDetail />}
          loader={LoaderProductDetail}
        />
        <Route path="category" element={<CategoryPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
