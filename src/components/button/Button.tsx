import { HTMLProps } from 'react';
import {
  DefaultButton,
  PrimaryButton,
  SecondaryButton,
  WarningButton,
} from './Button.styles';

type Props = {
  label?: string;
  variant?: string;
} & HTMLProps<HTMLButtonElement>;

enum variantsButton {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  warning = 'warning',
}

const getVariant = (variant: string) =>
  ({
    [variantsButton.default]: DefaultButton,
    [variantsButton.primary]: PrimaryButton,
    [variantsButton.secondary]: SecondaryButton,
    [variantsButton.warning]: WarningButton,
  }[variant]);

const Button = ({
  onClick,
  label,
  variant = variantsButton.primary,
  className,
  children,
}: Props) => {
  const Custom: any = getVariant(variant);

  return (
    <Custom className={['button', className].join(' ')} onClick={onClick}>
      {label || children}
    </Custom>
  );
};

export default Button;
