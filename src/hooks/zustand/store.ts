import { create } from "zustand";

interface typeStore {
  cartProducts: any[];
  addToCart: (product: any) => void;
  removeFromCart: (product: any) => void;
  clearCart: () => void;
} 
export const useStore = create<typeStore>((set) => ({
  cartProducts: [],
	addToCart: (product: any) => set((state: { cartProducts: any; }) => ({ cartProducts: [...state.cartProducts, product] })),
  removeFromCart: (product: any) => set((state: { cartProducts: any[]; }) => ({ cartProducts: state.cartProducts.filter((p: any) => p !== product) })),
  clearCart: () => set({ cartProducts: [] }),

}));

