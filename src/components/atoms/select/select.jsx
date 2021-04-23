import PropTypes from "prop-types";
import styled from "styled-components";

const SelectWrapper = styled.select`
  padding: 6px 4px;
  border-radius: 6px;
`;

const Select = ({ name, children, inputRef, defaultValue }) => (
  <SelectWrapper name={name} ref={inputRef} defaultValue={defaultValue}>
    {children}
  </SelectWrapper>
);

Select.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  children: PropTypes.string,
  inputRef: PropTypes.func,
};

export default Select;
