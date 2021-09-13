import React, { Component } from "react";
import Section from "../src/Components/Section/Section";
import Layout from "./Components/Layout/Layout";
import FeedbackSection from "./Components/FeedbackSection/FeedbackSection";
import StatisticsBar from "./Components/StatisticsBar/StatisticsBar";
import Notification from "./Components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = (mark) => {
    this.setState((prevState) => ({
      [mark]: prevState[mark] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  }

  // }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const feedbacks = Object.keys(this.state);

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackSection onIncrement={this.onIncrement} options={feedbacks} />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <StatisticsBar
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </Layout>
    );
  }
}

export default App;
