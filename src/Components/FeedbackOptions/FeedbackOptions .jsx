import propTypes from "prop-types";
import { ButtonList, Buttons, ButtonWrapper } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option) => {
        return (
          <ButtonWrapper key={Object.keys(option)}>
            <Buttons
              type="button"
              onClick={() => onLeaveFeedback(Object.keys(option))}
              style={{ backgroundColor: Object.values(option) }}
            >
              {Object.keys(option).toString().toUpperCase()}
              {/* [0].toUpperCase() + option.value.slice(1) */}
            </Buttons>
          </ButtonWrapper>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.shape).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
