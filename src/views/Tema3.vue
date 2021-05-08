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
          .col-4
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
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Titulo item 1")
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
          div(titulo="Titulo item 2")
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
          div(titulo="Titulo item 3")
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
          div(titulo="Titulo item 4")
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      .col-12.col-md-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Titulo item 1")
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
          div(titulo="Titulo item 2")
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
          div(titulo="Titulo item 3")
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
          div(titulo="Titulo item 4")
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

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
