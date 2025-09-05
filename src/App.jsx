import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Component
import { RootLayout } from "./layouts/index";
import { Home, Blog, Category, Feature, Shop } from "./pages/LayoutPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<ProductDetail />} />
        <Route path="feature" element={<Feature />}></Route>
        <Route path="phka" element={<Category />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="blog" element={<Blog />}></Route>
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
