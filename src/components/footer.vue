<script setup>
import email from "../assets/email.svg"
import linkedin from "../assets/linkedin-logo (1).svg"
import github from "../assets/github-logo (1).svg";
import arrow from "../assets/arrow.svg";

</script>
<template>
  <footer>
    <h2>Contato</h2>
    <h3>Gostou do meu trabalho?</h3>
    <p>Entre em contato ou acompanhe as minhas redes sociais!</p>
    <section>
      <div>
        <a href="https://www.linkedin.com/in/maria-carolina-28b300213/">
          <img :src="linkedin" alt="linkedin" />
          <p>LinkedIn</p>
          <img :src="arrow" alt="seta" />
        </a>
      </div>
      <div>
        <a href="">
          <img :src="github" alt="github" />
          <p>GitHub</p>
           <img :src="arrow" alt="seta" />
        </a>
      </div>
      <div>
        <a href="">
          <img :src="email" alt="email" />
          <p>E-mail</p>
         <img :src="arrow" alt="seta" />
        </a>
      </div>
      <div>
        <a class="top" href="">
          <p>Voltar ao Top</p>
        </a>
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
  footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 70vh;

    h2{
      margin: 10px;
    }
    
    div{
      margin: 25px;
      display: flex;
      justify-content: center;
        a{
          display: flex;
          text-decoration: none;
          align-items: center;
          justify-content: space-around;
          border: #be7cea 1px solid;
          border-radius: 10px;
          width: 50vw;
        }
    }

    .top{
      height: 35px;
      text-align: center;
    }
  }
</style>
