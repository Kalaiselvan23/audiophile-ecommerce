import { useNavigate } from "react-router-dom";

const GetModel = (props, index) => {
  const navigate=useNavigate();
  const data=props.data;
    return (
      <div className="w-[80%] my-28 mx-auto">
        <div className={"headphone-model flex h-fit mx-auto justify-evenly max-sm:flex-col max-md:flex-col lg:flex-row gap-10"}>
          <img
            src={data.img}
            alt=""
            className="headphone-img  lg:w-[40%] ml-auto"
          />
          <div className="headphone-indiv flex flex-col items-start mx-auto justify-center gap-6 p-5 h-full md:items-start lg:my-auto lg:mx-auto lg:w-[40%]">
            <span className="headphone-new text-sm text-orange-700 tracking-[10px] max-md:mx-auto">NEW PRODUCT</span>
            <span className="headphone-title text-4xl font-medium text-black max-md:mx-auto">
              {data.model}
            </span>
            <p>{data.description}</p>
            <button className="headphone-btn bg-[#D87D4A] text-sm text-white p-4 font-semibold max-md:mx-auto" onClick={()=>navigate(`/${data.type}/${data.id}`)}>
              <span>SEE PRODUCT</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default GetModel;
  