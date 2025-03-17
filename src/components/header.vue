<script setup>
import linkedin from "../assets/linkedin-logo (1).svg";
import github from "../assets/github-logo (1).svg"
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>Início</li>
        <li>Projetos</li>
        <li>Experiências</li>
      </ul>
    </nav>
    <section>
      <a href="https://www.linkedin.com/in/maria-carolina-28b300213/" target="_blank">
          <img :src="linkedin" alt="logo do linkedin">
      </a>
      <a href="https://github.com/mariaccarolina" target="_blank">
         <img :src="github" alt="logo do github">
      </a>
    </section>
  </header>
</template>

<style lang="scss" >
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  border: solid;
  border-radius: 10px;
  padding: 10px;
  /* color: #fd6b9e; */

     @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
  }
  ul{
    list-style: none;
    display: flex;
    width: 20vw;
    justify-content: space-between;
     @media (max-width: 900px){
      width: 80vw;
     }
    @media (max-width: 1100px){
       width: 80vw;
    }

    li{
      cursor: pointer;
      color: #fd6b9e;

     &:hover{
       text-decoration: underline;
     }
    }
  }

  section{
    width: 6vw;
   display: flex;
   justify-content: space-between;
     @media (max-width: 900px){
      width: 85vw;
      justify-content: space-evenly;
     
     }
  }

}


/* ul {
 
  @media (max-width: 900px) {
    width: 80vw;
  }

  li {
   
  }
} */
</style>
