import { HTMLProps } from 'react';
import {
  DefaultButton,
  PrimaryButton,
  SecondaryButton,
  WarningButton,
} from './Button.styles';

export type ButtonProps = {
  label?: string;
  variant?: variantButton;
} & HTMLProps<HTMLButtonElement>;

export enum variantButton {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  warning = 'warning',
}

export const getVariant = (variant: string) =>
  ({
    [variantButton.default]: DefaultButton,
    [variantButton.primary]: PrimaryButton,
    [variantButton.secondary]: SecondaryButton,
    [variantButton.warning]: WarningButton,
  }[variant]);
