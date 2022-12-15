<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-segundo.color-acento-contenido
      h2 Arrastrar y soltar
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/falso-verdadero.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        
        p.mb-4 Apreciado aprendiz, a continuación, encontrará una actividad didáctica para afianzar los conceptos y aprendizajes del componente de formación que ha estudiado.
        p.mt-2 Esta es una actividad de ‘arrastrar y soltar’. Encontrará dos columnas: la A presenta las definiciones vistas a lo largo del componente y la B muestra los posibles conceptos. 
        p.mt-2 Se deberán asociar las definiciones con los conceptos correspondientes. Seleccione de la columna B el concepto que considere correcto, arrástrelo y suéltelo en la columna A. 
        p.mt-2 Adelante y mucho ánimo!
        
        
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
