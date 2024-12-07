const ProgressBar = ({ progress }) => {
    return (
      <div className="relative w-full h-1 bg-gray-200">
        <div
          className="absolute top-0 left-0 h-1 bg-[#5259a6]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  