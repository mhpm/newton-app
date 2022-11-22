import { css } from 'styled-components';

export type StyledProps = {
  color: 'primary' | 'secondary' | 'warning' | 'error';
  size: 'small' | 'normal' | 'large';
  disabled: boolean;
};

export const sizes = {
  small: css`
    font-size: 12px;
    height: 32px;
    padding: 0px 16px;
  `,
  normal: css`
    font-size: 14px;
    height: 44px;
    padding: 0px 24px;
  `,
  large: css`
    font-size: 16px;
    height: 52px;
    padding: 0px 32px;
  `,
};

export const colors = {
  primary: { hex: '#007bff', rgb: [0, 123, 255] },
  secondary: { hex: '#7c7c7c', rgb: [124, 124, 124] },
  warning: { hex: '#ffc107', rgb: [255, 193, 7] },
  error: { hex: '#ff6347', rgb: [255, 99, 71] },
};
