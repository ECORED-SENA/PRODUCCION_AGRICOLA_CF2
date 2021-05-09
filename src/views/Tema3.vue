<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Gestión de la calidad

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 En este apartado se presenta el concepto del sistema de gestión de calidad, la normatividad general que lo enmarca y las recomendaciones para su aplicación en la empresa.

    #t_3_1.titulo-segundo
      .h4 3.1 Concepto
    
    p.mb-4 La adopción de un sistema de gestión de la calidad es una decisión estratégica para una organización que le puede ayudar a mejorar su desempeño global y proporcionar una base sólida para las iniciativas de desarrollo sostenible (NTC-ISO 9001). 

    p.mb-5 Un Sistema de Gestión es el modo en el que una empresa u organización ordena sus procesos para intentar conseguir la satisfacción del cliente. Implementar un Sistema de Gestión de la Calidad es una estrategia de mercado muy beneficiosa, inicialmente podemos realizar una medición de los resultados, comunicación asertiva entre las diferentes áreas de la empresa y una mejora continua entre otros. (ISO 9001:2015, 2018).

    hr

    #t_3_2.titulo-segundo
      .h4 3.2 Normatividad general 

    .row
      .col-12.col-md-10
        .row
          .col-8
            p.mb-4 La norma ISO 9001:2015 establece los requisitos mínimos para lograr implementar un Sistema de Gestión de la Calidad y así de esta forma buscar la mejora continua en la empresa. Lo invitamos a revisarla y profundizar en la misma. 
            a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          .col-3
            figure
              img(src='@/assets/curso/tema3/img01.svg', alt='Normatividad general ')
    
    hr

    #t_3_3.titulo-segundo
      .h4 3.3 Aplicabilidad en la empresa

    p.mb-4 La implementación de un Sistema de Gestión de la Calidad permite la competitividad en el mercado, lograr la distinción entre las demás empresas del mercado y lograr un valor agregado en sus productos. 

    p.mb-4 Para establecer un sistema de calidad de buenas prácticas agrícolas es necesario que la finca o unidad productiva cuente con un Manual como principal documento para la consolidación y mantenimiento de los procedimientos, formatos y registros a llevar a cabo en la implantación de las actividades que hacen parte de buenas prácticas agrícolas.

    p.mb-4 En la elaboración de Manual de Calidad de Buenas Práctica Agrícola de la unidad productiva o finca tenga en cuenta:

    p.mb-4
      strong A. ESTRUCTURA DE LA DOCUMENTACIÓN: 
      | la documentación del Sistema de Gestión se debe encontrar disponible para la consulta de todos los funcionarios.

    p.mb-4
      strong B. DOCUMENTOS: 
      | la documentación mínima que compone el Sistema de Gestión de Calidad es: 

    .row.justify-content-center.mb-4
      .col-10.col-md-4
        figure
          img(src='@/assets/curso/tema3/img02.svg', alt='Documentos')

    .row
      .col-12.col-md-6.mb-4.mb-md-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Plan estratégico")
            p Define la orientación de la unidad o finca productiva en el corto y mediano plazo, incluye la misión, es decir, la razón de ser de la producción agrícola y los objetivos que se definen como el elemento programático que identifica la finalidad hacia la cual deben dirigirse los recursos y esfuerzos, estableciendo las metas y el plan de acción para dar cumplimiento a la misión o a los propósitos productivos, y son la base para su seguimiento y evaluación de acuerdo con lo establecido en las buenas prácticas agrícolas. 

          div(titulo="Manual de calidad")
            p Es el documento que especifica y detalla el alcance del sistema de gestión de la calidad, los procedimientos documentados establecidos para el sistema de gestión o referencia a los mismos, así como la descripción de la interacción entre procesos productivos de la unidad o finca de acuerdo con la normatividad de buenas prácticas agrícolas.
            
          div(titulo="Mapa de procesos")
            p En él se identifican los procesos que se desarrollan en la empresa o producción agrícola de acuerdo con las buenas prácticas agrícolas.
        
          div(titulo="Caracterizaciones de proceso")
            p Tienen como finalidad describir los procesos productivos, definiendo entre otros, el objetivo, el alcance, el responsable, los recursos necesarios para su operación, los productos resultantes y los indicadores necesarios para garantizar su control de acuerdo con lo establecido en la normatividad de buenas prácticas agrícolas.
        
          div(titulo="Procedimientos")
            p Especifican de manera detallada la forma de ejecutar las diferentes actividades del proceso productivo tendientes al cumplimiento de los objetivos de los diferentes procesos identificados en el sistema. Dichos procedimientos cuentan con una documentación de referencia que apoya de manera directa su desarrollo, entre ellos se cuentan las fichas de productos, fichas de indicadores e instructivos.

          div(titulo="Instructivos")
            p Orientan a los trabajadores y operarios sobre la forma detallada y específica de adelantar una actividad o labor del proceso productivo que se encuentra involucrada en los procedimientos.
      
      .col-12.col-md-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Registros")
            p Conjunto de evidencias que se generan una vez se han adelantado las diferentes actividades del proceso productivo. El acatamiento y verificación de cada uno de ellos se evalúa mediante las auditorías internas, las cuales permiten garantizar el cumplimiento de los requisitos y la mejora continua de los sistemas productivos.
      
          div(titulo="Actualización del manual de calidad")
            p La solicitud, preparación y revisión de los cambios del manual de calidad se desarrolla de acuerdo con las disposiciones adoptadas para el control de los documentos de las buenas prácticas agrícolas.

          div(titulo="La documentación y sus cambios debe ser revisada y aprobada")
            p La documentación y sus cambios debe ser revisada y aprobada por el “responsable del Sistema de Gestión de Calidad” quien debe actualizar el listado maestro de documentos del Sistema de Gestión de Calidad.  Todos los documentos se identifican con un código, número de actualización y fecha de emisión/revisión y, sus páginas se numeran adecuadamente.

          div(titulo="copia de toda la documentación")
            p Existe una copia de toda la documentación en el lugar destinado al control de documentos.

          div(titulo="Responsable del Sistema de Gestión de Calidad")
            p El responsable del Sistema de Gestión de Calidad es el encargado de asegurar que el sistema y toda la documentación sea revisada, y en caso de cambios en los documentos o la emisión de nuevos documentos, los documentos obsoletos deben ser debidamente anulados.

          div(titulo="Control de documentos")
            p Los documentos del Sistema de Gestión de Calidad se codifican de la siguiente manera:  deben tener un encabezado que incluya el logo de la empresa, nombre del documento, código y fecha.  Se debe realizar un diagrama de flujo de los diferentes procesos esenciales del predio, que quedan definidos en la secuencia e interrelaciones de los referenciados procesos.  Para asegurarse de que el control de estos procesos sea eficaz, aparte de documentarlos, se procede a definir unos indicadores de proceso para efectuar su seguimiento.          

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
