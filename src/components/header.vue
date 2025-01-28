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
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
h2 {
  color: #ed91cb;
}

ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40vw;
    
    li{
        list-style: none;
        cursor: pointer;
    }
}
</style>
