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
 
  FeedbackWriter = (kind) => this.setState((prevState) => ({ [kind]: prevState[kind] + 1 }));

  CountTotalFeedback = () => this.state.good + this.state.bad + this.state.neutral;
  
  CountPositiveFeedbackPercentage = () => (Math.round((this.state.good / this.CountTotalFeedback()) * 100) + "%");

  render() {
    const { good, neutral, bad } = this.state;
   
    return (
       <Section title={"Please leave your feedback"}>
        <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.FeedbackWriter} />
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