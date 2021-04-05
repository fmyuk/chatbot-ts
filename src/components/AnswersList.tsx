import React from "react";
import { Answer } from "./index";

const AnswersList = () => {
  return (
    <div className="c-grid_answer">
      <Answer content={"hoge"} />
      <Answer content={"fuga"} />
      <Answer content={"foo"} />
    </div>
  );
};

export default AnswersList;
