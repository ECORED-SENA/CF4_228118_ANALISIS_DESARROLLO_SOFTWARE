<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Características del Lenguaje Unificado de Modelado UML

    .row.justify-content-center.mb-5(data-aos="zoom-in-out")
      .col-lg-10
        .fondo-color-sistema-j.p-3.borde-13
          .row.align-items-center
            .col-lg-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/4.svg",style="max-width: 71px;")
            .col 
              p.mb-0 Con el nacimiento de la Programación Orientada a Objetos (POO), se establecieron una variedad de lenguajes, métodos y simbologías utilizadas para detallar el desarrollo de diferentes sistemas. Indudablemente, esta situación generó desconcierto entre los programadores de #[em software]. Para solucionar este inconveniente, surgió el Lenguaje de Modelado Unificado (#[em Unified Modeling Language], UML).
    
    .fondo-personalizado-2.pos-1
      .fondo-personalizado-2__contenido
        .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.fondo-color-primario.p-4.mb-5
          figure.mb-4.mb-lg-0.position-relative.figura-deco-1(data-aos="fade-right")
            img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 284px;min-width: 284px;")
          .p-4.p-lg-5.cont_1_1(data-aos="fade-left")
            p.mb-4.fw-bold El lenguaje de Modelado Unificado UML
            p.mb-0 Proporciona un conjunto de herramientas que facilitan el modelado (análisis y diseño) de sistemas orientados a objetos. Establece una serie de normas técnicas que representan de manera gráfica el camino y la estructura de un sistema determinado para programadores, analistas, desarrolladores, diseñadores, etc.
        
        .row.pb-5
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4(data-aos="fade-up") El UML es una de las herramientas más emocionantes en el mundo actual del desarrollo de sistemas. Esto se debe a que permite a los creadores de sistemas generar diseños que capturen sus ideas de forma convencional y fácil de comprender, facilitando la comunicación de estas a otras personas. (Schmuller, 2000, p.24)
            
            .fondo-color-sistema-j.p-3.borde-13(data-aos="fade-down")
              .row.align-items-center
                .col-lg-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 73px;")
                .col 
                  p.mb-4.fw-bold Evolución del Lenguaje Unificado de Modelado UML
                  p.mb-0 El UML tuvo su origen a finales de los años 80, inicialmente basado en el método Booch, desarrollado por el diseñador de #[em software] Grady Booch. En 1994, el científico de la computación James Rumbaugh implementó el modelado de objetos en este método. En 1995, se añadieron a estas bases otros principios y metodologías, algunas de ellas introducidas por Ivar Jacobson. (Booch, 2006).
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 505px;")
    
    .cont-titulo-decorativo.p-2.mt-1.mb-4(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Versión oficial de UML
    
    p.mb-5(data-aos="fade") La primera versión oficial, UML 1.0, se lanzó en 1997 bajo el liderazgo de Booch, Rumbaugh y Jacobson. Esta versión ofrecía una metodología que incluía varios estándares con el principal objetivo de asegurar la coherencia entre todos los diagramas. En 2005, se anunció la versión UML 2.0, cuyo contenido estaba principalmente orientado hacia la visión de la Programación Orientada a Objetos. Desde entonces, se han realizado nuevas versiones basadas en UML 2.0.

    .row.justify-content-center.mb-1
      .col-lg-4.col-md-8.mb-4(data-aos="fade-right")
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
            p.mb-0.text-white.text-center.fw-bold Ivar Jacobson, UML 0.8 y 0.91 1996.
    
    .fondo-personalizado-2
      .fondo-personalizado-2__contenido.py-5
        .cont-titulo-decorativo.p-2.mt-2.mb-5(data-aos="fade")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Características generales del UML
        
        .row.mb-5
          .col-lg-8(data-aos="fade-right")
            p.mb-0 Como se mencionó anteriormente, el UML es un lenguaje que proporciona un conjunto de reglas que facilitan la comunicación de un sistema mediante representaciones gráficas, indicando cómo realizar la creación y lectura de los modelos. Aunque existen muchas características del UML, según Booch (2006), se pueden resumir en las siguientes, las cuales se detallan a continuación:
          .col-lg-4(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 400px;")
        
        .bg-white.overflow-hidden.pt-4.d-none.d-lg-block
          .fondo-personalizado-burbuja
            .fondo-personalizado-burbuja__contenido
              .burbuja.left(style="transform: translateX(calc(-89px));top: 50px;")
              .burbuja.right(style="transform: translateX(calc(89px));top: -89px;")
              ImagenInfografica.color-acento-botones.imagen-infografica-personalizada-1(data-aos="zoom-in-out")
                template(v-slot:imagen)
                  figure
                    img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 1026px;")

                .tarjeta.color-acento-botones.p-3.borde-9(x="23%" y="73%" numero="+")
                  .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Visualizar
                  p UML facilita la representación de un sistema de forma gráfica, con el fin de que se pueda entender fácilmente por otra persona.
                .tarjeta.color-acento-botones.p-3.borde-9(x="39%" y="25%" numero="+")
                  .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Especificar
                  p UML permite detallar cuáles son las necesidades de un sistema previo a su construcción.
                .tarjeta.color-acento-botones.p-3.borde-9(x="63%" y="25%" numero="+")
                  .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Construir
                  p La construcción del sistema diseñado se realiza tomando los modelos especificados en el lenguaje UML.
                .tarjeta.color-acento-botones.p-3.borde-9(x="77%" y="65%" numero="+")
                  .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Documentar
                  p Cuando se diseñan las notaciones gráficas del sistema desarrollado, estas se utilizan como documentación. Esto permite brindar soporte para nuevas revisiones o empalmes, facilitando que los nuevos desarrolladores comprendan el sistema.
        
        .d-lg-none.fondo-color-sistema-k.borde-10.p-4.overflow-hidden
          .fondo-personalizado-burbuja
            .fondo-personalizado-burbuja__contenido
              .burbuja.bottom(style="transform: translateY(calc(89px));background-color: #F2F6FF;left: 5%;")
              .burbuja.right(style="transform: translateX(calc(89px));top: 15%;background-color: #F2F6FF;")
              ImagenInfografica.color-acento-botones.imagen-infografica-personalizada-1
                template(v-slot:imagen)
                  figure
                    img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 1023px;")
                .tarjeta.color-acento-botones.p-3.borde-9(x="50%" y="35%" numero="+")
                  .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Visualizar
                  p UML facilita la representación de un sistema de forma gráfica, con el fin de que se pueda entender fácilmente por otra persona.
                .tarjeta.color-acento-botones.p-3.borde-9(x="50%" y="54%" numero="+")
                  .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Especificar
                  p UML permite detallar cuáles son las necesidades de un sistema previo a su construcción.
                .tarjeta.color-acento-botones.p-3.borde-9(x="50%" y="71%" numero="+")
                  .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Construir
                  p La construcción del sistema diseñado se realiza tomando los modelos especificados en el lenguaje UML.
                .tarjeta.color-acento-botones.p-3.borde-9(x="50%" y="88%" numero="+")
                  .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Documentar
                  p Cuando se diseñan las notaciones gráficas del sistema desarrollado, estas se utilizan como documentación. Esto permite brindar soporte para nuevas revisiones o empalmes, facilitando que los nuevos desarrolladores comprendan el sistema.

    .row.align-items-center 
      .col-lg-8
        p.mb-0(data-aos="fade-up") La versión 1.0 de UML fue lanzada en enero de 1997 y desde entonces ha sido utilizado con éxito en la construcción de sistemas para diversas industrias alrededor del mundo, incluyendo hospitales, bancos, comunicaciones, aeronáutica y finanzas, entre otras. UML es actualmente el lenguaje de modelado de sistemas de #[em software] más conocido y utilizado, permitiendo visualizar, especificar, construir y documentar sistemas con una perspectiva orientada a objetos (Rumbaugh et al., 2004).
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 400px;")

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Modelo para la construcción de software UML
    
    .fondo-personalizado-4.mb-5
      .fondo-personalizado-4__contenido
        .row.justify-content-center
          .col-lg-8.py-5
            figure.mb-4.mb-lg-0(data-aos="fade")
              img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 820px;",alt="El Modelo para la construcción de software UML se utiliza principalmente para: comunicar la estructura de un sistema complejo, especificar el comportamiento que se requiere en el sistema, comprender de una manera más clara lo que construye y especificar el comportamiento que se requiere en el sistema.")

    p.mb-0(data-aos="fade-left") UML está compuesto por diversos elementos gráficos que se combinan para #[b conformar diagramas]. Entre los tipos de diagramas que ofrece UML, se encuentra #[b el diagrama de clase], que es parte de los diagramas de estructura. Estos últimos enfatizan los elementos que deben existir en el sistema de modelado.
      
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
