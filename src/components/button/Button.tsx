import { ButtonProps, getVariant } from './Button.model';

const Button = ({
  label,
  variant,
  color,
  size,
  disabled,
  onClick,
  className,
  children,
}: ButtonProps) => {
  const Custom: any = getVariant(variant);

  return (
    <Custom
      disabled={disabled}
      size={size}
      color={color}
      className={['button', className].join(' ')}
      onClick={onClick}>
      {label ?? children}
    </Custom>
  );
};

const defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'normal',
};

Button.defaultProps = defaultProps;

export default Button;
