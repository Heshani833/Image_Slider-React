import { act, useEffect, useState } from "react";
import "./App.css";

import { data } from "./data";

const App = () => {
  const [activeImg, setActiveImg] = useState(0);
  const handlePrev = () => {
    setActiveImg((activeImg - 1 + data.length) % data.length);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImg]);

  const handleNext = () => {
    setActiveImg((activeImg + 1) % data.length);
  };

  return (
    <>
      <div className="carousel">
        <button onClick={handlePrev}>Preview</button>
        {data.map((item, i) => {
          return (
            <img
              className={activeImg === i ? "img show" : "img hide"}
              src={item.url}
              alt={item.alt}
              key={item.id}
              title={item.alt}
            />
          );
        })}
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default App;
