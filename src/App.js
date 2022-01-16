import { useState } from "react";
import Statistic from "./Components/Statistic";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";

function App() {
  const [goodFb, setGoodFb] = useState(0);
  const [neutralFb, setNeutralFb] = useState(0);
  const [badFb, setBadFb] = useState(0);
  
  
  const colors = [{"good":"#006400"},{"neutral":"#FFD700"},{"bad":"#FF0000"}]
    
  const FeedbackWriter = (kind) => {

    switch (kind) {
      case 'good':
        setGoodFb(goodFb+1)
        break;
      case 'neutral':
        setNeutralFb(neutralFb+1)
        break;
      case 'bad':
        setBadFb(badFb+1)
        break;
      default:
        break;
    } 
  }
  
    return (
       <Section title={"Please leave your feedback"}>
        <FeedbackOptions
          options={colors}
          onLeaveFeedback={FeedbackWriter}
           />
        <Statistic
          good={goodFb}
          bad={badFb}
          neutral={neutralFb}
          />
      </Section>
    );
  }


export default App;