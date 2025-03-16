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
    h2{
        font-size: 30px;
    }
    h1{
        font-size: 40px;
    }
    p{
        padding: 0 7px;
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
}

img{
    border: solid #fd6b9e 5px;
    border-radius: 20px;
}
}

.habilidades{
    display: flex;
    justify-content: space-evenly;
    h3{
        background-color: #fd6b9e;
        border-radius: 30px;
        padding: 0 10px;
        color: white;
    }
}


</style>