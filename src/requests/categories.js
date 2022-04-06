import { getApi } from "utils/api";

export const fetchCategories = async () => {
  return getApi("/api/categories");
};
