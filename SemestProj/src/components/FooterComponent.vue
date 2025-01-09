<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Kontakt:</h4>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Telefon: +36 30 123 4567</p>
        </div>
        <div class="footer-section">
          <h4>Sleduj nás</h4>
          <ul class="social-links">
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <i class="fa-brands fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <i class="fa-brands fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .footer-section {
    flex-basis: calc(50% - 20px);
    max-width: 400px;
    margin: 20px 0 20px 20px;
  }
  
  .social-links {
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    gap: 15px;
    padding: 0;
  }
  
  .social-links li {
    list-style: none;
  }
  
  .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 40px;
    background: #fff;
    text-decoration: none;
    color: #262626;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: -2px 2px 2px #00000080;
    transition: background 0.3s, color 0.3s;
  }
  
  .social-links a:nth-child(1) {
    background: #3b5998;
    color: #fff;
  }
  
  .social-links a:nth-child(2) {
    background: #e4405f;
    color: #fff;
  }
  
  .social-links a:nth-child(1):hover {
    background: #4e71a8;
  }
  
  .social-links a:nth-child(2):hover {
    background: #ec5d7d;
  }
  
  .social-links i {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  </style>
  