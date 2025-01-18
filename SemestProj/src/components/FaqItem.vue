<template>
    <div class="accordion-item">
      <button
        class="accordion-button"
        @click="faq.expanded = !faq.expanded"
      >
        {{ faq.question }}
      </button>
      <div v-if="faq.expanded" class="accordion-body">
        {{ faq.answer }}
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'FaqItem',
    props: {
      faq: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .accordion-item {
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .accordion-button {
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    background-color: #f9f9f9;
    border: none;
    padding: 10px;
    text-align: left;
    width: 100%;
    transition: background-color 0.3s;
  }
  
  .accordion-button:hover {
    background-color: #eaeaea;
  }
  
  .accordion-collapse {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  
  .accordion-collapse.show {
    max-height: 500px;
  }
  
  .accordion-body {
    padding: 10px;
    font-size: 0.9rem;
    color: #333;
    background-color: #fff;
  }
  </style>
  