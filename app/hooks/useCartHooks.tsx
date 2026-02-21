import { persist } from "zustand/middleware";
import { CartItem, CustomerInfo } from "../types";
import { create } from "zustand";

interface CartStore {
  customerInfo: CustomerInfo | null;
  items: CartItem[];
  setCustomerInfo: (info: CustomerInfo) => void;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  reset: () => void;
}

// export const useCartStore = create<CartStore>()(
//   persist(
//     (set, get) => ({
//       items: [],
//       customerInfo: null,
//     }),
//     { name: "cart-storage" },
//   ),
// );
