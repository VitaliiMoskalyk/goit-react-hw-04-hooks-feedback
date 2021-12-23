import propTypes from "prop-types";
import { ButtonList, Buttons, ButtonWrapper } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback, colors }) => {
  return (
    <ButtonList>
      {options.map((option) => {
        return (
          <ButtonWrapper key={option}>
            <Buttons
              type="button"
              onClick={() => onLeaveFeedback(option)}
              style={{ backgroundColor: colors[options.indexOf(option)] }}
            >
              {option[0].toUpperCase() + option.slice(1)}
            </Buttons>
          </ButtonWrapper>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
