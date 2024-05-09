<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-md-0.pb-0
  
    .titulo-principal.color-acento-contenido.mb-2
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1
      .fondo-personalizado-1__contenido
        .row.align-items-center.mb-4.pt-4
          .col-lg-2
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 133px;")
          .col-lg-10
            p.mb-0 La especificación de requisitos es uno de los procesos más importantes en las fases de desarrollo de #[em software]. Constituye la fase inicial y es crucial para que el proyecto culmine exitosamente. Su objetivo principal es comprender qué esperan los usuarios y clientes del sistema, empleando un lenguaje natural para obtener una perspectiva clara y evitar errores costosos en las fases subsiguientes del desarrollo del producto.
        
        .row.align-items-center.mb-4
          .col-lg-8.mb-4.mb-lg-0
            .fondo-color-sistema-i.p-3.borde-10.mb-4
              p.mb-4 El análisis de requerimientos propone un conjunto de técnicas e instrucciones que facilitan una representación precisa y completa de las funcionalidades que debe ejecutar un sistema para satisfacer los requerimientos de clientes y usuarios. Actualmente, algunas de las técnicas más utilizadas incluyen #[b los diagramas de casos de uso, historias de usuario y diagramas de actividades.]
            .fondo-color-primario.p-3.borde-10
              p.mb-0.text-white Para la construcción de #[em software], es fundamental la utilización de modelos, ya que representan la dirección y aspecto de una necesidad específica. Esta "necesidad" puede estar ya existente, en desarrollo o en fase de planificación. Los diseñadores del modelo deben levantar los requerimientos del producto, que pueden abarcar áreas como funcionalidad, rendimiento y fiabilidad. El modelo se estructura en varias vistas, cada una describiendo un aspecto específico del producto o sistema en desarrollo. Un modelo permite documentar la estructura y comportamiento de un sistema antes de ser codificado.
          .col-lg-4
            figure
              img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 402px;")

        p.pb-5.mb-0 Este componente formativo presentará diversas técnicas y diagramas para el análisis y especificación de requisitos, con el fin de organizar adecuadamente los requerimientos. Esto permite una representación efectiva de cada una de las interacciones del usuario con el sistema, resultando en una especificación eficaz que reduce costos y riesgos en el desarrollo del #[em software], y contribuye a alcanzar un producto de calidad.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
