import { defineStore } from 'pinia';
import products from '@/data/products.json';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  }),
  getters: {
    totalItems(state) {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    totalAmount(state) {
      return state.cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
    },
  },
  actions: {
    addToCart(productId) {
      const existingItem = this.cartItems.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const product = products.find((p) => p.id === productId);
        if (product) {
          this.cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
          });
        } else {
          console.error(`Product with ID ${productId} not found in products.json`);
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },
    decreaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },
    clearCart() {
      this.cartItems = [];
      localStorage.removeItem('cartItems');
    },
  },
});
