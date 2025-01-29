<script setup></script>

<template>
  <header>
    <h2>Carolina Oliveira</h2>
    <nav>
      <ul>
        <li>Início</li>
        <li>Sobre mim</li>
        <li>Experiências</li>
        <li>Projetos</li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  background-color: #0b0b0b;
  color: #ffffff;
  display: flex;
  align-items: center;
  height: 12vh;
  justify-content: space-around;
  border-bottom-style: solid #151515;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
}
h2 {
  color: #ed91cb;
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40vw;
  @media (max-width: 900px) {
    width: 80vw;
  }

  li {
    list-style: none;
    cursor: pointer;
  }
}
</style>
