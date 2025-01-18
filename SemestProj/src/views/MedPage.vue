<template>
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
      <div class="faq-section">
        <h1 class="faq-title">FAQ</h1>
        <FaqItem v-for="faq in faqs" :key="faq.id" :faq="faq" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '@/components/ProductCard.vue';
  import FaqItem from '@/components/FaqItem.vue';
  import products from '@/data/products.json';
  import faqs from '@/data/faqs.json';
  import { useCartStore } from '@/stores/store';
  
  export default {
    name: 'MedPage',
    components: {
      ProductCard,
      FaqItem,
    },
    data() {
      return {
        products,
        faqs,
      };
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
  .product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin: 20px;
    padding-top: 60px;
  }
  
  .faq-section {
    width: 100%;
    margin-top: 40px;
  }
  
  .faq-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  </style>
  