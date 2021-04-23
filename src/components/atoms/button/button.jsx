import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 4px;
  background: royalblue;
  color: white;
  font-size: 16px;
`;

const Button = ({
  children,
  type,
  onClick,
  className = "",
  center,
  disabled = false,
}) => (
  <ButtonWrapper
    type={type}
    className={className}
    center={center}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
