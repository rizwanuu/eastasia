import { media, styled } from "@styles";

export const Wrapper = styled.div``;

export const AttributeList = styled.ul`
  columns: 2;
  column-width: 50%;

  ${media.largeScreen`
    column-width: 100%;
    columns: 1;
  `};
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 30px;
    font-size: ${props => props.theme.typography.h4FontSize};
  }

  li::before {
    content: "•";
    margin-right: 20px;
    color: ${props => props.theme.colors.listBullet};
  }
`;

// border-bottom: 1px solid ${props => props.theme.colors.tabsBorder};
export const Tabs = styled.div`
  display: flex;
  flex-wrap: none;
  width: 100%;
  margin-bottom: 70px;
  overflow: hidden;
`;

// min-width: 230px;
// font-size: ${props => props.theme.typography.h3FontSize};
// font-weight: ${props => props.theme.typography.boldFontWeight};
// letter-spacing: 0.02em;
// border-bottom-width: 4px;
// border-bottom-style: solid;
// border-bottom-color: ${props =>
//   props.active ? props.theme.colors.tabTitle : "transparent"};
// padding-bottom: 25px;
export const TabTitle = styled.div<{ active?: boolean }>`
  cursor: pointer;
  color: ${props =>
    props.active ? props.theme.colors.white : props.theme.colors.dark};
  margin-right: 60px;
  background: ${props =>
    props.active ? props.theme.colors.secondaryDark : props.theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  padding: 1rem 2rem;

  ${media.smallScreen`
    font-size: ${(props: any) => props.theme.typography.h4FontSize};
    min-width: 150px;
    margin-right: 20px;
  `};
`;

export const AttributeName = styled.span`
  color: ${props => props.theme.colors.listAttributeName};
`;
export const titleH2 = styled.h2`
  text-transform: uppercase;
  margin: 2rem 0;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: cursive;
`;
