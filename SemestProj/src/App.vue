<template>
    <div class="app-container">
      <NavbarComponent />
      <div class="content">
        <router-view />
      </div>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  
  export default {
    name: 'App',
    components: {
      NavbarComponent,
      FooterComponent,
    },
  };
  </script>
  
  <style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex: 1; 
  }
  </style>
  