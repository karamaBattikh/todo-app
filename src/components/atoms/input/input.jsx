import PropTypes from "prop-types";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 16px auto;
  input {
    padding: 8px 14px;
    margin: 4px auto;
    line-height: 1.5;
    border: 1px solid ${({ error }) => (error ? "red" : "darkgray")};
    border-radius: 4px;
    font-size: 12px;
  }
  label {
    color: darkslategray;
    display: block;
  }
  p {
    color: red;
    font-size: 14px;
    font-weight: normal;
    display: block;
  }
`;

const Input = ({
  id,
  name,
  value,
  label,
  type,
  placeholder,
  error,
  onChange,
  onBlur,
  inputRef,
}) => (
  <InputWrapper error={error}>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder || ""}
      onChange={onChange}
      onBlur={onBlur}
      ref={inputRef}
    />
    {error && <p>{error}</p>}
  </InputWrapper>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  inputRef: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
