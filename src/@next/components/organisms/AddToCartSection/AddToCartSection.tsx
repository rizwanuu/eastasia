import { ICheckoutModelLine } from "@saleor/sdk/lib/helpers";
import {
  ProductDetails_product_pricing,
  ProductDetails_product_variants,
  ProductDetails_product_variants_pricing,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductDetails";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import { IProductVariantsAttributesSelectedValues } from "@types";

import AddToCartButton from "../../molecules/AddToCartButton";
import QuantityInput from "../../molecules/QuantityInput";
import ProductVariantPicker from "../ProductVariantPicker";
import {
  canAddToCart,
  getAvailableQuantity,
  getProductPrice,
} from "./stockHelpers";
import * as S from "./styles";

const LOW_STOCK_QUANTITY: number = 5;

export interface IAddToCartSection {
  productId: string;
  productVariants: ProductDetails_product_variants[];
  name: string;
  productPricing: ProductDetails_product_pricing;
  items: ICheckoutModelLine[];
  queryAttributes: Record<string, string>;
  isAvailableForPurchase: boolean | null;
  availableForPurchase: string | null;
  variantId: string;
  setVariantId(variantId: string): void;
  onAddToCart(variantId: string, quantity?: number): void;
  onAttributeChangeHandler(slug: string | null, value: string): void;
}

const AddToCartSection: React.FC<IAddToCartSection> = ({
  availableForPurchase,
  isAvailableForPurchase,
  items,
  name,
  productPricing,
  productVariants,
  queryAttributes,
  onAddToCart,
  onAttributeChangeHandler,
  setVariantId,
  variantId,
}) => {
  const intl = useIntl();

  const [quantity, setQuantity] = useState<number>(1);
  const [variantStock, setVariantStock] = useState<number>(0);
  const [
    variantPricing,
    setVariantPricing,
  ] = useState<ProductDetails_product_variants_pricing | null>(null);

  const availableQuantity = getAvailableQuantity(
    items,
    variantId,
    variantStock
  );
  const isOutOfStock = !!variantId && variantStock === 0;
  const noPurchaseAvailable = !isAvailableForPurchase && !availableForPurchase;
  const purchaseAvailableDate =
    !isAvailableForPurchase &&
    availableForPurchase &&
    Date.parse(availableForPurchase);
  const isNoItemsAvailable = !!variantId && !isOutOfStock && !availableQuantity;
  const isLowStock =
    !!variantId &&
    !isOutOfStock &&
    !isNoItemsAvailable &&
    availableQuantity < LOW_STOCK_QUANTITY;

  const disableButton = !canAddToCart(
    items,
    !!isAvailableForPurchase,
    variantId,
    variantStock,
    quantity
  );

  const renderErrorMessage = (message: string, testingContextId: string) => (
    <S.ErrorMessage
      data-test="stockErrorMessage"
      data-testId={testingContextId}
    >
      {message}
    </S.ErrorMessage>
  );

  const onVariantPickerChange = (
    _selectedAttributesValues?: IProductVariantsAttributesSelectedValues,
    selectedVariant?: ProductDetails_product_variants
  ): undefined => {
    if (!selectedVariant) {
      setVariantId("");
      setVariantPricing(null);
      setVariantStock(0);
      return;
    }
    setVariantId(selectedVariant.id);
    setVariantPricing(selectedVariant?.pricing);
    setVariantStock(selectedVariant?.quantityAvailable);
  };

  return (
    <S.AddToCartSelection>
      <S.ProductNameHeader data-test="productName">{name}</S.ProductNameHeader>
      <S.ProductDetailHeader>Detail:</S.ProductDetailHeader>
      <S.ProductDetail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in purus
        rutrum, egestas metus bibendum, cursus massa. Nam orci enim, fringilla sit
        amet cursus et, auctor eget orci. Pellentesque non turpis ac ligula placerat
        euismod vel non urna. Nam sed diam felis. Sed dui mauris, ncidunt sit amet
        scelerisque vitae, ultrices non massa. Nunc at diam congue, laoreet lacus
        eget, efficitur eros. Pellentesque vitae convallis libero, eu dapibus urna.
        Praesent vehicula tortor vel pellentesque faucibus. Nunc velit purus,
        condimentum at leo in, mollis trisque massa. Pellentesque habitant morbi
      </S.ProductDetail>
      {isOutOfStock ? (
        renderErrorMessage(
          intl.formatMessage(commonMessages.outOfStock),
          "outOfStock"
        )
      ) : (
        <S.ProductPricing>
          {getProductPrice(productPricing, variantPricing)}
        </S.ProductPricing>
      )}
      {noPurchaseAvailable &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.noPurchaseAvailable),
          "notAvailable"
        )}
      {purchaseAvailableDate &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.purchaseAvailableOn, {
            date: new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }).format(purchaseAvailableDate),
            time: new Intl.DateTimeFormat("default", {
              hour: "numeric",
              minute: "numeric",
            }).format(purchaseAvailableDate),
          }),
          "timeRestrictedAvailability"
        )}
      {isLowStock &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.lowStock),
          "lowStockWarning"
        )}
      {isNoItemsAvailable &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.noItemsAvailable),
          "noItemsAvailable"
        )}
      <S.VariantPicker>
        *** 3 Reviews<br />
        <ProductVariantPicker
          productVariants={productVariants}
          onChange={onVariantPickerChange}
          selectSidebar
          queryAttributes={queryAttributes}
          onAttributeChangeHandler={onAttributeChangeHandler}
        />
      </S.VariantPicker>
      <S.QuantityInput>
        <QuantityInput
          quantity={quantity}
          maxQuantity={availableQuantity}
          disabled={isOutOfStock || isNoItemsAvailable}
          onQuantityChange={setQuantity}
          hideErrors={!variantId || isOutOfStock || isNoItemsAvailable}
          testingContext="addToCartQuantity"
        />
      </S.QuantityInput>
      <S.SubmitBtn>
        <AddToCartButton
          onSubmit={() => onAddToCart(variantId, quantity)}
          disabled={disableButton}
        />
        <S.ShopNowBtn>Shop Now</S.ShopNowBtn>
      </S.SubmitBtn>
    </S.AddToCartSelection>
  );
};
AddToCartSection.displayName = "AddToCartSection";
export default AddToCartSection;
