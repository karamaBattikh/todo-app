import PropTypes from "prop-types";
import styled from "styled-components";

const LabelWrapper = styled.div`
  padding: 2px 4px;
  color: white;
  background-color: ${({ color }) => color && color};
  font-size: 12px;
  display: inline-block;
  border-radius: 4px;
`;

const Label = ({ color, children }) => (
  <LabelWrapper color={color}>{children}</LabelWrapper>
);

Label.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
};

export default Label;
