import { useState } from "react";
import "./App.css";
import { Button } from "./ui/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="p-[3px] relative">
        <div className="absolute inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg" />
        <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-white hover:bg-white/80">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold text-transparent tracking-wide">
            Souscrire
          </span>
        </div>
      </button>
      <br />
      <br />
      <Button>Button Default</Button>
      <hr />
      <br />
      <Button size={"s"}>Filled : size S</Button>
      <br />
      <Button size={"m"}>Filled : size S</Button>
      <br />
      <Button size={"l"}>Filled : size S</Button>
      <br />
      <hr />
      <br />
      <Button variant={"outline"} size={"s"}>
        Outline : s
      </Button>
      <br />
      <Button variant={"outline"} size={"m"}>
        Outline : m
      </Button>
      <br />
      <Button variant={"outline"} size={"l"}>
        Outline : l
      </Button>
      <br />
      <hr />
      <br />
      {/* <Button variant={"animatedGradient"}>Animated</Button> */}
    </>
  );
}

export default App;
