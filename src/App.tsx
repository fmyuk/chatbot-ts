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

type Dataset = {

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
