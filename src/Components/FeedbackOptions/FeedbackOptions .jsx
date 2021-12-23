import propTypes from "prop-types";
import { ButtonList, Buttons, ButtonWrapper } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option) => {
        const colors = ["#006400", "#FFD700", "#FF0000"];
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
