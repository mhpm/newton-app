import styled, { css } from 'styled-components';
import { colors, StyledProps, sizes } from './Button.types';

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
    width: inherit;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.95);
  }
`;

export const TextButton = styled(DefaultButton)`
  border: none;
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
