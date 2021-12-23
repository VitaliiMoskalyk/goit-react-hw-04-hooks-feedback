import propTypes from "prop-types";
import { Wrapper, Title } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default Section;
