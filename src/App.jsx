import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowAllMember from "./ShowAllMember/ShowAllMember";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2 className="fs-3 text-warning">Sagor islam & Team</h2>

        <ShowAllMember />
      </div>
    </>
  );
}

export default App;
