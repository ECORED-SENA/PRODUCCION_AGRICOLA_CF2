<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Gestión ambiental

    p.mb-4 Una de las premisas de la implementación de buenas prácticas agrícolas es la responsabilidad en cuanto a producción más limpia, conservación de suelos y protección del medio ambiente y mantenimiento de la biodiversidad; es así que la gestión ambiental ayuda a los productores a cumplir con dicha premisa.

    #t_2_1.titulo-segundo
      .h4 2.1 Concepto

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RECeAyA510o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Concepto - Gestión ambiental
    
    p.mb-4 
      strong El sistema de gestión ambiental 
      | es el proceso que está orientado a resolver, mitigar y prevenir los problemas de carácter ambiental, con el propósito de lograr un desarrollo sostenible.

    p.mb-4 Los sistemas productivos pueden generar impactos ambientales que no necesariamente se manifiestan dentro de los límites físicos del mismo. Por ello, es necesario identificar los riesgos ambientales asociados a la producción de cultivos intra/extra establecimiento y, las prácticas y tecnologías que los minimicen.

    p.mb-4 Se deben identificar riesgos asociados a:

    .row.mb-4.justify-content-center
      .col-10
        ul.lista-ul
          li
            i.fas.fa-angle-right
            p
              strong El suelo: 
              | conservación de la capacidad productiva del suelo (fertilidad química y física), erosión eólica y/o hídrica.
          li
            i.fas.fa-angle-right
            |	Recursos hídricos en cuanto a cursos de agua superficial y subsuperficial: polución difusa, eutrofización de cuerpos de agua.
          li
            i.fas.fa-angle-right
            p
              strong El aire:  
              | emisión de gases por quema de residuos (bidones de productos fitosanitarios, por ejemplo).
          li
            i.fas.fa-angle-right
            p
              strong Manejo de residuos:  
              | realizar el triple lavado e inutilización de bidones plásticos de productos fitosanitarios.
          li
            i.fas.fa-angle-right
            |	Identificar los centros de acopio cercanos al establecimiento para realizar la deposición final, teniendo en cuenta la legislación, según corresponda.
          li
            i.fas.fa-angle-right
            p
              strong biodiversidad: 
              | relevar si se cuenta con un área protegida (parque nacional, reserva ecológica, etc.) en las cercanías del establecimiento para dimensionar el impacto de la actividad sobre las especies. Promocionar la implantación de zonas “buffer” o “barreras vegetales”.

    p.mb-4 La identificación de riesgos debe ser seguida de una priorización sobre la cual se basa la planificación de incorporación progresiva de procesos asociados al cuidado del ambiente.

    p.mb-5 La planificación debe estipular la incorporación de prácticas/tecnologías, con el fin de generar un proceso de mejora continua. El monitoreo a través de indicadores permite ver la evolución de los recursos naturales en función de los riesgos identificados inicialmente y otros nuevos que puedan surgir de la implementación de nuevas tecnologías. El desarrollo de tecnologías es dinámico, por lo que es necesario contar con un plan de capacitación. En la medida de lo posible se deben incorporar tecnologías que permitan reducir los impactos sobre el ambiente y las personas.

    #t_2_2.titulo-segundo
      .h4 2.2 Normatividad general
    
    p.mb-4 Debido a que las actividades agrícolas producen impactos sobre el suelo, agua, aire, flora, fauna y paisaje es necesario conocer la normatividad aplicable para poder realizar su debido manejo ambiental y de esta manera evitar alguna sanción posible.

    p.mb-5 Para identificar la normatividad aplicable a las actividades agrícolas es necesario realizar inicialmente un diagnóstico de estado y uso que se le dará a los diferentes componentes ambientales que hacen parte de la finca o unidad productiva agrícola; la normatividad general que se debe tener en cuenta es:    

    .col-lg-10.mb-4
      .cajon--rojo.p-4
        .h5   Norma ISO 14001
        p Esta norma de Sistemas de Gestión Ambiental (SGA) consigue que las empresas puedan demostrar que son responsables y están comprometidas con la protección del medio ambiente.

    .col-lg-10.mb-5
      .cajon--azul.p-4
        .h5 Decreto 1713 de 2015 
        p Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible: en este decreto se realiza la compilación de reglamentaciones preexistentes en materia ambiental, los considerados de los decretos fuentes se entienden incorporados a su texto, aunque no se transcriba, para lo cual en cada artículo indica el origen del mismo.
        a.fw-bold(href='https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153' target="_blank") https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153

    .row.justify-content
      .col-lg-10
        .tarjeta-Avatar-b.mb-4
            img.minWC(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.p-4
              .h5 Parte 2. Reglamentaciones - Título 2 - Biodiversidad:
              p Capítulo 1. Flora silvestre -Sección 18- Conservación de los recursos naturales en predios rurales.

      .col-lg-10
        .tarjeta-Avatar-b.mb-4
            img.minWC(src='@/assets/curso/tema2/img02.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.p-4
              .h5 Título 3 - Aguas no marítimas:
              p.mb-4 Capítulo 2. Uso y aprovechamiento del agua - Sección 1- Sección 5 a 7 - Sección 22.

              p Capítulo 3. Ordenamiento del recurso hídrico y vertimientos - Sección 4 - Artículo   2.2.3.3.4.19. Control de contaminación por agroquímicos.  - Sección 9 - Artículo   2.2.3.3.9.5. TRANSITORIO. Criterios de calidad para uso agrícola.

      .col-lg-10
        .tarjeta-Avatar-b.mb-4
            img.minWC(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.p-4
              .h5 Título 6 - Residuos peligrosos:
              p.mb-4 Sección 4.  De la gestión y manejo de los empaques, envases, embalajes y residuos de productos o sustancias químicas con propiedad o característica peligrosa.

              p Sección 6. Del registro de generadores de residuos o desechos peligrosos.

      .col-lg-10
        .tarjeta-Avatar-b.mb-5
            img.minWC(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.p-4
              .h5 Título 7 - Prevención y control contaminación ambiental por el manejo de plaguicidas:
              p.mb-4 Capítulo 3. Del manejo integral de plaguicidas - Artículo   2.2.7.3.1.2. Consumo de plaguicidas.

              p Artículo   2.2.7.3.1.3. Almacenamiento de plaguicidas.
    
    .row.mb-5.justify-content-center
      .col-10.col-md-6
        a.anexo.mb-4.mb-lg-0(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              strong Para el conocimiento de los ítem que se deben analizar en diagnóstico es necesario consultar: 
              | Decreto 1076 de 2015 Sector Ambiente y Desarrollo Sostenible
    
    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/info.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0.text-dark Infografía - Normatividad general
            .col-sm-auto
              a.boton.boton--a(:href="obtenerLink('/downloads/Aplicabilidad-en-la-empresa.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    #t_2_3.titulo-segundo.pt-4
      .h4 2.3 Aplicabilidad en la empresa
    
    p.mb-4 La gestión ambiental es de suma importancia por los beneficios que brinda al medio ambiente y los sistemas productivos de las organizaciones, sus empleados y a las comunidades vecinas, ya que cubre varios aspectos de importancia que son imprescindibles para la sustentabilidad de la actividad en el corto, mediano y largo plazo en cuanto a la utilización de los recursos naturales.

    p.mb-4 Con la gestión ambiental en el sector agrícola se busca:

    .row.mb-5.justify-content-end
      .col-7
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            |	Facilitar y agilizar la gestión de las autoridades ambientales y los agricultores.
          li 
            i.fas.fa-angle-right
            |	Unificar criterios para la gestión ambiental del subsector.
          li 
            i.fas.fa-angle-right
            |	Presentar en forma concisa y clara una descripción de los procesos involucrados en la actividad agrícola.
          li 
            i.fas.fa-angle-right
            |	Presentar los aspectos relevantes de la planificación ambiental agrícola.
          li 
            i.fas.fa-angle-right
            |	Presentar medidas típicas para manejar, prevenir, mitigar y corregir los impactos ambientales generados por la actividad.
          li 
            i.fas.fa-angle-right
            |	Difundir y propiciar entre los productores el cumplimiento de la legislación ambiental.
          li 
            i.fas.fa-angle-right
            |	Proponer al agricultor opciones tecnológicas de producción más “limpia” y uso racional del agua en el proceso del beneficio.
      .col-4
        ul.lista-ul
          li
            figure
              img(src='@/assets/curso/tema2/img05.svg', alt='Sistemas de gestión de la seguridad y salud en el trabajo')

    #t_2_4.titulo-segundo
      .h4 2.4 Estándares mínimos ambientales según el tipo de empresa
    
    p.mb-4 Para evitar el deterioro del medio ambiente causado por los diferentes impactos ambientales es necesario que la finca o unidad productiva formule un plan de gestión y conservación del medio ambiente, en el que se especifique el cuidado del componente hídrico, suelo y manejo adecuado de residuos y aguas residuales, complementario a este los generados en las diferentes actividades del proceso, a saber:
    
    .cajon--rojo.p-4.mb-4.colorBlue
      .h6.text-center a. Recurso hídrico:   
      .row
        .col-8          
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              |	Identifique las fuentes de agua. 
            li 
              i.fas.fa-angle-right
              |	Aísle y proteja las fuentes de agua con cercas vivas (cultivos de especies adecuadas a la zona) a una distancia considerable, buscando impedir el acceso de personas y animales, así como la contaminación por aplicación de fertilizantes y plaguicidas.
            li 
              i.fas.fa-angle-right
              |	Realice un análisis de riesgos en el que identifique los posibles contaminantes microbiológicos, químicos y físicos del agua, para esto se recomienda realizar un monitoreo del agua para consumo y demás actividades por lo menos una vez al año, mediante un análisis en un laboratorio acreditado, con el fin de controlar o minimizar los diferentes riesgos asociados al uso del agua. 
            li 
              i.fas.fa-angle-right
              |	El resultado de los análisis debe quedar documentado y archivado para realizar acciones correctivas en caso de ser necesario. 
            li 
              i.fas.fa-angle-right
              |	Identifique el tipo de calidad de agua que requiere para cada actividad dentro de la unidad productiva.
            li 
              i.fas.fa-angle-right
              |	Para el uso, consumo humano y los procesos de postcosecha la finca o unidad productiva debe contar con agua potable. 
            li 
              i.fas.fa-angle-right
              |	Si cuenta con tanques para el almacenamiento de agua recuerde que deben ser aseados con frecuencia, deben permanecer cerrados y su capacidad debe ser suficiente para garantizar el abastecimiento permanente de todo el sistema productivo. 
            li 
              i.fas.fa-angle-right
              |	Debe calcular las necesidades del agua para el cultivo.
            li 
              i.fas.fa-angle-right
              |	Registre cada vez que se realice el riego: consumo de agua, lote que se riega, fecha y el tiempo de riego.
        .col-4
          figure
            img(src='@/assets/curso/tema2/img06.svg', alt='Recurso hídrico')
    
    .cajon--rojo.p-4
      .h6.text-center b. Residuos sólidos:
          
      p.mb-4 Identifique los tipos de residuos que se generan en la finca o unidad productiva y registre en un documento; tenga en cuenta la siguiente clasificación:

      .row
        .col-10    
          ul.lista-ul 
            li 
              i.fas.fa-angle-right
              p
                strong Residuos agrícolas orgánicos: 
                | son todos los residuos que se generan de las actividades agrícolas en la finca, tales como empaques de productos (costales, bolsas y envases plásticos), fibras de tutorado o amarres de plantas.  
            li 
              i.fas.fa-angle-right
              p
                strong Residuos orgánicos: 
                | son todos los residuos que se descomponen con facilidad en el medio ambiente (residuos de cocina, estiércol, etc.).  
            li 
              i.fas.fa-angle-right
              p
                strong Residuos forestales: 
                | son los residuos como ramas, corteza de árboles, hojas y residuos de podas.
            li 
              i.fas.fa-angle-right
              p
                strong Residuos peligrosos - químicos: 
                | son los restos de sustancias de productos químicos fitosanitarios o agroquímicos utilizados en las labores agrícolas.
            li 
              ul
                li
                  i.fas.fa-check
                  |	Identifique la cantidad y el tipo de residuo, tipo de disposición final que se debe dar según normativa y manejo que se da en la finca, y no olvide realizar la documentación de este mediante el registro de la caracterización de los residuos sólidos en formatos de seguimiento. 
                li 
                  i.fas.fa-check
                  |	Establezca un sistema para la clasificación de residuos de acuerdo a su tipo (contenedores- puntos ecológicos entre otros en lugares visibles y de fácil acceso, los contenedores deben estar debidamente rotulados).
                li 
                  i.fas.fa-check
                  |	Determine el uso de los residuos orgánicos, en caso de ser convertidos en abono orgánico, determinar el proceso y los controles para evitar el riesgo de propagación de enfermedades y documentar dicho proceso mediante la formulación de un procedimiento. 
                li 
                  i.fas.fa-check
                  |	Defina las acciones de reciclaje de los residuos producidos. 
                li 
                  i.fas.fa-check
                  |	Determine las áreas designadas para el almacenamiento de los residuos.
        .col-2
          figure
            img.w-75.mx-auto(src='@/assets/curso/tema2/img07.svg', alt='Residuos sólidos')                

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
