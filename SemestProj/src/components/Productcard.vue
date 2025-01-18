<template>
    <div class="card-container">
      <img :src="product.image" class="product-image" :alt="product.name" />
      <div class="card-content">
        <h5 class="product-title">{{ product.name }}</h5>
        <p class="product-description">
          <span class="description-highlight">Druh:</span> {{ getDescriptionLine(0) }}<br />
          <span class="description-highlight">Hmotnosť:</span> {{ getDescriptionLine(1) }}<br />
          <span class="price">{{ getDescriptionLine(2) }}</span>
        </p>
        <button class="add-to-cart-btn" @click="handleAddToCart">Add to Cart</button>
      </div>
      <div v-if="showPopup" class="popup">Added to cart!</div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/store';
  
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        showPopup: false, 
      };
    },
    methods: {
      getDescriptionLine(index) {
        return this.product.description.split('\n')[index] || '';
      },
      handleAddToCart() {
        useCartStore().addToCart(this.product.id); 
        this.showPopup = true; 
        setTimeout(() => {
          this.showPopup = false; 
        }, 1000);
      },
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .card-content {
    padding: 10px;
  }
  
  .product-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .product-description {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 10px;
  }
  
  .description-highlight {
    font-weight: bold;
    color: #333;
  }
  
  .price {
    font-size: 1.2em;
    font-weight: bold;
    color: #d9534f;
  }
  
  .add-to-cart-btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .add-to-cart-btn:hover {
    background-color: #0056b3;
  }
  
  .popup {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #4caf50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    font-size: 1rem;
    animation: fadeInOut 2s forwards;
  }
  
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    10%, 90% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(10px);
    }
  }
  </style>
  