import { BaseCategory } from "@saleor/sdk/lib/fragments/gqlTypes/BaseCategory";
import { CategoryDetails } from "@saleor/sdk/lib/fragments/gqlTypes/CategoryDetails";
import { ProductList_products_edges_node } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ProductListHeader } from "@components/molecules";
import { FilterSidebar, ProductList } from "@components/organisms";
import { Attribute } from "@graphql/gqlTypes/Attribute";
import { commonMessages } from "@temp/intl";
import { SORT_OPTIONS } from "@utils/collections";
import { FeaturedProducts } from "@utils/ssr";

import {
  Breadcrumbs,
  extractBreadcrumbs,
  ProductsFeatured,
  Slider,
} from "../../components";
import { Filters, getActiveFilterAttributes } from "./utils";

import "./scss/index.scss";

export interface CategoryData {
  details: CategoryDetails;
  ancestors: BaseCategory[];
  attributes: Attribute[];
  featuredProducts: FeaturedProducts;
}

interface PageProps {
  category: CategoryData;
  activeFilters: number;
  activeSortOption: string;
  displayLoader: boolean;
  filters: Filters;
  hasNextPage: boolean;
  products: ProductList_products_edges_node[];
  numberOfProducts: number;
  clearFilters: () => void;
  onLoadMore: () => void;
  onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  onOrder: (order: { value?: string; label: string }) => void;
}

export const Page: React.FC<PageProps> = ({
  activeFilters,
  activeSortOption,
  category: { attributes, details, ancestors, featuredProducts },
  numberOfProducts,
  products,
  displayLoader,
  hasNextPage,
  clearFilters,
  onLoadMore,
  filters,
  onOrder,
  onAttributeFiltersChange,
}) => {
  const hasProducts = products.length > 0;
  const [showFilters, setShowFilters] = React.useState(false);
  const intl = useIntl();

  return (
    <div className="category">
      <Slider />
      <div className="container">
        {/* <Breadcrumbs breadcrumbs={extractBreadcrumbs(details, ancestors)} /> */}
        {/* <div className="title">
          <h2 style={{ fontWeight: "bold", fontSize: "2rem", lineHeight: "2" }}>{details.name}</h2>
          <p style={{ fontSize: "11px" }}>
            <FormattedMessage defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing" />
          </p>
        </div> */}
        <FilterSidebar
          show={showFilters}
          hide={() => setShowFilters(false)}
          onAttributeFiltersChange={onAttributeFiltersChange}
          attributes={attributes}
          filters={filters}
        />
        <ProductListHeader
          productName={details.name}
          activeSortOption={activeSortOption}
          openFiltersMenu={() => setShowFilters(true)}
          numberOfProducts={numberOfProducts}
          activeFilters={activeFilters}
          activeFiltersAttributes={getActiveFilterAttributes(
            filters?.attributes,
            attributes
          )}
          clearFilters={clearFilters}
          sortOptions={SORT_OPTIONS}
          onChange={onOrder}
          onCloseFilterAttribute={onAttributeFiltersChange}
        />

        <ProductList
          products={products}
          canLoadMore={hasNextPage}
          loading={displayLoader}
          onLoadMore={onLoadMore}
        />
      </div>

      {!displayLoader && !hasProducts && (
        <ProductsFeatured
          products={featuredProducts.products}
          title={intl.formatMessage(commonMessages.youMightLike)}
          subTitle={intl.formatMessage(commonMessages.youMightLike)}
        />
      )}
    </div>
  );
};
