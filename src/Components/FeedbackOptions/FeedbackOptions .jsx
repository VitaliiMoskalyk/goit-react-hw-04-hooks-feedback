import propTypes from "prop-types";
import { ButtonList, Buttons, ButtonWrapper } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option) => {
        const oKey = Object.keys(option);
        const oValue = Object.values(option);

        return (
          <ButtonWrapper key={oKey}>
            <Buttons
              type="button"
              onClick={() => onLeaveFeedback(oKey.toString())}
              style={{ backgroundColor: oValue }}
            >
              {oKey.toString().toUpperCase()}
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
