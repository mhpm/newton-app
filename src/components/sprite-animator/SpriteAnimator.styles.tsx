import styled, { css, keyframes } from "styled-components";

export interface ISpriteImage {
  image: string;
  width: number;
  height: number;
  speed: number
}

export const PlaySprite = (w: number, s: number) => keyframes`
  100% { background-position: -${w * s}px}
`

export const SpriteImage = styled.div`
  ${(props: ISpriteImage) => css`
    height: ${props.height}px;
    width:  ${props.width}px;
    background: url(${props.image}) 0px 0px;
    animation: ${PlaySprite(props.width, props.speed)} 0.8s steps(${props.speed}) infinite;
  `}
`

export const ImageContainer = styled.img`
  opacity: 0;
  position: fixed;
  z-index: -1;
`