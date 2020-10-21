import React, { useState, useEffect } from "react";
import "./App.css";

const Item = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
    </div>
  );
};

export default Item;
