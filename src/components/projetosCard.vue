<script setup>
import { projetos } from "../data/projetos.js";
</script>

<template>
  <h2>Projetos</h2>
  <section>
    <div class="project-card" v-for="projeto in projetos">
      <a :href="projeto.link" target="_blank">
        <img :src="projeto.image" alt="" />
      </a>
      <div class="containerCard">
        <h3>{{ projeto.nome }}</h3>
        <p>{{ projeto.descricao }}</p>
        <p>
          <a :href="projeto.repositorio" target="_blank">🔗Repositório</a>
        </p>
        <div class="tech">
          <h4 v-for="(techologias, i) in projeto.techologias">
            {{ techologias }}
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.8rem;
  color: #be7cea;
}
section {
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  flex-wrap: wrap;
  div{
    margin: 12px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
}
.project-card {
  width: 40%;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  border: #be7cea 1px  solid;
  text-align: center;

  @media (max-width: 900px) {
    width: 90%;
    justify-content: center;
    margin: 10px;
  }

  a {
    text-decoration: none;
    display: block;
    width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /*preenche o espaço sem distorcer */
    border-radius: 10px;
  }
}

.containerCard {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.tech {
  display: flex;
  justify-content: space-around;
  margin: 10px;
  flex-wrap: wrap;
  h4 {
    color: #cccccc;
    padding: 8px;
    border-radius: 20px;
    max-width: 200px;
    @media (max-width: 900px) {
      padding: 5px;
      margin: 5px;
    }
  }
}
</style>
