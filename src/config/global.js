export default {
  global: {
    Name: 'Aplicación del programa de bioseguridad en empresas avícolas',
    Description:
      'Este componente formativo desarrolla fundamentos técnicos y normativos para implementar la bioseguridad en empresas avícolas. Integra medidas preventivas, POES, BPA, infraestructura biosegura, limpieza y desinfección, manejo del agua, residuos y mortalidad, control de plagas, registros y monitoreo. Fortalece competencias para prevenir enfermedades, garantizar el bienestar animal, proteger la inocuidad y promover sistemas productivos sostenibles conforme a la normatividad vigente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        titulo: 'Bioseguridad en explotaciones avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principios',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Procedimientos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Normatividad vigente',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Prácticas Operativas Estandarizadas Sanitarias (POES) y Buenas Prácticas Avícolas (BPA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y objetivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ventajas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Protocolos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Verificación y documentación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Normatividad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Infraestructura y requisitos para granjas avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Requerimientos para el establecimiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Orientación e instalaciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Áreas requeridas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Distancias sanitarias',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Delimitación, señalización y demarcación',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Sistema Todo Dentro–Todo Afuera',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Control de ingreso y Seguridad y Salud en el Trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Barreras sanitarias',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Pediluvios, rodaluvios y arcos de desinfección',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Unidad sanitaria y flujo de ingreso',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Elementos de Protección Personal (EPP)',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Riesgos laborales',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Equipos, herramientas e insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Equipos y herramientas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fichas técnicas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Mantenimiento y calibración',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Manual del fabricante',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Normatividad aplicable',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Limpieza y desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Conceptos y métodos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas y protocolos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Detergentes y desinfectantes',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Métodos de dosificación',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Normatividad aplicable',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Manejo y tratamiento del agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Características del agua',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tratamiento básico del agua',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Productos y dosificaciones',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Procedimientos de manejo',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Normatividad aplicable',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Manejo de residuos y mortalidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Clasificación de residuos',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Disposición final',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Manejo de mortalidad',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Sanitización de la pollinaza y gallinaza',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Normatividad ambiental',
            hash: 't_8_5',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Control integrado de plagas y vectores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Concepto y clasificación',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Ciclo de vida y rutas de ingreso',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Umbral de daño',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Plaguicidas, insecticidas y rodenticidas',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Medidas de prevención y control',
            hash: 't_9_5',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
