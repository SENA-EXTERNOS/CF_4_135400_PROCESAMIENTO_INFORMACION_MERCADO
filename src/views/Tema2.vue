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

        separador
        #t_2_2

        .titulo-segundo.color-acento-contenido
          h2 2.3  Herramientas informáticas

        p.text-small El manejo y procesamiento de datos implica contar con herramientas informáticas que administren los registros, agilicen procesos y faciliten la comunicación. En el mercado hay una gran variedad de herramientas capaces de desarrollar este tipo de procesos, sin embargo, para seleccionar el software de registro de información adecuado, es necesario tener en cuenta algunos puntos clave, como: 

        .row.mt-3
        
        .col-lg-6
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--moradoColor")
            
            .row(titulo="Registrar todas las acciones que se desarrollen en tiempo real dentro del software ")
              .col-11
                p.mb-0.text-small Esto facilitará conocer los movimientos y los encargados de ellos, por lo que, si ocurre algún error dentro del proceso, se identificará a la persona responsable de dicha acción.
            
            .row(titulo="Proteger elementos dentro del registro de información")
              .col-11.text-small
                p.mb-0 El software deberá tener la capacidad de bloquear o eliminar elementos inútiles dentro del proceso productivo, y prevenir y eliminar posibles errores en la incorporación de nueva información.
            
            .row(titulo="Recuperar la información")
              .col-11
                p.mb-0 Es importante que el software permita recuperar información con facilidad, por lo que deberá contener copias de seguridad y otros elementos básicos para este proceso.

            .row(titulo= "Tener un almacenamiento central")
              .col-11.text-small
                p.mb-0 Es importante, ya que ubicar la información en diferentes repositorios impedirá que sea encontrada con rapidez, obstaculizando el proceso de investigación y seguimiento.
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/Tema2/img8.png", alt="alt")
    

        .row.mt-2   
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/Tema2/img9.png", alt="alt")    
          .col-lg-6
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--moradoColor")
              
              .row(titulo="Ser seguro ")
                .col-11
                  p.mb-0.text-small Un sistema de seguridad específico para el registro de información es fundamental debido a que esta puede caer en manos equivocadas, ocasionando problemas que incluso pueden trascender al ámbito legal.
              
              .row(titulo="Leer varios formatos")
                .col-11.text-small
                  p.mb-0 La información puede estar registrada de diversas maneras: texto, audio, video, entre otros, por ello las herramientas informáticas deben ser capaces de leer cualquier documento en cualquier tipo de formato. 
              
              .row(titulo="Validar la búsqueda de información")
                .col-11
                  p.mb-0 Las herramientas informáticas deben ser capaces de encontrar de diferentes formas los datos almacenados; por este mismo motivo es importante que la información se guarde de manera ordenada y coherente.
              
              .row(titulo= "Ser accesible ")
                .col-11.text-small
                  p.mb-0 Es necesario que en cualquier lugar de la organización sea posible acceder a la información registrada.
        separador
        #t_2_4

        .titulo-segundo.color-acento-contenido
          h2 2.4   Verificación y supervisión de la información registrada

        .row.justify-content-center 
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/Tema2/img10.png')

        .row.mt-4.mb-5
          
          .col-lg-12
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--amarillaColor")
              
              .row(titulo="Tiempo")
                .col-12
                  p.mb-0.text-small Fijar o establecer un tiempo determinado para desarrollar el proceso de verificación, ya que este puede variar según los momentos en que se vincula nueva información. Inspeccionar la información previamente establecida ayudará a detectar posibles fallas o errores.
              .row(titulo="Cambios en la clasificación de la información")
                .col-12
                  p.mb-0.text-small Si se desarrollan cambios específicos dentro de la forma de registrar información, se deberán verificar los datos almacenados dentro del sistema.
              

              .row(titulo="Incremento de la información")
                .col-12.text-small
                  p.mb-0 En algunos casos en donde la información registrada no sea lo suficientemente útil, permitirá verificar la antigua y nueva información que se va a almacenar, clasificándola de acuerdo con los criterios establecidos.
              
              .row(titulo="Verificación en caso de fraude")
                .col-12
                  p.mb-0.text-small Es posible que al desarrollar otros procesos investigativos las organizaciones encuentren fallas, errores o fraudes en investigaciones relevantes, por eso se podrá verificar información almacenada previamente.

              .row(titulo="Ajustes investigativos")
                .col-12
                  p.mb-0.text-small La información recolectada hace diez años variará, independientemente del enfoque en que se encuentre, por esto será primordial verificarla, con el fin de pasarla por un filtro para establecer su utilidad.

              .row(titulo="Cambios en los sistemas de registro de información")
                .col-12
                  p.mb-0.text-small Si se cambia la herramienta de registro de información, las organizaciones tendrán la oportunidad de verificar la información antes de pasarla al nuevo sistema.
            .row.justify-content-center      
              .col-lg-11
          
                p.text-small Supervisar la información es de suma importancia para cualquier entidad, por lo que diariamente las herramientas informáticas desarrollan nuevos elementos para la coordinación de los datos. Algunas de estas funciones son:           

         
         
          .row.justify-content-center      
            .col-lg-8
              
              p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Incluir nueva información. 
              p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Enviar o compartir información, ya sea dentro o fuera de la organización.
              p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Tener una red interna de información para que todas las áreas de la empresa compartan y conozcan la información registrada.
              p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Ordenar o agrupar información según sea la necesidad u objetivo de la investigación.
              p.edit-angle.text-small <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Alertar sobre cambios o ajustes relevantes en el registro o movimiento de la información.

            .col-lg-2
              figure
                img(src="@/assets/curso/temas/Tema2/ing11.png", alt="alt")
    
          
          
          p.text-small.mt-3 Aprendiz, ha culminado el estudio de todas las temáticas de este componente formativo, lo invitamos a que desarrolle la actividad didáctica y revise los materiales complementarios para que afiance sus conocimientos relacionados con la entrevista y el registro de información.  



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
