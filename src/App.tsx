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
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers
    });
  };

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: "question"
    }

    const chats = this.state.chats;
    chats.push(chat);

    this.setState({
      chats: chats
    });
  };

  componentDidMount() {
    this.initAnswer();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}

export default App;
