import { getApi } from "utils/api";

export const fetchProducts = async () => {
  return getApi("/api/products");
};
