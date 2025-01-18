<template>
    <div class="cart-page">
      <h1 class="cart-title">Shopping Cart</h1>
      <div class="cart-container">
        <div class="cart-item" v-for="item in cartItems" :key="item.id">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="item-controls">
            <button class="quantity-btn" @click="decreaseQuantity(item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button class="quantity-btn" @click="increaseQuantity(item.id)">+</button>
          </div>
          <p class="item-price">{{ (item.price * item.quantity).toFixed(2) }} EUR</p>
        </div>
        <div class="cart-summary">
          <p class="summary-line">Total Items: <span>{{ totalItems }}</span></p>
          <p class="summary-line">Total Amount: <span class="summary-amount">{{ totalAmount }} EUR</span></p>
          <button class="clear-cart-btn" @click="clearCart" :disabled="totalItems === 0">Clear Cart</button>
          <button class="checkout-btn" @click="checkout" :disabled="totalItems === 0">Checkout</button>
        </div>
      </div>
      <div v-if="showPopup" class="popup">Thank you for your purchase!</div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/store';
  
  export default {
    name: 'KosikPage',
    data() {
      return {
        showPopup: false,
      };
    },
    computed: {
      cartItems() {
        return useCartStore().cartItems;
      },
      totalItems() {
        return useCartStore().totalItems;
      },
      totalAmount() {
        return useCartStore().totalAmount;
      },
    },
    watch: {
      cartItems: {
        handler(newCartItems) {
          localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        },
        deep: true,
      },
    },
    methods: {
      increaseQuantity(productId) {
        useCartStore().addToCart(productId);
      },
      decreaseQuantity(productId) {
        useCartStore().decreaseQuantity(productId);
      },
      clearCart() {
        useCartStore().clearCart();
      },
      checkout() {
        this.showPopup = true; 
        setTimeout(() => {
          this.showPopup = false;
        }, 3000);
        this.clearCart();
      },
    },
    mounted() {
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        useCartStore().cartItems = JSON.parse(savedCartItems);
      }
    },
  };
  </script>
  
  <style scoped>
  .cart-page {
    padding-top: 60px; 
    padding-bottom: 40px;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
  }
  
  .cart-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  .cart-container {
    width: 80%;
    margin: 0 auto;
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
  }
  
  .item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .item-details {
    flex-grow: 1;
    padding-left: 15px;
  }
  
  .item-details h3 {
    font-size: 1.2rem;
    margin: 0;
    color: #333;
  }
  
  .item-details p {
    font-size: 0.9rem;
    color: #666;
  }
  
  .item-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .quantity-btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: #eaeaea;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }
  
  .quantity-btn:hover {
    background: #d6d6d6;
  }
  
  .item-price {
    font-weight: bold;
    font-size: 1rem;
    color: #333;
  }
  
  .cart-summary {
    margin-top: 20px;
    text-align: right;
    font-size: 1rem;
  }
  
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #4caf50;
    color: white;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    text-align: center;
    z-index: 1000;
  }
  
  .clear-cart-btn,
  .checkout-btn {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .clear-cart-btn {
    background: linear-gradient(135deg, #ff4d4d, #ff1a1a);
    color: white;
  }
  
  .clear-cart-btn:hover {
    background: linear-gradient(135deg, #e04444, #cc0000);
    transform: scale(1.05);
  }
  
  .checkout-btn {
    background: linear-gradient(135deg, #4caf50, #2e7d32);
    color: white;
  }
  
  .checkout-btn:hover {
    background: linear-gradient(135deg, #3e8e41, #1b5e20);
    transform: scale(1.05);
  }
  
  .clear-cart-btn:disabled,
  .checkout-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
  </style>
  