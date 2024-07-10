import React, { useEffect, useState } from "react";
import data from "./accordion/data";

function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [data, setData] = useState([]);
  const [errMessage, setErrMessage] = useState(null);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setLoading(false);
        setData(data.products);
      }
    } catch (e) {
      setLoading(false);
      setErrMessage(e.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errMessage) {
    return <div>Oops! {errMessage}</div>;
  }

  if (loading) {
    return <div>Loading ! Please Wait</div>;
  }

  return (
    <div>
      <div className="max-w-full w-full flex flex-col items-center justify-center text-3xl bg-blue-500 fixed top-0">
        <p className="h-16">Custom Scroll Bar</p>
        <div className="w-full h-3 bg-purple-900">
          <div
            className="bg-purple-400 h-3 w-0 z-30"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-24 text-center">
        {data && data.length > 0
          ? data.map((product) => (
              <p className="m-4" key={product.id}>
                {product.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
