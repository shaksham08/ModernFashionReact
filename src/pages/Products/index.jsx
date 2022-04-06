import Products from "./components/Products";
import Filter from "./components/Filter";
import "./Products.less";

const ProductListing = () => {
  return (
    <main>
      <div className="main__container">
        <Filter />
        <Products />
      </div>
    </main>
  );
};

export default ProductListing;
