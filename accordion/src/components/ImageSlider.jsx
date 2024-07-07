import React, { useEffect, useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

function ImageSlider({ url, page = 1, limit = 10 }) {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  const fetchImages = async (dataURL) => {
    try {
      setLoading(true);
      const response = await fetch(`${dataURL}?${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrMessage(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <p>Loading Data! Please wait</p>;
  }

  if (errMessage !== null) {
    return <p>Oops Cannot show the data </p>;
  }
  const handlePrevious = () => {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  };
  const handleNext = () => {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  };

  return (
    <div className="container flex items-center justify-center w-[600px] h-[400px] relative">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute top-50 left-3 h-8 w-8"
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.author}
              className={
                currentSlider === index ? "w-full h-full block" : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute top-50 right-3  h-8 w-8"
      />
      <span className="absolute bottom-10 left-50">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlider === index
                    ? "bg-white rounded-full w-2 h-2 m-1 p-2"
                    : "bg-black rounded-full w-2 h-2 m-1 p-2"
                }
                onClick={() => setCurrentSlider(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
