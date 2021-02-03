import React, { useState, useEffect } from "react";
import naruto from "animexyz";
import { Button } from "./components";

naruto({ duration: 2000 });

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div>
      <header>
        <p className="text-red-700 uppercase">
          Page has been open for <code>{count}</code> seconds..
        </p>
        <hr />
        <Button />
      </header>
    </div>
  );
}

export default App;
