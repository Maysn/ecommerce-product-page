import "../styles/home.css";
import { Carousel } from "../components/Carousel";
import { useProductsData } from "../context/ProductsDataContext";

function Home({}) {
  const products = useProductsData();
  return (
    <div className="home">
      <Carousel />
      {console.log(products)}
    </div>
  );
}

export default Home;
