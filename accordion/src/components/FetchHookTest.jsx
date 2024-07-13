import React from "react";
import useFetch from "./hooks/useFetch";

function FetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Use Fetch Hook</h1>
      {pending ? <p>Loading! Please Wait</p> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}

export default FetchHookTest;
