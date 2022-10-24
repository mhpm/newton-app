import { ButtonProps, getVariant, variantButton } from './Button.model';

const Button = ({
  onClick,
  label,
  variant = variantButton.primary,
  className,
  children,
}: ButtonProps) => {
  const Custom: any = getVariant(variant);

  return (
    <Custom className={`button ${className}`} onClick={onClick}>
      {label ?? children}
    </Custom>
  );
};

export default Button;
