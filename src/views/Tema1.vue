<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Entrevista

    
    .row.justify-content-center.align-items-start 
      hr.editlinea.text-center         
      .col-lg-7
        .bloque-texto-b.color-adicional-1.p-1   
          .bloque-texto-b.color-cajon
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.edittext La entrevista se basa en la comunicación entre dos o más personas con el objetivo que una de las partes responda interrogantes específicos planteados previamente. Esta se podría considerar una de las técnicas de recolección de información más implementadas en los procesos investigativos de mercadeo 
              b.edit3  (Grasso, 2006).
              i.fas.fa-quote-right                    
      .col-lg-2
        figure 
          img(src='@/assets/curso/temas/Tema1/img1.png')  



    .row.justify-content-center.align-items-start.mt-4  
            
        .col-lg-1
          figure
            img.img-a.img-t(src='@/assets/curso/temas/Tema1/img2.svg')                        
        .col-lg-9
          p Es importante mencionar que las entrevistas pueden tener distintos propósitos, como vincular nuevo personal en una vacante de trabajo o aportar datos en una investigación académica o de mercado, entre otros. Los aspectos principales que deben tenerse en cuenta en una entrevista son:
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #5C22C3"></i>  Definir el tipo de resultados que se desea (cuantitativos o cualitativos).
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #5C22C3"></i>  Establecer el entorno adecuado para llevarla a cabo (presencial, telefónica o virtual). 
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #5C22C3"></i>  Elaborar preguntas coherentes, cortas y puntuales.
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #5C22C3"></i>  Determinar si se hará de forma individual o grupal.
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #5C22C3"></i>  Llevar a cabo un proceso riguroso de preparación.
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #5C22C3"></i>  Tener claridad sobre los temas que se van a tratar.
          p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #5C22C3"></i>  Darles un tratamiento muy cuidadoso a los datos obtenidos.
    .row
      .col-lg-11
        P.mt-2 De acuerdo con los diferentes criterios, las entrevistas se pueden clasificar de diversas formas. Según su estructura pueden ser estructuradas, semiestructuradas o no estructuradas.

    .row.justify-content-around.align-items-center.mt-3.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/Tema1/img3.png", alt="alt")
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--amarillaColor")
          
          .row(titulo="Estructuradas")
            .col-11
              p.mb-0 Este tipo de entrevistas son usuales cuando se trata de evaluar candidatos a puestos específicos dentro de las empresas. En su mayoría facilitan la comparación entre varios candidatos con el propósito de seleccionar al más idóneo. Se realizan de forma ágil y presentan el mismo número de oportunidades para todas las personas encuestadas, procurando una selección justa.
          .row(titulo="Semiestructuradas ")
            .col-11
              p.mb-0 En estas entrevistas las preguntas pueden o no seguir un orden específico. El entrevistador tiene una guía sobre el tipo y las preguntas que puede hacer, sin embargo, no está obligado a hacerlas todas y tiene la libertad de indagar sobre otros temas, conforme a lo que considere necesario según su criterio.
          
          .row(titulo="No estructuradas")
            .col-11
              p.mb-0 Estas entrevistas se caracterizan porque el entrevistador no sigue un orden. Son únicas para cada candidato, ya que según transcurre la entrevista, el entrevistador hará, o no, algunas preguntas. Entre sus principales características está que en su mayoría son improvisadas y tienen una gran adaptabilidad a los temas tratados. Cabe resaltar que el hecho de que estas entrevistas sean ‘improvisadas’ no significa que el entrevistador desconozca el tema, más bien es todo lo contrario, ya que el entrevistador debe conocerlo lo suficientemente bien como para poder tener la flexibilidad y capacidad de hacer preguntas aleatorias y acertadas.


    p Es importante mencionar que la entrevista es una técnica para recoger información que puede presentar tanto beneficios como desventajas para la organización que la práctica. Algunos de los factores más relevantes son:
    .row.justify-content-around.align-items-center.mt-2.mb-5
      .col-lg-7
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema1/img4.svg', alt='Texto que describa la imagen')
                  
         
          div(x="28%" y="49%" tooltip="Ver más" numero="+")
            .h5.mb-2 Beneficios
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Se puede desarrollar un estudio en profundidad sobre temas específicos.
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Se puede hacer en lugares físicos o virtuales.
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Según el tipo de preguntas, dentro de esta se podrá organizar la información de forma ágil y específica.
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Facilita la comunicación del entrevistado con el entrevistador.
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Se pueden resolver interrogantes que se presenten durante la entrevista.
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Permite manejar o controlar el espacio donde se desarrolla la entrevista, con el fin de contribuir a la comunicación con los entrevistados. 
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  En algunos casos es posible identificar la competencia de acuerdo con la perspectiva del cliente.

          
          div(x="87%" y="35%" tooltip="Ver más" numero="+")
            .h5.mb-2 Desventajas
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  El factor tiempo influye, ya que la entrevista exige preparación, desarrollo, organización y análisis de la información recolectada.
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Es necesario capacitar al personal que lleve a cabo el proceso (encuestadores).
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  No presenta una forma de comprobación de la información recolectada.
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Puede tener un costo elevado (materiales, contratación de personal capacitado, pago o remuneración a los participantes de las entrevistas, entre otros).
            p.edit-angle <i class="fas fa-angle-right" STYLE="Color: white"></i>  Un ambiente inapropiado para el desarrollo de la entrevista puede alterar sus resultados.
    separador
      
    #t_1_1

    .titulo-segundo.color-acento-contenido
      h2 1.1  Herramientas informáticas
    
    .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption VIDEO
    .row
      .col-lg-11
        p.mt-5 Gracias a los diferentes avances registrados en los últimos años, las empresas y demás organizaciones han optado por desarrollar entrevistas usando herramientas informáticas, ya que facilitan y optimizan los procesos; el entrevistado no tendrá que trasladarse a ningún lugar y el entrevistador u organización entrevistadora agilizará y ahorrará recursos. Algunas de las herramientas informáticas más implementadas para el desarrollo de entrevistas son: 


   
      .row.mt-5
        
        .col-lg-6.mt-3
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--moradoColor")
            
            .row(titulo="Aplicaciones de videoconferencias ")
              .col-11
                p.mb-0 Facilitan la comunicación del entrevistado con el entrevistador, en audio y video en tiempo real. Algunas permiten el uso de un chat dentro de la misma videoconferencia, usar una pizarra digital y proyectar la pantalla, entre otras funciones que facilitan y permiten comprender mejor la información. Entre las aplicaciones más conocidas e implementadas están Google Meet, Zoom y Skype. Esta última fue la pionera en dicha modalidad, siendo, irónicamente, la menos utilizada hoy en día.

            .row(titulo="Elementos visuales introductorios")
              .col-11
                p.mb-0 En algunos procesos de entrevistas se desarrollan elementos introductorios que facilitan una comunicación recíproca entre el entrevistador y el entrevistado. Este tipo de herramientas optimizan y ayudan a ahorrar tiempo durante un proceso investigativo. Dentro de las herramientas audiovisuales se pueden presentar audios, videos, imágenes, gráficos, entre otros. Esas presentaciones se hacen mediante aplicaciones de videoconferencia con diferentes funciones, como por ejemplo la de proyección de pantalla.

            .row(titulo="Cuestionarios en línea")
              .col-11
                p.mb-0 La necesidad de llevar a cabo entrevistas en línea impulsó el desarrollo de portales específicos que facilitan el proceso de evaluación de los entrevistados a partir de cuestionarios, los cuales se pueden observar en tiempo real, por lo que el encuestador podrá monitorear a distancia el comportamiento y las respuestas seleccionadas por los entrevistados.


            .row(titulo= "Uso de un  software   ATS ")
              .col-11
                p.mb-0 También conocidos como sistemas de gestión del proceso de selección, son softwares que facilitan y permiten seleccionar al candidato más idóneo para un puesto de trabajo, por medio de pasos específicos que van desde su validación para una nueva vacante, hasta la contratación y capacitación del empleado. Cabe mencionar que estos softwares deberán estar acompañados por talento humano que valide y gestione los procesos específicos. 

        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/Tema1/img5.png", alt="alt")
    
    p.mt-2 A continuación, se describirá el proceso de un software de ATS, que se encarga de facilitar la técnica de entrevistas en un ambiente laboral.
      
    .row.justify-content-around.align-items-center.mt-4.mb-5
      .col-lg-9
        figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/Tema1/img6.png", alt="alt")
    

      separador      

      #t_1_2

      .titulo-segundo.color-acento-contenido
        h2 1.2	Herramientas presenciales
      
      .row.justify-content-center.align-items-start          
          .col-lg-2.my3
              img(src='@/assets/curso/temas/Tema1/img7.png')                        
          .col-lg-8.mt-5
            p.mb-0 Las entrevistas presenciales no han dejado de ser utilizadas, debido a que muchas empresas consideran de vital importancia conocer en persona a los entrevistados. A pesar de que este tipo de técnica es utilizada desde hace varios años, las empresas pueden usar herramientas que facilitan y optimizan este proceso.


      TabsB.color-acento-contenido.mt-5
        .py-4.py-md-5(titulo="Presentaciones de información" :icono="require('@/assets/curso/temas/Tema1/icono1.svg')")
          .row.justify-content-center.align-items-start 
            .col-md-7.mb-4.mb-md-0            
              p Para la inducción al proceso de entrevista se pueden hacer presentaciones con información relevante sobre los procesos o conocimientos necesarios para llevar a cabo la entrevista. En estos se podrá dar una breve introducción sobre los temas, mostrar los elementos que se van a utilizar en la entrevista o establecer reglas específicas para el proceso. Algunos ejemplos de estos son las presentaciones de PowerPoint proyectadas en una pantalla, los folletos y guías, entre otros.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/Tema1/img8.png', alt='Texto que describa la imagen')
                
        .py-4.py-md-5(titulo="Cuestionarios" :icono="require('@/assets/curso/temas/Tema1/icono1.svg')")
          .row.justify-content-center.align-items-start 
            .col-md-7.mb-4.mb-md-0            
              p Según la información que se quiere extraer de las entrevistas, se podrá necesitar algún tipo de cuestionario específico, por lo que es necesario que estos se elaboren con anterioridad, dejando en claro que no podrán ser el centro de atención del proceso investigativo. 
            .col-md-3   
              figure
                img(src='@/assets/curso/temas/Tema1/img9.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Elementos comunicativos" :icono="require('@/assets/curso/temas/Tema1/icono3.svg')")
          .row.justify-content-center.align-items-start 
            .col-md-7.mb-4.mb-md-0            
              p Dentro de la recolección de información se pueden presentar elementos comunicativos para facilitar el proceso, por esto, a través de los años se ha decidido implementar diversos materiales, como tarjetas de presentación (en estas se indica el nombre de cada persona) y elementos didácticos para mejorar y contribuir con la comunicación en la entrevista.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/Tema1/img10.png', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Espacios adecuados" :icono="require('@/assets/curso/temas/Tema1/icono4.svg')")
          .row.justify-content-center.align-items-start 
            .col-md-7.mb-4.mb-md-0            
              p A pesar de no considerarse una herramienta específica, es de vital importancia preparar un espacio adecuado para el proceso investigativo, por lo que se considera de alta prioridad tener un lugar apto para las entrevistas. Se recomienda tener allí todos los elementos necesarios para el proceso investigativo, y que el ambiente cuente con buena iluminación y con características beneficiosas para el propósito investigativo (espacios abiertos, sin contaminación auditiva, etc.)
            .col-md-3
              figure
                img(src='@/assets/curso/temas/Tema1/img10.png', alt='Texto que describa la imagen')
      separador

      #t_1_3

      .titulo-segundo.color-acento-contenido
        h2 1.3	Conceptos de comunicación 

      p.mt-3 La definición de comunicación varía según el autor y la época, no obstante, hoy se considera como el intercambio de información entre dos o más personas, con un fin específico. Entre los principales elementos básicos que componen la comunicación se encuentran:
          

      .row
        .col-lg-10.position-relative
          h3.mb-4.text-center.txt--purpura  
          .avatar        
            figure  
            
              img(src="@/assets/curso/temas/Tema1/icon8.png", alt="alt").img250
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema1/icon1.png", alt="alt").img100
              .col-lg-7
                h5 Emisor
                p.text-small Es el encargado de producir y enviar un mensaje. 
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema1/icon2.png", alt="alt").img100
              .col-lg-7 
                h5 Receptor 
                p.text-small Es quien recibe y decodifica el mensaje, sin embargo, lo que decida hacer con el mensaje dependerá únicamente de él mismo.
          
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema1/icon3.png", alt="alt").img100
              .col-lg-7
                h5 Mensaje 
                p.text-small Información que se quiere transmitir.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema1/icon4.png", alt="alt").img100
              .col-lg-7
                h5 Canal 
                p.text-small Es el medio físico por el que se envía el mensaje, como correo, cara a cara, mensaje de texto, Internet, entre otros.

          .crd.crd--avatarHorizontal.crd--last.dos.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema1/icon5.png", alt="alt").img100
              .col-lg-7
                h5 Contexto  
                p.text-small Es el lugar o la situación en la que se desarrolla el mensaje.

          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema1/icon6.png", alt="alt").img100
              .col-lg-7
                h5 Referente  
                p.text-small Es lo que busca evocar el mensaje, es decir, un conocimiento o saber compartido previo.

          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema1/icon7.png", alt="alt").img100
              .col-lg-7
                h5 Código  
                p.text-small Son los signos o reglas implementadas para transmitir el mensaje, por ejemplo, números, letras, braille, imágenes, entre otros.
    
      p.mt-4 La comunicación puede llegar a tener diferentes funciones según el contexto, tema o personas involucradas. Algunas de estas funciones son:

    
      .tarjeta.tarjeta--purple.p-4      
        PasosB.color-acento-contenido
          .row(titulo="")
              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/Tema1/linea1.png', alt='Texto que describa la imagen')
                  

              .col-md-8.mb-4.mb-md-0
                b Representativa o informativa 
                p Se utiliza para dar a conocer una noticia acerca de un tema específico, a un público determinado, teniendo un enfoque de carácter formal o informal. Algunos ejemplos de los mecanismos que hacen uso de esta función son:
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Noticiero
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Periódico
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Revista


          .row(titulo="")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema1/linea2.png', alt='Texto que describa la imagen')
                

            .col-md-8.mb-4.mb-md-0
              b Expresiva o emotiva  
              p Utilizada netamente para expresar las emociones del emisor, ya sean de carácter positivo o negativo. Algunos ejemplos de estos son:
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  ¡Ya no quiero verte!
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  ¡Me haces falta, amor!
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Eres buen trabajador



          .row(titulo="")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema1/linea3.png', alt='Texto que describa la imagen')
                

            .col-md-8.mb-4.mb-md-0
              b Apelativa o conativa  
              p Se emplea para dar órdenes o indicaciones. El objetivo es involucrar o afectar directamente al receptor, influyendo en las actitudes o conductas que este pueda tener. Algunos ejemplos son:
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Manuales de conducta
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  ¡Juan, ordena tu cuarto!
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Guías paso a paso


          .row(titulo="")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema1/linea4.png', alt='Texto que describa la imagen')
                

            .col-md-8.mb-4.mb-md-0
              b De contacto o fática
              p Puede dividirse o clasificarse en dos, la primera para iniciar una conversación, y la segunda para verificar la funcionalidad del canal de comunicación o el mensaje transmitido. Algunos ejemplos de esta son:
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  ¿Todo bien?
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Hola
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Cartas de bienvenida

          .row(titulo="")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema1/linea5.png', alt='Texto que describa la imagen')
                

            .col-md-8.mb-4.mb-md-0
              b Metalingüística 
              p Se relaciona directamente con la claridad o entendimiento del mensaje, teniendo en cuenta que esta función afecta tanto al receptor como al emisor. Los ejemplos son:
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  No entiendo lo que quieres
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  Todo quedó claro
              p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #642DC6"></i>  ¿Me repites la información, por favor?


          .row(titulo="")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/Tema1/linea6.png', alt='Texto que describa la imagen')
                

            .col-md-8.mb-4.mb-md-0
              b Estética o poética  
              p Se centra en embellecer o crear un mensaje con un impacto poco tradicional y más lúdico. Es empleada en publicidad o marketing para hacer más llamativos los mensajes para el cliente.
















































































      
      Separador 

      #t_1_4

      .titulo-segundo.color-secundario      
        h2 1.4 	Comunicación asertiva

      .row       
        .col-lg-9.mt-5
          p Comunicarse es tan solo el primer paso para la transmisión de un mensaje. Es necesario que las personas logren una convivencia sana con la sociedad. La comunicación asertiva es la habilidad que tienen las personas para transmitir información de una forma respetuosa, directa y con calma. Existen algunos elementos característicos que reconocen y permiten llevar a cabo una comunicación asertiva. 
        .col-lg-2
          img(src='@/assets/curso/temas/Tema1/img12.png')  


      .row.mt-2
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/Tema1/img13.png", alt="alt")
          
          .col-lg-6.mt-3
            LineaTiempoD.color-acento-contenido
              .row(numero="1" titulo="Prestar atención y valorar la situación ")
                .col-md-10.mb-4.mb-md-0
                  p Antes de incluirse dentro de una conversación, o ser parte de esta, es importante estudiar el contexto en el que se desarrolla para evitar malentendidos, en especial si es sobre política, asuntos personales o religión, entre otros temas delicados.
                

              .row(numero="2" titulo="Ser sencillo (no usar tecnicismos) ")
                
                .col-md-10.mb-4.mb-md-0
                  p En este punto es importante tener en cuenta con qué personas se está llevando a cabo la conversación, ya que, si todos conocen el tema, se podrá recurrir a terminología específica, de lo contrario es mejor usar un lenguaje sencillo.
              
              .row(numero="3" titulo="Cuidar el lenguaje no verbal ")
                
                .col-md-10.mb-4.mb-md-0
                  p La postura y el tono de voz van ligados directamente a la forma como nos comunicamos. Por esa razón el lenguaje no verbal se debe cuidar, con el fin de evitar molestias o dar la imagen equivocada. El contacto visual, el tono de voz muy alto, o muy bajo, pueden afectar la comunicación.

              .row(numero="3" titulo="Respeto y coherencia  ")              
                .col-md-10.mb-4.mb-md-0
                  p Todos los seres humanos piensan y actúan de forma diferente, por ello es necesario incluir el respeto dentro de una buena comunicación. Otro factor primordial es la coherencia, para evitar malentendidos y problemas de interpretación.

              .row(numero="3" titulo="Manejar los sentimientos ")              
                .col-md-6.mb-4.mb-md-0
                  p Aprender a controlar los sentimientos es clave a la hora de comunicarnos. Dejarse llevar por la ira o el enfado, mostrar ironía o reírse en el momento menos oportuno puede enrarecer el ambiente comunicativo y echar a perder un negocio, el alcance de un cliente e incluso una amistad.  

              .row(numero="3" titulo="Validar la comprensión del mensaje  ")              
                .col-md-10.mb-4.mb-md-0
                  p Es importante asegurarse de que el mensaje fue lo suficientemente claro y que se entendió. Para ello es bueno preguntar directamente si se tienen dudas o comentarios sobre lo comunicado.

        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
