<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Gestión documental

    p.mb-4 Los sistemas de gestión documental se están convirtiendo en un elemento clave para todo tipo de empresa, ya que un sistema de gestión documental asegura una información organizada y eficiente.

    .row.mb-4
      .col-4.d-flex
        .tarjeta-Avatar
          img.minWC(src='@/assets/curso/tema4/img01.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4.bgOtro
            p
              strong a. 
              | Un sistema de gestión documental o document management system (DMS), por sus siglas en inglés, está diseñado para almacenar, administrar y controlar el flujo de documentos dentro de una organización. Se trata de una forma de organizar los documentos e imágenes digitales en una localización centralizada a la que los empleados puedan acceder de forma fácil y sencilla.
      
      .col-4.d-flex
        .tarjeta-Avatar
          img.minWC(src='@/assets/curso/tema4/img02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4.bgOtro
            p
              strong b. 
              | Conjunto de procesos a realizar para administrar documentos y archivos dentro de una organización apoyados en un conjunto de normas técnicas y prácticas, lo que facilita manejar, almacenar, modificar, recuperar y archivar el tiempo que sea necesario la información contenida en los diferentes documentos creados para la implementación y desarrollo de un proceso.

      .col-4.d-flex
        .tarjeta-Avatar
          img.minWC(src='@/assets/curso/tema4/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4.bgOtro
            p
              strong c. 
              | Gestión documental. Conjunto de actividades administrativas y técnicas tendientes a la planificación, manejo y organización de la documentación producida y recibida por las entidades, desde su origen hasta su destino final, con el objeto de facilitar su utilización y conservación.

    p.mb-4 Según el Archivo General de la Nación los procesos de gestión documental son:

    TabsB.mb-2
      .py-4.py-md-5(titulo="Planeación" :icono="require('@/assets/curso/tema4/icon01.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 A.	PLANEACIÓN
                p Conjunto de actividades encaminadas a la planeación, generación y valoración de los documentos de la entidad, en cumplimiento con el contexto administrativo, legal, funcional y técnico. Comprende la creación y diseño de formas, formularios y documentos, análisis de procesos y su registro en el sistema de gestión documental.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img04.svg', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Producción" :icono="require('@/assets/curso/tema4/icon02.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 B.	PRODUCCIÓN
                p Actividades destinadas al estudio de los documentos en la forma de producción o ingreso, formato y estructura, finalidad, área competente para el trámite, proceso en que actúa y los resultados esperados.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img04.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Gestión y trámite" :icono="require('@/assets/curso/tema4/icon03.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 C. GESTIÓN Y TRÁMITE
                p Conjunto de actuaciones necesarias para el registro, la vinculación a un trámite y la distribución, incluidas las actuaciones o delegaciones, la descripción (metadatos), la disponibilidad, recuperación y acceso para la consulta de los documentos, el control y seguimiento a los trámites que surte el documento hasta la resolución de los asuntos.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img04.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Organización" :icono="require('@/assets/curso/tema4/icon04.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 D. ORGANIZACIÓN
                p Conjunto de operaciones técnicas para declarar el documento en el sistema de gestión documental, clasificarlo, ubicarlo en el nivel adecuado, ordenarlo y describirlo adecuadamente.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img04.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Disposición de documentos" :icono="require('@/assets/curso/tema4/icon05.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 E. DISPOSICIÓN DE DOCUMENTOS
                p Selección de los documentos en cualquier etapa del archivo, con miras a su conservación temporal, permanente o a su eliminación, de acuerdo con lo establecido en las tablas de retención documental o en las tablas de valoración documental.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img04.svg', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Preservación a largo plazo" :icono="require('@/assets/curso/tema4/icon06.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 F. PRESERVACIÓN A LARGO PLAZO
                p Conjunto de acciones y estándares aplicados a los documentos durante su gestión para garantizar su preservación en el tiempo, independientemente de su medio y forma de registro o almacenamiento.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img04.svg', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Valoración" :icono="require('@/assets/curso/tema4/icon07.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 G. VALORACIÓN
                p Proceso permanente y continuo, que inicia la permanencia de un documento en las diferentes fases del archivo y determina su destino final (eliminación o conservación temporal o definitiva).
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img04.svg', alt='Texto que describa la imagen')

    p.mb-5 
      strong Fuente: 
      | República de Colombia. Decreto 2609 del 14 de diciembre de 2012 (Reglamenta el Título V de la Ley 594 de 2000), Artículo 9°.
    
    #t_4_1.titulo-segundo
      .h4 4.1 Normatividad
    
    p.mb-4
      | La Norma 
      strong ISO 9001:2015 
      | establece los requisitos mínimos para lograr implementar un sistema de gestión de la calidad y así de esta forma buscar la mejora continua en la empresa.
    
    p.mb-5 Ley 594 de 2000 (Julio 14). Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.

    #t_4_2.titulo-segundo
      .h4 4.2 Aplicabilidad en la empresa
    
    .row.mb-4
      .col-12.col-md-7
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | La aplicación de sistemas de gestión documental facilita el almacenamiento y organización de toda la información proveniente del trabajo diario que se realiza en la finca o unidad productiva en una ubicación central.
          li
            i.fas.fa-angle-right
            | Facilita la búsqueda de documentos en el momento que sea requerida, agilizando de esta forma, el ritmo de trabajo.
          li
            i.fas.fa-angle-right
            | Con una gestión documental adecuada el líder de la finca o unidad productiva puede contar con una imagen global de los procesos de trabajo dentro de la finca, permitiendo seguir las tareas incompletas y conociendo aquellas que ya han finalizado.
          li
            i.fas.fa-angle-right
            | Seguridad de la información permitirá trabajar con la certeza de que toda su información está segura ubicada en un mismo sistema, sistema que puede incluir entre otras características la recuperación de datos en caso de desastre.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.tarjeta--verde.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img05.svg', alt='Texto que describa la imagen')
          
        .h4.text-left Tipos de planes y procedimientos requeridos para BPA
        p.mb-4 En el cumplimiento de los requisitos para los productos agrícolas y las producciones agrícolas al momento de la implementación de BPA se debe contar con planes y procedimientos que permitan estandarizar los procesos, para así asegurar un control práctico y eficiente, garantizando el avance a través de la mejora continua. A continuación, se relacionan los planes y procedimientos tenidos en cuenta para la implementación de BPA:
        ul.lista-ul
          li
            i.fas.fa-angle-right
            |	Plan de uso racional de agua.
          li
            i.fas.fa-angle-right
            |	Plan para evitar erosión del suelo.
          li
            i.fas.fa-angle-right
            |	Plan de mantenimiento, desinfección y calibración de equipos.
          li
            i.fas.fa-angle-right
            |	Plan de fertilización y uso de plaguicidas.
          li
            i.fas.fa-angle-right
            |	Plan de manejo integrado de plagas (MIP).
          li
            i.fas.fa-angle-right
            |	Plan de manejo de residuos líquidos y sólidos.
          li
            i.fas.fa-angle-right
            |	Plan de manejo de contingencia o emergencias.
          li
            i.fas.fa-angle-right
            |	Procedimiento para la obtención de material de propagación.
          li
            i.fas.fa-angle-right
            |	Procedimiento para la elaboración de abonos orgánicos, llevar registros documentales que incluyan información sobre el origen del material, los procedimientos de transformación y los controles realizados.
          li
            i.fas.fa-angle-right
            |	Procedimientos e instructivos para el manejo de equipos, utensilios y herramientas.

      
      .col-md.tarjeta.tarjeta--naranja.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img06.svg', alt='Texto que describa la imagen')
          
        .h4.text-left Tipos de registros para BPA 
        p.mb-4 Dentro de los Sistemas de Gestión de Calidad las BPA buscan el orden de la información sobre el manejo de la unidad productiva y, tener disponibles los soportes documentales para su proceso de implementación. A continuación, se mencionan algunos de los registros al momento de realizar este proceso:
        ul.lista-ul
          li
            i.fas.fa-angle-right
            |	Registros de actividades de mantenimiento, limpieza y calibración de equipos y herramientas.
          li
            i.fas.fa-angle-right
            |	Registro de aplicación e inventario de fertilizantes y plaguicidas.
          li
            i.fas.fa-angle-right
            |	Registro de capacitaciones al personal.
          li
            i.fas.fa-angle-right
            |	Registro de actividades desarrolladas para la obtención de material vegetal en el predio.
          li
            i.fas.fa-angle-right
            |	Registro de usos de material de propagación genéticamente modificado.
          li
            i.fas.fa-angle-right
            |	Registro de trazabilidad del producto.
          li
            i.fas.fa-angle-right
            |	Registros de preparación de abono orgánico.
          li
            i.fas.fa-angle-right
            |	Registros documentales del consumo de agua en el proceso productivo.
          li
            i.fas.fa-angle-right
            |	Registro documental de actividades desarrolladas para propagación de material vegetal.
          li
            i.fas.fa-angle-right
            |	Contar con el soporte documental cuando aplique, con el listado sobre L.M.R. permitidos en el cultivo por la legislación vigente.
          li
            i.fas.fa-angle-right
            |	Solicitud de auditoría en buenas prácticas agrícolas.
    
    hr.mb-5
    
    #t_4_3.titulo-segundo
      .h4 4.3 Técnicas de diligenciamiento
    
    .row.justify-content-center.mb-4
      .col-5
        ul.lista-ul
          li
            i.fas.fa-angle-right
            |	Todos los documentos deben estar debidamente diligenciados.
          li
            i.fas.fa-angle-right
            |	Diseño de página: tamaño carta, orientación vertical, fuente letra arial, tamaño 10.
          li
            i.fas.fa-angle-right
            |	La redacción de los párrafos debe ser clara.
          li
            i.fas.fa-angle-right
            |	¡No deje espacios en blanco en los documentos!
  
      .col-3
        figure
          img(src='@/assets/curso/tema4/img07.svg', alt='Técnicas de diligenciamiento')
    
    .row.justify-content-center.mb-4
      .col-8
        p.mb-4 Para poder identificar los documentos tenga en cuenta la estructura general de un documento; la cual se explica a continuación:
    
    h4.text-center Estructura general del documento administrativo

    p.mb-4 Lo esencial de cualquier documento es su contenido y la claridad con que se expone, pero la manera de presentarlo también influirá en la facilidad con que se pueda leer. Una adecuada disposición gráfica del documento ayudará a que el lector capte a primera vista la información importante, la organización interna, sus diferentes divisiones antropomórficas: encabezamiento, cuerpo y pie. Examine los criterios generales que debe aplicar en cada una de ellas.

    TabsB.mb-5
      .py-4.py-md-5(titulo="Encabezado" :icono="require('@/assets/curso/tema4/icon08.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 Encabezado
                p.mb-4 En la parte superior del documento se debe reservar este espacio para la información inmediata, básica y sintética de los elementos fundamentales del documento como la identificación corporativa del emisor, la información sintética del documento y la identificación del destinatario.
                p.mb-4 Las partes en que se divide el encabezado son:
                p.mb-4
                  strong 1. Cabecera: 
                  | La franja superior del documento es el lugar donde aparecen impresos el logotipo que identifica corporativamente al emisor, según las normas de imagen institucional de cada administración.
                p.mb-4
                  strong 2. Título: 
                  | El título expresa con claridad y precisión el tipo de documento, su contenido esencial y en su caso, el procedimiento en que se inserta. Se situará en un sitio visible y fácilmente identificable.
                p.mb-4
                  strong 3. Datos generales del documento: 
                  | generales del documento. Este apartado contendrá la información más significativa para la identificación inmediata del documento y para la gestión administrativa.
                ul.lista-ul.mb-3
                  li 
                    i.lista-ul__vineta.CBlack
                    | Número o clave asignado en cada dependencia para la identificación del documento.
                  li 
                    i.lista-ul__vineta.CBlack
                    | Fecha de inicio del procedimiento.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img08.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Cuerpo" :icono="require('@/assets/curso/tema4/icon08.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 Cuerpo
                p Es la parte reservada al contenido específico de cada documento. Como su extensión varía según la mayor o menor complejidad del mensaje que se transmite o del tipo de texto, el contenido se redactará con claridad, sencillez y precisión.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img11.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Pie" :icono="require('@/assets/curso/tema4/icon08.svg')")
        .row.mb-10.justify-content-center
          .col-10
            .row
              .col-md-8.mb-4.mb-md-0
                .h4 Pie
                p El final del documento es el espacio reservado a la identificación oficial y personal del emisor (firma) y a las circunstancias de tiempo y lugar, si no se han expresado en el encabezado (data).
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img12.svg', alt='Texto que describa la imagen')

    #t_4_4.titulo-segundo
      .h4 4.4 Archivo      

    p.mb-4 A continuación, se destacan algunos conceptos referidos al archivo: 
    
    p.mb-4 
      strong Archivo: 
      | conjunto de documentos, sea cual fuere su fecha, forma y soporte material, acumulados en un proceso natural por una persona o entidad pública o privada en el transcurso de su gestión, conservados respetando aquel orden para servir como testimonio e información a la persona o institución que los produce y a los ciudadanos, o como fuentes de la historia. También se puede entender como la institución que está al servicio de la gestión administrativa, la información, la investigación y la cultura. 
      a.fw-bold(href='https://www.mintic.gov.co/portal/604/articles-15049_documento.pdf' target="_blank") https://www.mintic.gov.co/portal/604/articles-15049_documento.pdf.
      
      p.mb-4 
        strong Archivar: 
        | es el arte de conservar en orden debidamente agrupado y protegido los documentos pertenecientes a un individuo, firma, asunto o zona geográfica.


    .row.mb-5.justify-content-center
      .col-12.col-md-8.mb-4.mb-md-0
        .bloque-texto-a.p-md-5.tarjeta.tarjeta--naranja.colorS.p-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .h5.mb-0 Según el Reglamento General de Archivos establecido por el Archivo General de la Nación:
            .col-lg-8.tarjeta
              .bloque-texto-a__texto.p-4
                p “Archivo es uno o más conjuntos de documentos, sea cual sea su fecha, su forma y soporte material, acumulados en un proceso natural por una persona o institución pública o privada en el transcurso de su gestión, conservados respetando aquel orden para servir como testimonio o información para la persona o institución que los produce, para los ciudadanos o para servir de fuente de historia”.
      .col-8.col-md-4
        figure
          img(src='@/assets/curso/tema4/img09.svg', alt='Texto que describa la imagen')

    p.mb-4 La anterior definición destaca que el archivo no es simplemente un montón de papeles acumulados, la finalidad de los archivos es controlar la documentación y dar la información a los usuarios en forma adecuada y oportuna, para esto se hace necesario organizar los documentos   respecto al origen y al orden natural de los documentos, los cuales están dados por una relación causa-efecto.

    p.mb-4 Verificar la documentación implica identificar la procedencia de los documentos, teniendo en cuenta la estructura orgánica y las funciones desarrolladas por una institución, empresa, proceso a lo largo de su gestión.

    figure
      img(src='@/assets/curso/tema4/img10.svg', alt='Texto que describa la imagen')

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
