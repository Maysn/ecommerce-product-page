import "../styles/Home.css";
import { Carousel } from "../components/Carousel";
import { useProductsData } from "../context/ProductsDataContext";

function Home({}) {
  const products = useProductsData();
  return (
    <>
      {products ? (
        <div className="home">
          <Carousel />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
