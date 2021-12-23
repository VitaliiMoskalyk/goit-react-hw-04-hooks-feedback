import { Component } from "react";
import Statistic from "./Components/Statistic";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  
  FeedbackWriter = (kind) =>
    this.setState((prevState) => ({ [kind]: prevState[kind] + 1 }));

  CountTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  
  CountPositiveFeedbackPercentage = () =>
    (Math.round((this.state.good / this.CountTotalFeedback()) * 100) + "%");

  render() {
    const { good, neutral, bad } = this.state;
    const colors = ["#006400", "#FFD700", "#FF0000"];
    const options = ["good", "neutral", "bad"];

    return (
       <Section title={"Please leave your feedback"}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.FeedbackWriter}
          colors={colors} />
        <Statistic
          good={good}
          bad={bad}
          neutral={neutral}
          total={this.CountTotalFeedback()}
          positivePercentage={this.CountPositiveFeedbackPercentage()} 
          />
      </Section>
    );
  }
}

export default App;