<script setup>
import { projetos } from "../data/projetos.js";
</script>

<template>
  <h2>Projetos</h2>

  <section>
    <div class="container">
      <div class="project-card" v-for="projeto in projetos" :key="projeto.nome">
        <a :href="projeto.link" target="_blank">
          <img :src="projeto.image" alt="" />
        </a>

        <div class="containerCard">
          <h3>{{ projeto.nome }}</h3>
          <p>{{ projeto.descricao }}</p>

          <p>
            <a :href="projeto.repositorio" target="_blank">🔗 Repositório</a>
          </p>

          <div class="tech">
            <h4 v-for="(tech, i) in projeto.techologias" :key="i">
              {{ tech }}
            </h4>
          </div>

          <p
            v-for="(esp, index) in projeto.Especificações"
            :key="'esp-' + index"
            v-if="projeto.Especificações?.length"
          >
            {{ esp }}
          </p>
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

/* CENTRALIZA A SEÇÃO */
section {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* CONTAINER CENTRALIZADO */
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
}

/* CARD DE CADA PROJETO */
.project-card {
  width: 45%; /* 🔥 GARANTE 2 CARDS POR LINHA */
  max-width: 500px;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  box-shadow: #be7cea 1px 5px 7px 5px;
  text-align: center;
  margin: 20px;

  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
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
    border-radius: 10px;
  }

 
}

/* TEXTO AO LADO DA IMAGEM */
.containerCard {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  text-align: center;
}

/* TECNOLOGIAS */
.tech {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px;
  flex-wrap: wrap;

  h4 {
    color: #cccccc;
    padding: 8px;
    border-radius: 20px;
    background: #2d2d2d;
  }
}
</style>
