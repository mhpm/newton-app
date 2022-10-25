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

export const DefaultButton = styled.button<StyledProps>`
  width: auto;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;

  ${(props) => sizes[props.size]};
  background-color: ${(props) => colors[props.color].hex};
  box-shadow: 0px 0px 10px ${(props) => colors[props.color].hex};

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
