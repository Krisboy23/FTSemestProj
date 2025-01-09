<template>
    <div>
      <CookieConsent />
      <Carousel />
    </div>
  </template>
  
  <script>
  import CookieConsent from '@/components/CookieConsent.vue';
  import Carousel from '@/components/CarouselComponent.vue';
  
  export default {
    name: 'HomePage',
    components: {
      CookieConsent,
      Carousel,
    },
  };
  </script>
  