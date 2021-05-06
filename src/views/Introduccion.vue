<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción2
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 Los sistemas de gestión permiten el manejo de un lenguaje común entre los diferentes procesos que conforman la producción agrícola, pecuaria, industrial entre otras, facilitando la comunicación y satisfacción de necesidades entre los actores que intervienen en el proceso de producción como son empresarios, trabajadores, clientes y proveedores, favoreciendo las relaciones dentro y fuera de las organización y aumentando la posibilidad de hacer intercambios comerciales nacionales e internacionales.

    p Con la aplicación de sistemas de gestión las empresas pueden tener una herramienta que facilita las relaciones claras con el Estado y la sociedad, ayudando a cumplir con la normatividad aplicable mediante la organización de procesos, aplicación de metodologías y asignación de responsabilidades.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
