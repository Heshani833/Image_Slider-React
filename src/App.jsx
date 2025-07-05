import { useState } from "react";
import BasicSlider from "./components/BasicSlider/BasicSlider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BasicSlider />
    </>
  );
}

export default App;
