import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 1.4rem;
`;

export const Bar = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.typography.smallFontSize};
  margin-top: 1rem;
  margin-bottom: 1.4rem;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
`;

export const FiltersButton = styled.button`
  font-size: ${props => props.theme.typography.smallFontSize};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Clear = styled.button`
  padding-left: 2rem;
  cursor: pointer;
  font-size: ${props => props.theme.typography.smallFontSize};
  color: ${props => props.theme.colors.lightFont};
`;
export const Element = styled.span`
  padding-left: 2rem;
`;

export const Filters = styled.span`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0.6rem;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.lightFont};
`;

export const Sort = styled.div`
  width: 10rem;
  display: inline-block;
  padding: 1rem;
  background: #FBFBFB;
  border-radius: 30px;
`;

export const FiltersChipsWrapper = styled.div`
  > div {
    margin: 0.4rem;
  }
`;

export const h2Tag = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2;
`;
export const pTag = styled.p`
  font-size: 12px;
`;
