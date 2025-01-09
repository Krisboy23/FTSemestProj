<template>
    <div class="carousel">
      <div v-for="(slide, index) in slides" :key="index" :class="['carousel-slide', { active: index === activeSlide }]">
        <img :src="slide.image" :alt="slide.caption" class="carousel-image" />
        <div class="carousel-caption">{{ slide.caption }}</div>
      </div>
      <button class="carousel-control prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-control next" @click="nextSlide">&#10095;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Carousel',
    data() {
      return {
        activeSlide: 0,
        slides: [
          { image: new URL('@/assets/IMG/apihaz2.jpg', import.meta.url).href, caption: 'Apidomček v lete' },
          { image: new URL('@/assets/IMG/apihaztelen.jpg', import.meta.url).href, caption: 'Apidomček v zime' },
          { image: new URL('@/assets/IMG/apihaz3.jpg', import.meta.url).href, caption: 'Apidomček zvnútra' },
        ],
      };
    },
    methods: {
      nextSlide() {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length;
      },
      prevSlide() {
        this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 100%;
    height: 100vh; 
    overflow: hidden;
    margin-top: 60px;
  }
  
  .carousel-slide {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  
  .carousel-slide.active {
    left: 0;
    opacity: 1;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-caption {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 100;
  }
  
  .carousel-control.prev {
    left: 10px;
  }
  
  .carousel-control.next {
    right: 10px;
  }
  </style>
  