import { getFeaturedWatches } from "../dummy-data";
import ProductList from "../components/products/product-list";

function HomePage() {
  const featuredWatches = getFeaturedWatches();
  console.log("FEATURED WATCHES", featuredWatches);

  return (
    <div>
      <ProductList items={featuredWatches} />
    </div>
  );
}

export default HomePage;
