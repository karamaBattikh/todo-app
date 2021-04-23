import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 4px;
  background: ${({ bgColor }) => (bgColor ? bgColor : "royalblue")};
  color: ${({ color }) => (color ? color : "white")};
  font-size: 15px;
  white-space: nowrap;
`;

const Button = ({
  children,
  type,
  onClick,
  className = "",
  center,
  disabled = false,
  color,
  bgColor,
}) => (
  <ButtonWrapper
    type={type}
    className={className}
    center={center}
    onClick={onClick}
    disabled={disabled}
    color={color}
    bgColor={bgColor}
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
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
