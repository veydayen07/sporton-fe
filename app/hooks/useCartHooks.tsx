import { persist } from "zustand/middleware";
import { CartItem, CustomerInfo, Product } from "../types";
import { create } from "zustand";

interface CartStore {
  customerInfo: CustomerInfo | null;
  items: CartItem[];
  setCustomerInfo: (info: CustomerInfo) => void;
  addItem: (product: Product, qty: number) => void;
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

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      customerInfo: null,
      items: [],
      setCustomerInfo: (info: CustomerInfo) => set({ customerInfo: info }),
      addItem: (product: Product, qty = 1) => {
        // const items = get().items;
        // const existingItem = items.find((item) => item._id === product._id);

        // if (existingItem) {
        //   set({
        //     items: items.map((item) =>
        //       item._id === product._id
        //         ? { ...item, qty: item.qty + qty }
        //         : item,
        //     ),
        //   });
        // } else {
        //   set({ items: [...items, { ...product, qty }] });
        // }
        set((state) => {
          const currentItems: CartItem[] = state.items;
          const existingItem = state.items.find(
            (item: Product) => item._id === product._id,
          );
          if (existingItem) {
            return {
              items: currentItems.map((item) =>
                item._id === product._id
                  ? { ...item, qty: item.qty + qty }
                  : item,
              ),
            };
          } else {
            return {
              items: [...currentItems, { ...product, qty: qty }],
            };
          }
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item._id !== productId),
        }));
      },
      reset: () => {
        set({ items: [], customerInfo: null });
      },
    }),
    { name: "cart-storage" },
  ),
);
