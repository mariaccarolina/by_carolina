<script setup>
import { ref } from "vue";

const menuAberto = ref(false);
</script>

<template>
  <header class="header">
    <nav>
      <!-- Botão hambúrguer (só aparece no mobile) -->
      <button class="hamburguer" @click="menuAberto = !menuAberto">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Menu de navegação -->
      <ul :class="{ aberto: menuAberto }">
        <li class="com-linha-esquerda">
          <div class="linha-esquerda"></div>
          <a href="#">Inicio</a>
        </li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Projetos</a></li>
        <li class="com-linha-direita">
          <a href="#">Contato</a>
          <div class="linha-direita"></div>
        </li>
      </ul>
    </nav>
  </header>
</template>



<style lang="scss" scoped>
.header {
  background: transparent;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  height: 12vh;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    // Botão hamburguer (mobile)
    .hamburguer {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;

      span {
        width: 25px;
        height: 3px;
        background-color: #be7cea;
        border-radius: 2px;
        transition: 0.3s;
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        a {
          color: #be7cea;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s;

          &:hover {
            color: #cccccc;
          }
        }

        // Linha antes de "Inicio"
        &.com-linha-esquerda .linha-esquerda {
          width: 25vw;
          height: 1px;
          background-color: #cccccc;
          margin-right: 20px;
        }

        // Linha depois de "Contato"
        &.com-linha-direita .linha-direita {
          width: 25vw;
          height: 1px;
          background-color: #cccccc;
          margin-left: 20px;
        }
      }

      // Estilo mobile (inicialmente escondido)
      @media (max-width: 768px) {
        position: absolute;
        top: 70px;
        right: 20px;
        background: #1e1e1e;
        flex-direction: column;
        padding: 1rem 2rem;
        border-radius: 10px;
        display: none;
        gap: 1.2rem;
        z-index: 999;

        // Quando menuAberto = true
        &.aberto {
          display: flex;
        }

        // Esconde os tracinhos no mobile
        .linha-esquerda,
        .linha-direita {
          display: none;
        }
      }
    }
  }
}

</style>
