export default {
  global: {
    componenteFormativo: 'Gestión de requisitos',
    descripcionCurso:
      'Este componente formativo aborda la ingeniería de requisitos y el levantamiento de requerimientos para prever el comportamiento del <em>software</em>. Utiliza casos de uso, historias de usuario y Lenguaje de Modelado Unificado para modelar funcionalidades e interacciones. Además, introduce Herramientas CASE, esenciales para visualizar y construir <em>software</em>',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Características Lenguaje Unificado de Modelado UML',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Especificación y análisis de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Relaciones de casos de uso',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Casos de uso reales (Prototipos)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Historias de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Diagrama de actividades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diagramas de clase',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Asociaciones',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Herencia',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Agregación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Composición',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Herramientas CASE',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Diagrama de casos',
      referencia:
        'Nicosiored. (2017, November 22). Diagrama de Casos de Uso II - 5 - Tutorial UML en español. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/DUjBnEvIm1M?feature=shared',
    },
    {
      tema: 'Diagrama de actividades',
      referencia:
        'Nicosiored. (2018, January 31). Diagrama de Actividades - 15 - Tutorial UML en español. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/GoYdpOVhDRc?feature=shared',
    },
    {
      tema: 'Diagramas de clase',
      referencia:
        'TodoCalls & DataScience (2017).Curso UML Diagrama de Clases. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7WRYH2ei5Rw&t=106s',
    },
    {
      tema: 'Lista Herramientas Case',
      referencia:
        'Herramientas CASE (2008, July 11).  Herramientas CASE más utilizadas.',
      tipo: 'Página web',
      link: 'https://herramientascase.wordpress.com/las-mas-utilizadas/',
    },
  ],
  glosario: [
    {
      termino: 'Ágil',
      significado:
        'conjunto de tareas o acciones para producir y mantener productos y lograr objetivos de proceso. incluye procedimientos, estándares, políticas y objetivos para crear y modificar productos de trabajo.',
    },
    {
      termino: 'CASE',
      significado: 'ingeniería de <em>software</em> asistida por computación.',
    },
    {
      termino: 'Herramienta CASE',
      significado:
        'una herramienta <em>software</em> que automatiza una parte de las fases del ciclo del desarrollo de sw.',
    },
    {
      termino: 'Método',
      significado:
        'indica cómo construir técnicamente el <em>software</em>, incluyendo técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'colección de métodos para resolver un tipo de problemas.',
    },
    {
      termino: 'Requerimiento',
      significado: 'petición de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'condición que debe cumplir algo, en general, esto cumple con el requerimiento.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'individuo u organización que comparte, reclama o le interesa un sistema, o le compete una característica que satisface sus necesidades y expectativas.',
    },
    {
      termino: 'Tecnología CASE',
      significado:
        'conjunto de instrumentos y técnicas software para automatizar una disciplina de la ingeniería, incluyendo metodologías estructuradas y herramientas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Booch, G. (1994). Object-oriented analysis and design. Redwood City.',
      link: '',
    },
    {
      referencia:
        'Booch, G., Rumbaugh, J., Jacobson, I., Molina, J. J. G., & Martínez, J. S. (2006). El lenguaje unificado de modelado: guía del usuario. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Cohn, M. (2004). User stories applied: For agile software development. Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Cohn, M. (2018). User Stories and User Story Examples by Mike Cohn. [online] Mountain Goat Software.',
      link: 'https://www.mountaingoatsoftware.com/agile/user-stories',
    },
    {
      referencia:
        'Cuevas Agustín, Gonzalo. (1991).  Ingenieria del Software.Práctica de la programación, Editorial RA-MA, 1 impresión.',
      link: '',
    },
    {
      referencia:
        'Flores Cueto, J. J., & Bertolotti Zúñiga, C. (2013). Diagrama de clases en uml. 6.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, J. (s.f.). Diagramas UML de casos de uso y de requisitos.',
      link:
        'http://www.lsi.us.es/~javierj/cursos_ficheros/metricaUML/CasosUsoUML.pdf',
    },
    {
      referencia:
        'Larman, C. (2002). “Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and the Unified Process”. 2nd Ed. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Norris & Rigby. (1994). “Ingeniería de software explicada”, 1 edición Editorial Megabyte-Noriega editores, México.',
      link: '',
    },
    {
      referencia:
        'Pressman, Roger. (1998). Ingeniería del Software. Un enfoque práctico, Editorial Mc. Grraw-Hill, 4ta edición, 1998.',
      link: '',
    },
    {
      referencia:
        'Rumbaugh, J., Jacobson, I., & Booch, G. (2004). El Lenguaje Unificado de Modelado. Elements, 30.',
      link: '',
    },
    {
      referencia:
        'Schmuller, J. (2001). Aprendiendo UML en 24 horas. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Schmuller, J., & Garza Marín, A. D. (2000). Aprendiendo UML en 24 horas.',
      link: '',
    },
    {
      referencia:
        'Wake, W.C. (2003).  “Extreme Programming Explored” y “Refactoring Workbook”',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
