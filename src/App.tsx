import React from 'react';
import defaultDataset from "./dataset.json";
import "./assets/styles/style.css";
import { AnswersList } from "./components/index";

type AppProps = {

};

type Chat = {
  answers: string[],
  chats: string[],
  currentId: string,
  dataset: Dataset,
  open: boolean
};

export type Dataset = {
    [key: string]: Data
  };

  type Data = {
  answers: Answers[],
  question: string
  };
  
  type Answers = {
    content: string,
    nextId: string
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
    const initDataset = this.state.dataset(this.state.currentId);
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers
    });
  };

  componentDidMount() {
    this.initAnswer();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          {this.state.currentId}
        </div>
      </section>
    );
  }
}

export default App;
