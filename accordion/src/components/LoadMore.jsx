import React, { useEffect, useState } from "react";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <p>Loading! Please Wait</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-5">
        {products && products.length
          ? products.map((product) => (
              <div key={product.id} className="border-red-100 border-2">
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="mt-3 bg-slate-100
          text-black hover:bg-black hover:text-white transition duration-300 ease-in-out "
          disabled={disableButton}
        >
          Load More
        </button>
        {disableButton ? (
          <p className="text-center">You have reached your limit</p>
        ) : null}
      </div>
      {console.log(disableButton)}
    </div>
  );
}

export default LoadMore;
