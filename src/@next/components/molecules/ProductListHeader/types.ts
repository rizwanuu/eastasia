import { SortOptions } from "@utils/collections";

interface ActiveFiltersAttribute {
  attributeSlug: string;
  valueSlug: string;
  valueName: string;
}

export interface IProps {
  productName: string;
  activeSortOption?: string;
  activeFilters: number;
  activeFiltersAttributes: ActiveFiltersAttribute[];
  numberOfProducts: number;
  sortOptions: SortOptions;
  onChange: (order: { value?: string; label: string }) => void;
  onCloseFilterAttribute: (attributeSlug: string, valueSlug: string) => void;
  openFiltersMenu: () => void;
  clearFilters: () => void;
}
