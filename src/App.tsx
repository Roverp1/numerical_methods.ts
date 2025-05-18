import { useState } from "react";
import "./App.scss";

import type { UserInput } from "./shared/types";
import bisection_method from "./shared/lib/bisection_method";

const App = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    xp: -1,
    xk: 5,
    dokladnosc: 0.2,
    maxIter: 5,
  });

  bisection_method(userInput);

  return (
    <>
      <div>test</div>
    </>
  );
};

export default App;
