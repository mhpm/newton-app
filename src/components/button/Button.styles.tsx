import styled from 'styled-components';

export const DefaultButton = styled.button`
  width: auto;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
  padding: 1rem 2.5rem;
  background-color: #cecece;
  box-shadow: 0px 0px 10px #cecece;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.95);
  }
`;

export const PrimaryButton = styled(DefaultButton)`
  background-color: var(--primary-color);
  box-shadow: 0px 0px 10px var(--primary-color);
`;

export const SecondaryButton = styled(DefaultButton)`
  background-color: var(--secondary-color);
  box-shadow: 0px 0px 10px var(--secondary-color);
`;

export const WarningButton = styled(DefaultButton)`
  background-color: var(--warning-color);
  box-shadow: 0px 0px 10px var(--warning-color);
`;
