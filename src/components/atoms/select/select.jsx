import PropTypes from "prop-types";
import styled from "styled-components";

const SelectWrapper = styled.select`
  padding: 6px 4px;
  border-radius: 6px;
`;

const Select = ({ color, children }) => (
  <SelectWrapper color={color}>{children}</SelectWrapper>
);

Select.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
};

export default Select;
