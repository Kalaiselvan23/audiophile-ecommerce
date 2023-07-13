const Title = (props) => {
  return (
    <div className="bg-black h-[40vh] flex justify-center items-center">
      <span className="font-medium text-5xl text-white">{props.title}</span>
    </div>
  );
};
export default Title;
