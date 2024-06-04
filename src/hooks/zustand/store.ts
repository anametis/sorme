import { create } from "zustand";

const useStore = create((set) => ({
  cartProducts: [],
	addToCart: (product: any) => set((state: { cartProducts: any; }) => ({ cartProducts: [...state.cartProducts, product] })),
  removeFromCart: (product: any) => set((state: { cartProducts: any[]; }) => ({ cartProducts: state.cartProducts.filter((p: any) => p !== product) })),
  clearCart: () => set({ cartProducts: [] }),

}));
