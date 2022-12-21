import { getFeaturedWatches } from "../dummy-data";
import ProductList from "../components/product-list";

function HomePage() {
  const featuredWatches = getFeaturedWatches();
  console.log("FEATURED WATCHES", featuredWatches);

  return (
    <div>
      <h1>The Home Page</h1>
      <ProductList items={featuredWatches} />
    </div>
  );
}

export default HomePage;
