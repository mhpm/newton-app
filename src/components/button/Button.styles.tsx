import styled, { css } from 'styled-components';

type StyledProps = {
  color: 'primary' | 'secondary' | 'warning' | 'error';
  size: 'small' | 'normal' | 'large';
  disabled: boolean;
};

const sizes = {
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

const colors = {
  primary: { hex: '#007bff', rgb: [0, 123, 255] },
  secondary: { hex: '#7c7c7c', rgb: [124, 124, 124] },
  warning: { hex: '#ffc107', rgb: [255, 193, 7] },
  error: { hex: '#ff6347', rgb: [255, 99, 71] },
};

const hover = (props: StyledProps) => {
  const { color } = props;

  return css`
    &:hover {
      background-color: rgba(
        ${colors[color].rgb[0]},
        ${colors[color].rgb[1]},
        ${colors[color].rgb[2]},
        0.05
      );
    }
  `;
};

const disabled = (props: StyledProps) => {
  const { disabled } = props;
  return (
    disabled &&
    css`
      filter: grayscale(1);
      opacity: 0.5;
      pointer-events: none;
    `
  );
};

export const DefaultButton = styled.button<StyledProps>`
  width: auto;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;

  background-color: ${(props) => colors[props.color].hex};
  ${(props) => sizes[props.size]};

  ${disabled}

  @media (max-width: 576px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.95);
  }
`;

export const TextButton = styled(DefaultButton)`
  box-shadow: none;
  background-color: transparent;
  color: ${(props) => colors[props.color].hex};

  ${hover}
`;

export const ContainedButton = styled(DefaultButton)``;

export const OutlinedButton = styled(DefaultButton)`
  box-shadow: none;
  background-color: transparent;
  border: 1.5px solid ${(props) => colors[props.color].hex};
  color: ${(props) => colors[props.color].hex};

  ${hover}
`;
