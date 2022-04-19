import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputBoxes } from "./Components/InputBoxes";
import { Datepicker } from "./Components/Datepicker";
import styled from "styled-components";

const Div = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 40px;
`;
function App() {
  const [val, setVal] = useState("");
  return (
    <Div>
      {/* <InputBoxes length={5} onChange={(val) => setVal(val)} /> */}

      <Datepicker />
    </Div>
  );
}

export default App;
