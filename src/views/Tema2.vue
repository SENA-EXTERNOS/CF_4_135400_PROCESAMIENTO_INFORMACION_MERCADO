<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Registro de información
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-1.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/img1.png')})`}"
          )
          
          .bloque-texto-g__texto.p-5                        
            .bloque-texto-b                     
              .bloque-texto-b                               
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0 El registro de información es un proceso orientado a guardar datos relevantes sobre un acontecimiento en particular, con el fin de dejar soporte de ello y poder consultarlo posteriormente, para conocer características específicas de la información almacenada 
                  b  (Kerin y Hartley, 2019).
                  i.fas.fa-quote-right  

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-10  
        .cajon.color-Azul.p-4
          p Existen diferentes clases de registro de información, algunos de ellos son: 
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Numéricos, como entradas y salidas de dinero.
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Históricos, los cuales se enfocan en guardar información específica sobre hechos históricos.
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Académicos o científicos, que guardan información sobre procesos de laboratorio.
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Visuales, como fotografías, pinturas y esculturas.
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  De audio, característicos de elementos sonoros como la música y los repositorios de programas de radio.
    
    .row.justify-content-center   
      .col-lg-10.sm-2                   
        .bloque-texto-g.color-secundario.p-4.mb-4
          .row.justify-content-center            
            .col-lg-8
              p El registro de información implica desarrollar varios procedimientos específicos, que incluyen codificar, clasificar y organizar la información. Esto posibilita una comunicación clara entre el desarrollo investigativo y su objetivo:
            .col-lg-2
        figure
          img(src='@/assets/curso/temas/Tema2/img2.png').imgdimensioncaj2
    
    TabsC.color-acento-contenido.mt-3
      .py-3.py-md-4(titulo="Codificación")
        .row
          .col-md-9.mb-4.mb-md-0
            h4 Codificación
            p Su objetivo es categorizar y validar los datos recolectados antes del proceso investigativo. A pesar de que los datos cuantitativos también deben cumplir con el proceso de codificación, se debe dejar en claro la importancia de invertir mayor tiempo y recursos para la adecuada codificación de la información cualitativa, que arroja resultados únicos. Existen dos formas de codificación:
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Deductiva. En este caso, se deberán plantear características concretas antes de recolectar la información, deben indicarse las normas o códigos específicos para codificarla. Un ejemplo es una prueba de opción múltiple, donde cada respuesta corresponde a un porcentaje determinado, que luego se sumará con las demás respuestas para obtener un resultado final. 
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Inductiva. Como su nombre lo indica, no tiene normas o criterios previos, por lo que su codificación se deberá desarrollar a partir de los resultados obtenidos durante el proceso investigativo.
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/Tema2/img3.png', alt='')
              
      .py-3.py-md-4(titulo="Clasificación")
        .row
          .col-md-9.mb-4.mb-md-0
            h4 Clasificación
            p  Este es uno de los procesos primordiales para registrar la información. Hay cuatro formas básicas, que podrán ser utilizadas en cualquier medio:
            p  #[b 1.] 
              | Hacer inventario. Esto es, agrupar toda la información recolectada, incluyendo elementos digitales, físicos y demás herramientas implementadas durante la recolección. 
            p  #[b 2.] 
              |  Establecer criterios. Es fijar los estándares para clasificar la información. Por ejemplo, ordenarla según el tipo de organización a la que se le aplica la entrevista.
            p  #[b 3.] 
              |  Clasificar los archivos. Ordenar cada uno de los documentos, datos o información obtenida, de acuerdo con los criterios establecidos en el paso anterior. 
            p  #[b 4.] 
              |  Normas de tratamiento de la información. Dependerán de cada una de las organizaciones, sin embargo, es importante establecer normas de seguridad para acceder y manipular la información.
          
          
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/Tema2/img4.png', alt='')
      .py-3.py-md-4(titulo="Organización")
        .row
          .col-md-9.mb-4.mb-md-0
            h4 Organización
            p Ordenar la información es vital para todo proceso investigativo. Depende de las normas o parámetros que determine la organización y el objetivo de la investigación misma. Un ejemplo es clasificar las preguntas desde los datos básicos de las personas o instituciones entrevistadas, pasando por respuestas cuantitativas, y por último, las respuestas cualitativas, las cuales suelen ser las de mayor relevancia para la empresa.
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/Tema2/img5.png', alt='')

    p.mt-5 El registro de información ha sufrido diferentes cambios a través de los años: en la antigüedad se almacenaba en papiros, a partir del desarrollo de la imprenta se pasó a los libros de texto, hasta la actualidad, donde se guarda información en navegadores por medio de la nube (Internet) y en repositorios.

    p.mb-5.pb-5 Es importante destacar que existen dos tipos de registro: el digital y el físico. Ambos son utilizados para depositar información específica para ser consultada de acuerdo con los criterios y la seguridad implementada. 

    .row.mt-5.justify-content-center.pt-5
        .col-lg-5.mt-5               
          .bloque-texto-g.color-secundario.p-4.mb-4
            .row.justify-content-center.mt-5
                  
              .col-lg-12.mt-5
                p.edit-angle.mt-3 <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Gran parte de la información es accesible desde cualquier lugar del mundo, gracias a navegadores como Google o Firefox.
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i> Se logra obtener información en segundos.

                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Contiene información engañosa o falsa.

                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Incluye libros electrónicos, documentales en línea, repositorios académicos, bibliotecas, fotografías digitales, música, entre otros. 
              
              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/Tema2/img12.png').imgdimensioncaj3  


        .col-lg-6.mt-5            
          .bloque-texto-g.color-secundario.p-4.mb-4
            .row.justify-content-center.mt-5  
                  
              .col-lg-12.mt-5
                p.edit-angle.mt-5 <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Alguna de la información registrada se encuentra obsoleta
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i> No todas las personas tienen acceso a la información.

                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Entre estos archivos es posible encontrar libros, fotografías, guías y cartillas, entre otros.
                p.mt-5
                p.mt-5
                

                
              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/Tema2/img13.png').imgdimensioncaj4  

    h4.my-5 Herramientas informáticas

    p El manejo y procesamiento de datos implica contar con herramientas informáticas que administren los registros, agilicen procesos y faciliten la comunicación.
    p.mb-5 En el mercado hay una gran variedad de herramientas capaces de desarrollar este tipo de procesos, sin embargo, para seleccionar el software de registro de información adecuado, es necesario tener en cuenta algunos puntos clave, como: 

    .row.mb-5    
      .col-lg-5
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--moradoColor")
          
          .row(titulo="Registrar todas las acciones que se desarrollen en tiempo real dentro del <em>software</em> ")
            .col-11
              p.mb-0 Esto facilitará conocer los movimientos y los encargados de ellos, por lo que, si ocurre algún error dentro del proceso, se identificará a la persona responsable de dicha acción.
          
          .row(titulo="Proteger elementos dentro del registro de información")
            .col-11
              p.mb-0 El 
                i software 
                | deberá tener la capacidad de bloquear o eliminar elementos inútiles dentro del proceso productivo, y prevenir y eliminar posibles errores en la incorporación de nueva información.
          
          .row(titulo="Recuperar la información")
            .col-11
              p.mb-0 Es importante que el 
                i software 
                | permita recuperar información con facilidad, por lo que deberá contener copias de seguridad y otros elementos básicos para este proceso.

          .row(titulo= "Tener un almacenamiento central")
            .col-11
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
              p.mb-0 Un sistema de seguridad específico para el registro de información es fundamental debido a que esta puede caer en manos equivocadas, ocasionando problemas que incluso pueden trascender al ámbito legal.
          
          .row(titulo="Leer varios formatos")
            .col-11
              p.mb-0 La información puede estar registrada de diversas maneras: texto, audio, video, entre otros, por ello las herramientas informáticas deben ser capaces de leer cualquier documento en cualquier tipo de formato. 
          
          .row(titulo="Validar la búsqueda de información")
            .col-11
              p.mb-0 Las herramientas informáticas deben ser capaces de encontrar de diferentes formas los datos almacenados; por este mismo motivo es importante que la información se guarde de manera ordenada y coherente.
          
          .row(titulo= "Ser accesible ")
            .col-11
              p.mb-0 Es necesario que en cualquier lugar de la organización sea posible acceder a la información registrada.

    h4.my-5  Verificación y supervisión de la información registrada

    .row.justify-content-around.align-items-center
      .col-10
        .bloque-texto-g.color-secundario.lila.p-4.mb-4
          .row.justify-content-around.align-items-center
            
            .col-11
              .row  
                .col-lg-2
                  figure
                    img(src="@/assets/curso/temas/Tema2/img14.svg").imgdimensioncajlila               
                .col.lg-11                   
                  p Verificar la información es vital en cualquier proceso investigativo. Esta actividad consiste en la inspección de cada uno de los documentos o datos almacenados en un registro. El proceso puede variar de acuerdo con las políticas organizacionales. Entre las características para el desarrollo de este proceso se encuentran las siguientes:
    .row.mt-4.mb-5
      
      .col-lg-12
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--amarillaColor")
          
          .row(titulo="Tiempo")
            .col-12
              p.mb-0 Fijar o establecer un tiempo determinado para desarrollar el proceso de verificación, ya que este puede variar según los momentos en que se vincula nueva información. Inspeccionar la información previamente establecida ayudará a detectar posibles fallas o errores.
          .row(titulo="Cambios en la clasificación de la información")
            .col-12
              p.mb-0 Si se desarrollan cambios específicos dentro de la forma de registrar información, se deberán verificar los datos almacenados dentro del sistema.
          

          .row(titulo="Incremento de la información")
            .col-12
              p.mb-0 En algunos casos en donde la información registrada no sea lo suficientemente útil, permitirá verificar la antigua y nueva información que se va a almacenar, clasificándola de acuerdo con los criterios establecidos.
          
          .row(titulo="Verificación en caso de fraude")
            .col-12
              p.mb-0 Es posible que al desarrollar otros procesos investigativos las organizaciones encuentren fallas, errores o fraudes en investigaciones relevantes, por eso se podrá verificar información almacenada previamente.

          .row(titulo="Ajustes investigativos")
            .col-12
              p.mb-0 La información recolectada hace diez años variará, independientemente del enfoque en que se encuentre, por esto será primordial verificarla, con el fin de pasarla por un filtro para establecer su utilidad.

          .row(titulo="Cambios en los sistemas de registro de información")
            .col-12
              p.mb-0 Si se cambia la herramienta de registro de información, las organizaciones tendrán la oportunidad de verificar la información antes de pasarla al nuevo sistema.
        .row.justify-content-center      
          .col-lg-10          
            p Supervisar la información es de suma importancia para cualquier entidad, por lo que diariamente las herramientas informáticas desarrollan nuevos elementos para la coordinación de los datos. Algunas de estas funciones son:  
    
    .row.justify-content-center     
      .col-lg-7.mt-5 
        
        p.edit-angle.mb-3 <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Incluir nueva información. 
        p.edit-angle.mb-3 <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Enviar o compartir información, ya sea dentro o fuera de la organización.
        p.edit-angle.mb-3 <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Tener una red interna de información para que todas las áreas de la empresa compartan y conozcan la información registrada.
        p.edit-angle.mb-3 <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Ordenar o agrupar información según sea la necesidad u objetivo de la investigación.
        p.edit-angle.mb-3 <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Alertar sobre cambios o ajustes relevantes en el registro o movimiento de la información.

      .col-lg-3
        figure
          img(src="@/assets/curso/temas/Tema2/ing11.png", alt="alt")

      
    .row
      .col-lg-11
        p.mt-5 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
          

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

<style lang="sass">
div.acordion__activo
  background-color: #FFFEE1
</style>
