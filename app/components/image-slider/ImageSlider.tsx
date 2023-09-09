import React from "react";

const ImageSlider = () => {
  return (
    <div className="flex flex-col justify-center mb-8 ">
      <h1 className="font-bold text-2xl mb-3">Akakçe ile Ucuzu Keşfet!</h1>
      <div className="flex items-center space-x-10">
        <div className="p-20 bg-akBlue text-white font-bold text-xl">1</div>
        <div className="p-20 bg-akBlue text-white font-bold text-xl">2</div>
        <div className="p-20 bg-akBlue text-white font-bold text-xl">3</div>
        <div className="p-20 bg-akBlue text-white font-bold text-xl">4</div>
        <div className="p-20 bg-akBlue text-white font-bold text-xl">5</div>
      </div>
    </div>
  );
};

export default ImageSlider;
