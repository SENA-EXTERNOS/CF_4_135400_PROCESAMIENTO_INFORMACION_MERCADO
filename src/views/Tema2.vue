<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Registro de información
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-11
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/img1.png')})`}"
          )
          
          .bloque-texto-g__texto.p-4              
            .bloque-texto-b.color-adicional-1.p-4          
              .bloque-texto-b.color-cajon                
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0.text-small El registro de información es un proceso orientado a guardar datos relevantes sobre un acontecimiento en particular, con el fin de dejar soporte de ello y poder consultarlo posteriormente, para conocer características específicas de la información almacenada.
                  b.edit3  (Kerin y Hartley, 2019).
                  i.fas.fa-quote-right  
      .row.justify-content-center.align-items-center.mb-5.mt-5          
        .col-lg-10
          p.text-small Existen diferentes clases de registro de información, algunos de ellos son: 
          p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Numéricos, como entradas y salidas de dinero.
          p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Históricos, los cuales se enfocan en guardar información específica sobre hechos históricos.
          p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Académicos o científicos, que guardan información sobre procesos de laboratorio.
          p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Visuales, como fotografías, pinturas y esculturas.
          p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  De audio, característicos de elementos sonoros como la música y los repositorios de programas de radio.
    

        separador

        #t_2_1

        .titulo-segundo.color-acento-contenido.mt-2
          h2 2.1  Procedimientos para codificar, clasificar y organizar información 

        .row.justify-content-center   
          .col-lg-10.sm-2                   
            .bloque-texto-g.color-secundario.p-4.mb-4
              .row.justify-content-center            
                .col-lg-8
                  p.text-small El registro de información implica desarrollar varios procedimientos específicos, que incluyen codificar, clasificar y organizar la información. Esto posibilita una comunicación clara entre el desarrollo investigativo y su objetivo:
                .col-lg-2
            figure
              img(src='@/assets/curso/temas/Tema2/img2.png').imgdimensioncaj2
        
        TabsC.color-acento-contenido.mt-3
          .py-3.py-md-4(titulo="Codificación")
            .row
              .col-md-7.mb-4.mb-md-0
                h4 Codificación
                p.text-small Su objetivo es categorizar y validar los datos recolectados antes del proceso investigativo. A pesar de que los datos cuantitativos también deben cumplir con el proceso de codificación, se debe dejar en claro la importancia de invertir mayor tiempo y recursos para la adecuada codificación de la información cualitativa, que arroja resultados únicos. Existen dos formas de codificación:
                p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Deductiva. En este caso, se deberán plantear características concretas antes de recolectar la información, deben indicarse las normas o códigos específicos para codificarla. Un ejemplo es una prueba de opción múltiple, donde cada respuesta corresponde a un porcentaje determinado, que luego se sumará con las demás respuestas para obtener un resultado final. 
                p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Inductiva. Como su nombre lo indica, no tiene normas o criterios previos, por lo que su codificación se deberá desarrollar a partir de los resultados obtenidos durante el proceso investigativo.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/Tema2/img3.png', alt='Texto que describa la imagen')
                  
          .py-3.py-md-4(titulo="Clasificación")
            .row
              .col-md-7.mb-4.mb-md-0
                h4 Clasificación
                p.text-small  Este es uno de los procesos primordiales para registrar la información. Hay cuatro formas básicas, que podrán ser utilizadas en cualquier medio:
                p.text-small  #[b 1.] 
                  | Hacer inventario. Esto es, agrupar toda la información recolectada, incluyendo elementos digitales, físicos y demás herramientas implementadas durante la recolección. 
                p.text-small  #[b 2.] 
                  |  Establecer criterios. Es fijar los estándares para clasificar la información. Por ejemplo, ordenarla según el tipo de organización a la que se le aplica la entrevista.
                p.text-small  #[b 3.] 
                  |  Clasificar los archivos. Ordenar cada uno de los documentos, datos o información obtenida, de acuerdo con los criterios establecidos en el paso anterior. 
                p.text-small  #[b 4.] 
                  |  Normas de tratamiento de la información. Dependerán de cada una de las organizaciones, sin embargo, es importante establecer normas de seguridad para acceder y manipular la información.
              
              
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/Tema2/img4.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Organización")
            .row
              .col-md-7.mb-4.mb-md-0
                h4 Organización
                p.text-small Ordenar la información es vital para todo proceso investigativo. Depende de las normas o parámetros que determine la organización y el objetivo de la investigación misma. Un ejemplo es clasificar las preguntas desde los datos básicos de las personas o instituciones entrevistadas, pasando por respuestas cuantitativas, y por último, las respuestas cualitativas, las cuales suelen ser las de mayor relevancia para la empresa.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/Tema2/img5.png', alt='Texto que describa la imagen')

        separador
        #t_2_1

        .titulo-segundo.color-acento-contenido
          h2 2.2  Tipos de registro 

        p.text-small El registro de información ha sufrido diferentes cambios a través de los años: en la antigüedad se almacenaba en papiros, a partir del desarrollo de la imprenta se pasó a los libros de texto, hasta la actualidad, donde se guarda información en navegadores por medio de la nube (Internet) y en repositorios. Es importante destacar que existen dos tipos de registro: el digital y el físico. Ambos son utilizados para depositar información específica para ser consultada de acuerdo con los criterios y la seguridad implementada.

        .row.justify-content-center   
          .col-lg-5
             figure
                  img(src='@/assets/curso/temas/Tema2/img6.png', alt='Texto que describa la imagen')
         
          .col-lg-4.sm-2
             figure
                  img(src='@/assets/curso/temas/Tema2/img7.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
