import Navbar from "../components/Navbar";
import Title from "../components/Headphone/Title";
import Headphonemodels from "../components/Headphone/Headphonemodels";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Compliment from "../components/Compliment";
import { Outlet } from "react-router-dom";
function Headphones() {
  return (
    <div>
      {/* <Navbar /> */}
      <Title title="HEADPHONES" />
      <Headphonemodels/>
      <Products />
      <Compliment />
      <Footer />
      <Outlet/>
    </div>
  );
}
export default Headphones;
