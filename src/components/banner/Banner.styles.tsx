import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 300px;
  border-radius: 7px;
  background-color: #282828;
  overflow: hidden;
  color: white;
  padding-bottom: 1rem;
`;

export const Image = styled.img``;

export const Title = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  font-family: sans-serif;
  margin-top: 10px;
`;

export const Desc = styled.p`
  text-align: start;
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
  margin: 15px;
  color: #7c7c7c;
  overflow: hidden;
  height: 190px;
`;

export const Footer = styled.div`
  bottom: 0;
  width: 100%;
  height: 80px;
  text-align: center;
  padding: 10px;
`;
