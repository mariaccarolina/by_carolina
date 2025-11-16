<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import { projetos } from "../data/projetos.js";
</script>

<template>
  <h2>Projetos</h2>

  <Swiper
    :modules="[Navigation, Pagination]"
    navigation
    pagination
    :slides-per-view="1"
    :space-between="20"
    :breakpoints="{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }"
  >
    <SwiperSlide
      v-for="projeto in projetos"
      :key="projeto.nome"
    >
      <div class="project-card">
        <img :src="projeto.image" alt="" />
        <h3>{{ projeto.nome }}</h3>
        <p>{{ projeto.descricao }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>

h2{
  text-align: center;
}

section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.swiper {
  max-width: 1100px; /* limita largura no desktop */
  padding: 20px;
}

.project-card {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
}
img {
  width: 100%;
  border-radius: 8px;
}

/* Posiciona as setas nas laterais do carrossel */
.swiper-button-next,
.swiper-button-prev {
  color: white;
  top: 45%;              /* altura dos cards */
  transform: translateY(-50%);
  z-index: 10;
}

/* seta da direita */
.swiper-button-next {
  right: -40px;          /* empurra para fora da área dos cards */
}

/* seta da esquerda */
.swiper-button-prev {
  left: -40px;           /* empurra para fora da área dos cards */
}

/* Ajuste: garante que o carrossel tenha espaço para as setas */
.swiper {
  max-width: 1100px;
  padding: 20px 60px;     /* dá espaço pros botões não ficarem por cima */
  position: relative;
}

</style>
