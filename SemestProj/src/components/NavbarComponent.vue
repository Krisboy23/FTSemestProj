<template>
    <nav class="custom-navbar">
      <div class="container">
        <router-link class="brand" to="/">
          <img src="@/assets/IMG/bees.jpg" alt="Logo" class="brand-logo" />
          MagMed
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/med">Med</router-link></li>
          <li><router-link to="/kosik">Košík</router-link></li>
          <li><router-link to="/zamestnanci">Našich Zamestnancov</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarCustom',
  };
  </script>
  
  <style scoped>
  .custom-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333;
    padding: 10px 20px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  body {
    padding-top: 60px;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .brand-logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    display: inline;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #d4af37; 
  }
  </style>
  