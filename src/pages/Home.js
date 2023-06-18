import "../styles/Home.css";
import { Carousel } from "../components/Carousel";
import { useProductsData } from "../context/ProductsDataContext";
import Categories from "../components/Categories";

function Home({}) {
  const products = useProductsData();
  return (
    <>
      {products ? (
        <div className="home">
          <Carousel />
          {/* <Categories /> */}
          {console.log(products)}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
