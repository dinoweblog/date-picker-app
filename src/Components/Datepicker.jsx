import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import "./Datepicker.css";
const Div = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  .date-picker {
    width: 100%;
    border: 1px solid red;
  }
`;

export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Div>
      <DatePicker
        wrapperClassName="date-picker"
        // selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
        inline
      />
      {/* <DatePicker
        wrapperClassName="date-picker"
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      /> */}
    </Div>
  );
};
