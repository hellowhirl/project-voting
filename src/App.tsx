import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import fakeApiResponse from "./seed";
import ProductListing from "./components/ProductListing";

export type FakeApiReponseType = Product[];

export interface Product {
  id: number;
  title: string;
  description: string;
  url: string;
  votes: number;
  submitterAvatarUrl: string;
  productImageUrl: string;
}

function App() {
  const [datum, setDatum] = useState<FakeApiReponseType | null>(null);

  const doFetch = () => {
    setDatum(fakeApiResponse());
  };

  const upvote = (id: number) => {
    if (!datum) return;

    const newDatum = [...datum];
    const index = datum.findIndex((product) => product.id === id);

    newDatum[index].votes++;
    setDatum(newDatum);
  };

  const sortedDatum = useMemo(() => {
    if (!datum) return [];

    return datum.sort((a, b) => b.votes - a.votes);
  }, [datum]);

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Popular Products</h1>
        <div className="products">
          {sortedDatum.map((product: Product) => (
            <ProductListing
              product={product}
              key={product.id}
              upvote={upvote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
