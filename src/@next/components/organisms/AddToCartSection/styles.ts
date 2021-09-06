import { styled } from "@styles";

export const AddToCartSelection = styled.div``;

export const ProductNameHeader = styled.h3`
  text-transform: uppercase;
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;
export const ProductDetailHeader = styled.label`
  margin-bottom: ${props => props.theme.spacing.spacer};
  font-weight: ${props => props.theme.typography.boldFontWeight};
`;
export const ProductDetail = styled.p`
  margin-bottom: ${props => props.theme.spacing.spacer}*3;
  width: 73%;
  font-size: 12px;
  margin-top: 1rem;
  color: gray;
`;

export const ProductPricing = styled.h4`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;

export const UndiscountedPrice = styled.span`
  text-decoration: line-through;
  color: ${props => props.theme.colors.baseFontColorSemiTransparent};
  font-size: ${props => props.theme.typography.smallFontSize};
`;

export const VariantPicker = styled.div`
  display: grid;
  margin-top: 20px;

  .react-select-wrapper,
  .input {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

export const QuantityInput = styled.div`
  margin-top: 20px;
  padding-top: 20px;
`;
export const ShopNowBtn = styled.button`
  background: #172b85;
  padding: 0 4.5rem;
  border-radius: 2rem;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
`;
export const SubmitBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.error};
`;
