import Data from "../../Contents/Headphonedata";
import GetModel from "../GetModel";
const Headphonemodels = () => {
  return Data.filter((item)=>item.type==="headphones").map((item)=><GetModel data={item} />);
};

export default Headphonemodels
