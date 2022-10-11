import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 0;
  width: 200px;
  height: 100px;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border: 2px solid #717171;
  padding: 1rem;
  border-radius: 7px;
  color: white;
  cursor: grab;
`;

export const Dot = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  background-color: tomato;
  border: 2px solid #717171;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px #cecece7a;
  }
`;

export const DotRight = styled(Dot)`
  right: -14px;
  top: 36px;
  z-index: 1;
`;

export const DotLeft = styled(Dot)`
  left: -14px;
  top: 36px;
  z-index: 1;
`;
