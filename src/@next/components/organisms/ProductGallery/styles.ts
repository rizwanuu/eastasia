import { styled } from "@styles";

// display: grid;
// grid-template-areas: "sidebar preview";
// height: 100%;
// grid-template-columns: 76px 1fr;
// grid-column-gap: 40px;
export const Wrapper = styled.div``;

export const Thumbnail = styled.div<{ activeThumbnail: boolean }>`
  width: 10rem;
  display: flex;
  justify-content: center;
  height: 10rem;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
  }

  background: #f1f5f5;
  border-radius: 22px;
  margin: 20px 20px 20px 0;
`;

export const Button = styled.div`
  height: 50px;
  width: 28%;
  position: absolute;
  z-index: 1;
  background-color: rgba(50, 50, 50, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TopButton = styled(Button)`
  top: 37%;
  left: -10%;

  transform: rotate(90deg);
`;

export const BottomButton = styled(Button)`
  bottom: 37%;
  transform: rotate(90deg);
  left: 82%;
`;

export const ThumbnailsContainer = styled.div`
  position: relative;
`;

export const ThumbnailList = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0px;
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
`;

export const Preview = styled.div`
  grid-area: preview;
  width: auto;
  max-height: 560px;
  overflow: hidden;
  background: #f1f5f5;
  border-radius: 30px;
  img {
    height: 26rem;
    width: 100%;
    object-fit: contain;
  }
`;
