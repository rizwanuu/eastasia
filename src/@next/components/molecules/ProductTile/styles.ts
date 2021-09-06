import { css } from "styled-components";

import { media, styled } from "@styles";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  text-align: left;
  font-weight: bold;
`;

// background: ${props => props.theme.colors.light};
// :hover {
//   background-color: ${props => props.theme.colors.hoverLightBackground};
// }
export const Wrapper = styled.div`
  text-align: center;
  height: 26rem;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  margin-bottom: 1rem;

  ${media.largeScreen`
    padding: 1.8rem;
  `}
`;

export const Title = styled.h4`
  text-transform: uppercase;
  margin: 1rem 0 0.5rem 0;
  ${textProps}
`;

export const Price = styled.p`
  margin: 0.5rem 0;
  ${textProps}
`;

export const Image = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  border: 1px solid lightgray;
  border-radius: 10px;

  > img {
    flex-grow: 1;
    object-fit: scale-down;
  }
`;
