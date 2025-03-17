<script setup>
import Carol from "../assets/Carolina.png"
</script>

<template>
    <section>
         <figure>
        <img :src="Carol" alt="Foto da Carolina">
    </figure>
        <div class="container">
            <h2>Olá eu sou a <span>Carolina!</span></h2>
            <h1>Desenvolvedora Frontend e Instrutora Técnica</h1>
            <p>Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
            <div class="habilidades">
            <h3>React</h3>
            <h3>Vue</h3>
            <h3>Sass</h3>
            <h3>styled-Components</h3>
             <h3>Typescript</h3>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section{
    display: flex;
    height: 86vh;
    align-items: center;
    justify-content: space-evenly;
     @media (max-width: 900px) {
   flex-direction: column-reverse;
   height: auto;
  }
    h2{
        font-size: 30px;
    }
    h1{
        font-size: 40px;
         @media (max-width: 900px) {
            font-size: 26px;
         }
    }
    p{
        padding: 0 7px;
    }

    span{
        @media (max-width: 900px) {
            font-size: 26px;
         }
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    width: 42vw;
    text-align: center;
    height: 45vh;
    border: solid ;
    border-radius: 10px;
      @media (max-width: 900px) {
        width: 90vw;
        height: 60vh;
        border: red;
        
   
  }
}

img{
    border: solid #fd6b9e 5px;
    border-radius: 20px;
     @media (max-width: 900px){
        width: 70vw;
     }
}
}

.habilidades{
    display: flex;
    justify-content: space-evenly;
     @media (max-width: 900px){
        flex-wrap: wrap;
     }
    h3{
         background-color: #ffa7c2;
        border-radius: 30px;
        padding: 0 10px;
        color: white;
    }
}


</style>