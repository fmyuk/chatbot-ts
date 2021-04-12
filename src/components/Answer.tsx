import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

type AnswerProps = {
  content: string,
  nextId: string,
  select: (selectedAnswer: string, nextQuestionId: string) => void
};

const Answer = (props: AnswerProps) => {
  // const classes = useStyles();

  return (
    <Button variant="contained" color="primary" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  );
};

export default Answer;
