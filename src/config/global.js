export default {
  global: {
    componenteFormativo: 'Entrevista y registro de información',
    descripcionCurso:
      'La entrevista y el registro de información, son parte fundamental del proceso investigativo y el cumplimiento de sus objetivos. En este componente formativo se plantearán los elementos para el desarrollo adecuado de una entrevista; los recursos básicos para el registro de la información y actividades prácticas para aplicar la fundamentación teórica adquirida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Entrevista',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Registro de información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Entrevista',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020).<em> Tipos de entrevistas.</em>',
      tipo: 'Video ',
      link: 'https://youtu.be/4DtWOtrYU0o ',
    },
    {
      tema: 'Entrevista',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021).<em> Pautas para hacer entrevistas y cualidades básicas de un buen entrevistador.</em>',
      tipo: 'Video ',
      link: 'https://youtu.be/71OmYTRNNGQ ',
    },
    {
      tema: 'Registro de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021).<em> Seguridad de la información.</em>',
      tipo: 'Video',
      link: 'https://youtu.be/OC8x73OfV6s ',
    },
    {
      tema: 'Registro de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <em>Administración y normativa de registros de información.  Introducción.</em>',
      tipo: 'Video',
      link: 'https://youtu.be/ytQ19oNM_Ro ',
    },
    {
      tema: 'Registro de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020).<em> Introducción. Procedimiento para el diseño y registro de informes.</em>',
      tipo: 'Video',
      link: 'https://youtu.be/fCS0WEcYbmo',
    },
    {
      tema: 'Registro de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021).<em> Pruebas de validación de bases de datos. Introducción.</em>',
      tipo: 'Video',
      link: 'https://youtu.be/U3RWZi2CwQo ',
    },
  ],
  glosario: [
    {
      termino: 'Aplicaciones',
      significado:
        '<em>softwares </em> informáticos que desempeñan funciones específicas según su programación y evolución, y que normalmente son implementadas en dispositivos electrónicos.',
    },
    {
      termino: 'Candidato',
      significado:
        'aspirante a desempeñar algún puesto o cargo específico dentro de una organización. ',
    },
    {
      termino: 'Evaluar',
      significado:
        'asignar un tipo de calificación a una persona o elemento, según criterios previamente establecidos.  ',
    },
    {
      termino: 'Fáctico',
      significado: 'adjetivo que se vincula directamente con hechos reales. ',
    },
    {
      termino: 'Fraude',
      significado:
        'acción ilegal engañosa que compromete la veracidad de la información mediante engaño o suplantación. ',
    },
    {
      termino: 'Lenguaje no verbal',
      significado:
        ' transmisión de mensajes mediante gestos, movimientos, posturas, miradas y elementos del entorno, entre otros medios.',
    },
    {
      termino: 'Metalingüística',
      significado:
        ' referente al metalenguaje, que es el tipo de lenguaje utilizado para describir la acción comunicativa dentro del entorno de la programación, o el lenguaje que se usa para hablar del lenguaje en sí. La metalingüística estudia el lenguaje y su relación con los comportamientos culturales.',
    },
    {
      termino: 'Preparación',
      significado:
        ' proceso previo a la ejecución de una actividad que requiere de elementos o conocimientos específicos.',
    },
    {
      termino: 'Recolección',
      significado:
        ' reunir o agrupar diferentes elementos o información que cumpla con características especiales y con propósitos específicos. ',
    },
    {
      termino: 'Repositorio',
      significado:
        ' lugar o ubicación donde se guarda información, esto en su mayoría, con características específicas o representativas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Grasso, L. (2006). <i>Encuestas: elementos para su diseño y análisis</i>. Encuentro Grupo Editor.',
    },
    {
      referencia:
        'Hoyer, W., Maclnnis, D. & Pieters, R. (2018).<i> Comportamiento del consumidor </i>(trad. Consuelo García). Cengage Learning.',
      link: 'https://bit.ly/2WfvgjN.',
    },
    {
      referencia:
        'Kerin, R. y Hartley, S. (2019). <i>Marketing</i>. McGraw-Hill.',
    },
    {
      referencia:
        'Sanabria, F. (2018). <i>Investigación de mercados: un enfoque práctico y descriptivo</i>. Ecoe Ediciones.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
