<script setup>
import Carol from "../assets/Carolina.png";
</script>

<template>
  <section class="inicio">
    <div class="texto">
      <h2>Olá, eu sou a <span>Carolina!</span></h2>
      <p>
        Sou desenvolvedora Frontend e instrutora técnica. Transformo necessidades em aplicações reais, envolventes e funcionais.
        Desenvolvo sistemas com paixão por tecnologia, contribuindo com soluções inovadoras para desafios complexos.
      </p>
      <div class="links">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
    </div>

    <div class="foto">
      <img :src="Carol" alt="Foto da Carolina" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  height: 90vh;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
    text-align: center;
    gap: 2rem;
  }

  .texto {
    width: 40vw;

    @media (max-width: 768px) {
      width: 90vw;
    }

    h2 {
      font-size: 2rem;

      span {
        color: #be7cea;
      }
    }

    p {
      margin-top: 1rem;
      line-height: 1.6;
      color: #cccccc;
    }
  }

  .links {
    padding-top: 30px;
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      justify-content: center;
      flex-wrap: wrap;
    }

    a {
      border: solid 1px #cccccc;
      border-radius: 30px;
      padding: 10px 20px;
      color: #be7cea;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;

      &:hover {
        background-color: #be7cea;
        color: #1e1e1e;
      }
    }
  }

  .foto {
    img {
      width: 25vw;
      border-radius: 10%;

      @media (max-width: 768px) {
        width: 60vw;
      }
    }
  }
}
</style>
