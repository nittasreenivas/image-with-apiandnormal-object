import axios from "axios";
import { useState, useEffect } from "react";
export default function Vasu() {
  const [prod, setProd] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      console.log("res::", res.data.results);
      setProd([...res.data.results.slice(0, 5)]);
    });
  }, []);
  const handleNext = () => {
    if (index === prod.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(prod.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className="App">
      {prod.length > 0 && (
        <div className="char">
          <h3>{prod[index].name} </h3>
          <img alt="" src={prod[index].image} width={200} />
          <br />
          <button onClick={handlePrev}>PREV </button>&nbsp;&nbsp;
          <button onClick={handleNext}>NEXT </button>
        </div>
      )}
    </div>
  );
}
