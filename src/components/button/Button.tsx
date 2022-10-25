import { ButtonProps, defaultProps, getVariant } from './Button.model';

const Button = ({
  label,
  variant,
  color,
  size,
  onClick,
  className,
  children,
}: ButtonProps) => {
  const Custom: any = getVariant(variant);

  return (
    <Custom
      size={size}
      color={color}
      className={`button ${className}`}
      onClick={onClick}>
      {label ?? children}
    </Custom>
  );
};

Button.defaultProps = defaultProps;

export default Button;
