<template>
    <div id="cookies" v-if="showCookieConsent">
      <div class="container">
        <div class="subcontainer">
          <div class="cookies">
            <p>
              Tento web používa cookie. Jeho používaním bez zmeny nastavenia vášho webového prehliadača pre súbory cookie súhlasíte s používaním cookies.
              <a href="#">Viac</a>
              <button @click="acceptCookies">Rozumiem</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CookieConsent',
    data() {
      return {
        showCookieConsent: true,
      };
    },
    methods: {
      acceptCookies() {
        this.showCookieConsent = false;
        document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 30;
      },
    },
    mounted() {
      if (document.cookie.split('; ').find((row) => row.startsWith('cookieConsent'))) {
        this.showCookieConsent = false;
      }
    },
  };
  </script>
  
  <style scoped>
  #cookies {
    width: 100%;
    position: fixed;
    bottom: 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  
  .cookies a {
    color: rgb(62, 105, 183);
    font-weight: 500;
    text-decoration: none;
  }
  
  .cookies button {
    border-radius: 5px;
    padding: 8px 12px;
    font-size: 1rem;
    cursor: pointer;
    border: 3px solid rgb(62, 105, 183);
    background-color: black;
    color: #fff;
    margin-left: 10px;
  }
  </style>
  