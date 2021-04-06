import React from "react";
import { Answer } from "./index";
import {Answers} from "../App";

const AnswersList = (props: { answers: Answers[] }) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value, index) => {
        return <Answer content={value.content} key={index.toString()} />
      })}
    </div>
  );
};

export default AnswersList;
