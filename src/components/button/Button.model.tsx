import { ButtonHTMLAttributes } from 'react';
import { TextButton, ContainedButton, OutlinedButton } from './Button.styles';

export const defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'normal',
};

export type ButtonProps = {
  label?: string;
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'warning' | 'error';
  size?: 'small' | 'normal' | 'large';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const getVariant = (variant: string = 'primary') =>
  ({
    text: TextButton,
    contained: ContainedButton,
    outlined: OutlinedButton,
  }[variant]);
