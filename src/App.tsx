import React from 'react';
import defaultDataset from "./dataset.json";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";

type AppProps = {

};

type Chat = {
  answers: Answers[],
  chats: ChatType[],
  currentId: string,
  dataset: Dataset,
  open: boolean
};

type Dataset = {
  [key: string]: Data
};

type Data = {
  answers: Answers[],
  question: string
};
  
export type Answers = {
  content: string,
  nextId: string
};

export type ChatType = {
  text: string,
  type: string
};

class App extends React.Component<AppProps, Chat> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  displayNextQuestion = (nextQuestionId: string) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question"
    });

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    });
  }

  selectAnswer = (selectedAnswer: string, nextQuestionId: string) => {
    switch (true) {
      case (nextQuestionId === "init"):
        setTimeout(() => this.displayNextQuestion(nextQuestionId));
        break;
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: "answer"
        });

        this.setState({
          chats: chats
        });

        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
    }
  }
  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </section>
    );
  }
}

export default App;
