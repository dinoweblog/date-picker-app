import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputBoxes } from "./Components/InputBoxes";
import { Datepicker } from "./Components/Datepicker";
import styled from "styled-components";

const Div = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 10px;
  .mode {
    display: flex;
    height: 30px;
    box-sizing: border-box;
    gap: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
function App() {
  const [val, setVal] = useState("");
  return (
    <Div>
      {/* <InputBoxes length={5} onChange={(val) => setVal(val)} /> */}

      <div className="mode">
        <span>
          <img
            src="https://cdn-icons.flaticon.com/png/512/3106/premium/3106764.png?token=exp=1650367441~hmac=1f8dea70b93c02c37e152a7c637af2e3"
            alt=""
          />
        </span>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span>
          <img
            src="https://cdn-icons.flaticon.com/png/512/3073/premium/3073665.png?token=exp=1650367304~hmac=ffa4be4a93b0701856294b1e9ff0c6d9"
            alt=""
          />
        </span>
      </div>

      <Datepicker />
    </Div>
  );
}

export default App;
