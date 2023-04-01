<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-center.align-items-start.mb-2           
        .col-lg-3.my3
            img.img-a.img-t(src='@/assets/curso/temas/introduccion/img1.png')                        
        .col-lg-9
          p.mb-0 Estimado aprendiz, en este componente formativo conocerá información importante para el ejercicio de su labor. Este espacio estará enfocado en el proceso formativo, de acuerdo con la competencia del aprendizaje orientada a encuestar personas según unas técnicas de recolección y el manual del encuestador, donde podrá identificar conocimientos relevantes de la entrevista y el registro de información.
          p.mt-3 El proceso investigativo implica diferentes técnicas de recolección de información; una de ellas, y tal vez la más conocida, es la entrevista, la cual ha evolucionado a través de los años con la incorporación de herramientas informáticas. Dentro de esta también se debe tener en cuenta la importancia de una comunicación efectiva entre el entrevistado y el entrevistador, porque contribuye a una conversación fluida de la que se pueden obtener resultados claros y coherentes, así como información adicional, verídica y detallada sobre temas relacionados con el objetivo de la investigación.
    
    .row.justify-content-center.mt-5      
      .col-lg-11.sm-2                   
        .bloque-texto-g.color-secundario.p-4.mb-4
          .row           
            .col-lg-8
              p El registro de la información es uno de los pasos fundamentales para el desarrollo investigativo. De ello dependerá conocer si todo el proceso ha sido lo suficientemente útil y eficaz para la institución. Este registro de información se encuentra adjunto con pasos específicos como la codificación, clasificación y organización. Otro aspecto, igual de importante, es verificar y supervisar adecuadamente esa información, con el fin de evitar fraudes u otros inconvenientes que desvíen el objetivo de la investigación.
            .col-lg-2
        figure
          img(src='@/assets/curso/temas/introduccion/img2.png').imgdimensioncaj

               

    
    p.mt-3 Aprendiz, lo invitamos a ver el siguiente video introductorio, donde podrá conocer de manera general los temas que se abordarán en este componente formativo. 

    .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/g2uBUND-0b0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            






















    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
