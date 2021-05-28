export default {
  global: {
    componenteFormativo: 'Sistemas de gestión',
    descripcionCurso:
      'Los sistemas de gestión permiten el manejo de un lenguaje común entre empresarios, trabajadores, clientes y proveedores, favoreciendo las relaciones dentro y fuera de las organizaciones, y aumentando la posibilidad de hacer intercambios comerciales nacionales e internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Sistemas de gestión de la seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normatividad general',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Campo de aplicación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estándares mínimos según el tipo de empresa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Peligros asociados a la producción agrícola',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Riesgos asociados a la producción agrícola',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Lesiones por accidentes de trabajo asociados a la producción agrícola',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normatividad general',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Aplicabilidad en la empresa',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Estándares mínimos ambientales según el tipo de empresa',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de la calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normatividad general',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Aplicabilidad en la empresa',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Normatividad',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Aplicabilidad en la empresa',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Técnicas de diligenciamiento',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Archivo',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Claudia Patricia Sánchez Peñaranda',
        cargo: 'Instructora',
        centro: 'AGROSENA',
      },
      {
        nombre: 'Fredy Orlando Ibáñez Morales',
        cargo: 'Instructor',
        centro: 'Agroambiental',
      },
      {
        nombre: 'Yanet Bolaños Botina',
        cargo: 'Instructora',
        centro: 'Agroambiental',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: [
          'Gilberto Junior Rodríguez Rodríguez',
          'John Jairo Arciniegas González',
          'Laura Gisselle Murcia Pardo',
          'María Carolina Tamayo López',
          'Oscar Javier Latorre Burbabo',
          'Oscar Julian Marquez Sanabria',
          'Ricardo Vásquez Arroyave',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción audiovisual',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Camisón, C., Cruz, S. & González, T. (2006). Gestión de la Calidad: conceptos, enfoques, modelos y sistemas. Pearson Educación.',
    },
    {
      referencia:
        'Decreto 1072 de 2015. [Presidencia de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      referencia:
        'Decreto 1713 de 2002.  [Presidencia de la República de Colombia]. Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos. Agosto 06 de 2002.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5542',
    },
    {
      referencia:
        'Dinamia. Consultoría Social. (2010). Guía sobre la economía social y solidaria. [Ed.]. Confederación Sindical de Comisiones Obreras.',
      link: 'https://www.ccoo.es/7b87c937a2a31bec210192511b97d5f2000001.pdf',
    },
    {
      referencia:
        'Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones. Julio 14 de 2000. DO. N° 44.093',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4275#:~:text=El%20Archivo%20General%20de%20la%20Naci%C3%B3n%20establecer%C3%A1%20los%20requisitos%20y,o%20administraci%C3%B3n%20de%20archivos%20hist%C3%B3ricos.',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural - ASOHOFRUCOL. (2015). Guía básica para la implementación de Buenas Prácticas Agrícolas. Convenio 20150937 Ministerio de Agricultura y Desarrollo Rural - ASOHOFRUCOL. ZoE.',
      link:
        'http://www.asohofrucol.com.co/archivos/Libros/Gu%C3%ADa_B%C3%A1sica_Para_la_Implementaci%C3%B3n_de_Buenas_Pr%C3%A1cticas_Agr%C3%ADcolas_2015.pdf',
    },
    {
      referencia:
        'Ministerio del Trabajo. Guía técnica de implementación para MIPYMES. Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Oficina de Comunicaciones Ministerio del Trabajo.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/51963/Guia+tecnica+de+implementacion+del+SG+SST+para+Mipymes.pdf/e1acb62b-8a54-0da7-0f24-8f7e6169c178',
    },
    {
      referencia:
        'Resolución 0312 de 2019. [Ministerio del Trabajo]. Por el cual se definen los Estándares Mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo SG-SST. Febrero 13 de 2019.',
      link:
        'https://id.presidencia.gov.co/Documents/190219_Resolucion0312EstandaresMinimosSeguridadSalud.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'peligro latente de que un evento físico de origen natural, o causado, o inducido por la acción humana de manera accidental se presente con una severidad suficiente para causar pérdida de vidas, lesiones u otros impactos en la salud, así como también daños y pérdidas en los bienes, la infraestructura, los medios de sustento, la prestación de servicios y los recursos ambientales (Decreto 1072 de 2015, Art. 2.2.4.6.2). ',
    },
    {
      termino: 'Documento',
      significado: 'Información y su medio de soporte.',
    },
    {
      termino: 'Documento obsoleto',
      significado: 'Documento que ha perdido su vigencia en fecha o contenido.',
    },
    {
      termino: 'Indicadores de proceso',
      significado:
        'Medidas verificables del grado de desarrollo e implementación del SG-SST (Decreto 1072 de 2015, Art. 2.2.4.6.2).',
    },
    {
      termino: 'Listado maestro de documentos',
      significado:
        'Relación de documentos internos y externos del Sistema Integrado de Gestión de Calidad, los cuales se encuentran asociados a los procesos que hacen parte de la empresa.',
    },
    {
      termino: 'Peligro',
      significado:
        'Fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones (Decreto 1072 de 2015, Art. 2.2.4.6.2).',
    },
    {
      termino: 'Riesgo',
      significado:
        'Combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por estos (Decreto 1072 de 2015, Art. 2.2.4.6.2).',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 1076 de 2015. [Presidencia de la República de Colombia]. Reglamentario del Sector Ambiente y Desarrollo Sostenible. Mayo 26 de 2015.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      texto:
        'Decreto 2609 de 2012. [Presidencia de la República de Colombia]. Por el cual se reglamenta el Título V de la Ley 594 de 2000, parcialmente los artículos 58 y 59 de la Ley 1437 de 2011 y se dictan otras disposiciones en materia de Gestión Documental para todas las Entidades del Estado. Diciembre 14 de 2012.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=50958',
    },
    {
      texto:
        'Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones. Julio 14 de 2000. DO. N° 44.093   ',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4275#:~:text=El%20Archivo%20General%20de%20la%20Naci%C3%B3n%20establecer%C3%A1%20los%20requisitos%20y,o%20administraci%C3%B3n%20de%20archivos%20hist%C3%B3ricos.',
    },
    {
      texto:
        'Ministerio de Agricultura y Desarrollo Rural. (2006. Gestión ambiental en el sector agropecuario.',
      tipo: 'Cartilla',
      descarga: '/downloads/Gestion_ambiental_sector_agropecuario.pdf',
    },
  ],
}
