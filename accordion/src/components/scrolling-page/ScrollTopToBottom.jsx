import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";

function ScrollTopToBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const bottomRef = useRef(null);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Use Fetch Hook</h1>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      {pending ? <p>Loading! Please Wait</p> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p className="my-5" key={productItem.key}>
              {productItem.title}
            </p>
          ))
        : null}
      <h1 ref={bottomRef}>This bottom Section</h1>
      <button className="my-2" onClick={handleScrollToTop}>
        Scroll To Top
      </button>
    </div>
  );
}

export default ScrollTopToBottom;
