import { useEffect, useState } from "react";
export default () => {
  const [products, setProducts] = useState();
  useEffect(async () => {
    const controller = new AbortController();
    const { signal } = controller;
    const response = await fetch(
      "https://the-sneaker-database.p.rapidapi.com/search?limit=10&query=shoe%20laces",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
          "x-rapidapi-key":
            "ea80876145msh0844454fe1acc10p13b266jsn983d72e26d24",
        },
      },
      { signal }
    );
    const data = await response.json();
    console.log(data);
    setProducts(data);
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="wrapper">
      <h1>This is demo</h1>
      {products?.results.map((product) => (
        <img key={product.id} src={product.image.thumbnail} alt={product.title} />
      ))}
    </div>
  );
};
