<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Características Lenguaje Unificado de Modelado UML

    .row.justify-content-center.mb-5
      .col-lg-10
        .fondo-color-sistema-j.p-3.borde-13
          .row.align-items-center
            .col-lg-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/4.svg",style="max-width: 71px;")
            .col 
              p.mb-0 Con el nacimiento de la Programación Orientada a Objetos (POO), se establecieron una variedad de lenguajes, métodos y simbologías utilizadas para detallar el desarrollo de diferentes sistemas. Indudablemente, esta situación generó desconcierto entre los programadores de software. Para solucionar este inconveniente, surgió el Lenguaje de Modelado Unificado (Unified Modeling Language, UML).
    
    .fondo-personalizado-2.pos-1
      .fondo-personalizado-2__contenido
        .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.fondo-color-primario.p-4.mb-5
          figure.mb-4.mb-lg-0.position-relative.figura-deco-1(data-aos="fade-right")
            img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 284px;min-width: 284px;")
          .p-4.p-lg-5.cont_1_1
            p.mb-4.fw-bold El lenguaje de Modelado Unificado UML
            p.mb-0 Proporciona un conjunto de herramientas que facilitan el modelado (análisis y diseño) de sistemas orientados a objetos. Establece una serie de normas técnicas que representan de manera gráfica el camino y la estructura de un sistema determinado para programadores, analistas, desarrolladores, diseñadores, etc.
        
        .row.pb-5
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 El UML es una de las herramientas más emocionantes en el mundo actual del desarrollo de sistemas. Esto se debe a que permite a los creadores de sistemas generar diseños que capturen sus ideas de forma convencional y fácil de comprender, facilitando la comunicación de estas a otras personas. (Schmuller, 2000, p.24)
            p.mb-4.fw-bold Evolución del Lenguaje Unificado de Modelado UML.
            .fondo-color-sistema-j.p-3.borde-13
              .row.align-items-center
                .col-lg-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 73px;")
                .col 
                  p.mb-0 El UML tuvo su origen a finales de los años 80, inicialmente basado en el método Booch, desarrollado por el diseñador de #[em software] Grady Booch. En 1994, el científico de la computación James Rumbaugh implementó el modelado de objetos en este método. En 1995, se añadieron a estas bases otros principios y metodologías, algunas de ellas introducidas por Ivar Jacobson. (Booch, 2006).
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 505px;")
    
    .cont-titulo-decorativo.p-2.mt-1.mb-4
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Versión oficial de UML
    
    p.mb-5 La primera versión oficial, UML 1.0, se lanzó en 1997 bajo el liderazgo de Booch, Rumbaugh y Jacobson. Esta versión ofrecía una metodología que incluía varios estándares con el principal objetivo de asegurar la coherencia entre todos los diagramas. En 2005, se anunció la versión UML 2.0, cuyo contenido estaba principalmente orientado hacia la visión de la Programación Orientada a Objetos. Desde entonces, se han realizado nuevas versiones basadas en UML 2.0.

    .row.justify-content-center.mb-1
      .col-lg-4.col-md-8.mb-4
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/9.png' alt="")
          .crd_hover_txt--body
            p.mb-0.text-white.text-center.fw-bold Grady Booch, ingeniero de sistema e investigador, antes del 95.
      .col-lg-4.col-md-8.mb-4(data-aos="flip-down")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/10.png' alt="")
          .crd_hover_txt--body
            p.mb-0.text-white.text-center.fw-bold Jim Rumbaugh (OMT), antes del 95.
      .col-lg-4.col-md-8.mb-4(data-aos="flip-up")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/11.png' alt="")
          .crd_hover_txt--body
            p.mb-0.text-white.text-center.fw-bold Ivar Jacobson, UML 0.8 y 0.91 1996

    .cont-titulo-decorativo.p-2.mt-5.mb-5
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Características generales del UML
    
    .row.mb-5
      .col-lg-8
        p.mb-0 Como se mencionó anteriormente, el UML es un lenguaje que proporciona un conjunto de reglas que facilitan la comunicación de un sistema mediante representaciones gráficas, indicando cómo realizar la creación y lectura de los modelos. Aunque existen muchas características del UML, según Booch (2006), se pueden resumir en las siguientes, las cuales se detallan a continuación:
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 400px;")

    ImagenInfografica.color-acento-botones.imagen-infografica-personalizada-1
      template(v-slot:imagen)
        figure
          img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 1023px;")

      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
        .h5.mb-2 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="A")
        .h5.mb-2 titulo
        p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="B")
        .h5.mb-2 titulo
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
