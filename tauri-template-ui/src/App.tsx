import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-primary py-10 md:flex-row ">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="size-40 animate-pulse" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="size-40 animate-pulse" alt="React logo" />
        </a>
      </div>

      <h1 className="my-10 text-center font-mono text-3xl">Vite + React</h1>
      <div className="flex flex-wrap justify-center ">
        <Button className="" onClick={() => setCount((c) => c + 1)}>
          Count is {count}
        </Button>
      </div>
      <p className="pt-20 text-center font-sans text-lg font-semibold">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
