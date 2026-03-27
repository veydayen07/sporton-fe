import { fetchAPI } from "../lib/api";
import { Bank } from "../types";

export const getAllBanks = async () => {
  return await fetchAPI<Bank[]>("banks");
};
