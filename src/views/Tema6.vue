<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Herramientas CASE
    
    .row.mb-4
      .col-lg-7
        p.mb-4(data-aos="fade-up") Según Pressman, en el pasado, la ingeniería de #[em software] era principalmente una actividad manual, donde las herramientas se utilizaban solo en las etapas finales del proceso. Sin embargo, los ingenieros de #[em software] contemporáneos destacan la necesidad de herramientas más sofisticadas que las manuales para satisfacer las demandas de los sistemas informáticos actuales (Pressman, 1998).
        .fondo-color-sistema-i.px-4.py-3.mb-4(data-aos="fade-right")
          p.mb-0 Las herramientas CASE son un complemento en la caja de herramientas de un ingeniero de #[em software] proporcionando la capacidad de automatizar tareas que tradicionalmente se ejecutaban de forma manual. Esto ayuda a garantizar que la calidad se integre desde la fase de diseño, mucho antes de proceder a la construcción del producto.
        .fondo-color-sistema-j.p-4(data-aos="fade-down")
          .row.align-items-center
            .col-lg-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/156.png",style="max-width: 73px;")
            .col 
              p.mb-0 CASE es un acrónimo de #[em "Computer Aided Software Engineering"], que traducido al español significa "Ingeniería de #[em Software] Asistida por Computadora".
      .col-lg-5.order-first.order-lg-last(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/157.png",style="max-width: 502px;")
    
    p.mb-4(data-aos="flip-up") La tecnología CASE se refiere a la ingeniería de #[em software] apoyada por herramientas computacionales. Consiste en un conjunto de herramientas que automatizan las tareas de desarrollo de #[em software], con la finalidad de ofrecer un sistema integrado que conecte y automatice las fases del ciclo de vida del desarrollo (Cuevas, 1991).

    p.mb-5(data-aos="zoom-in-out") De acuerdo con Pressman (1998), los objetivos de las herramientas CASE son:

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 16.] Objetivos de la herramienta CASE
    .fondo-personalizado-burbuja.bg-white.overflow-hidden.borde-lg-28
      .burbuja(style="top: 40px;left: -89px;")
      .burbuja(style="top: -89px;right: -89px;")
      .burbuja(style="bottom: -89px;left: 18%;")
      .fondo-personalizado-burbuja__contenido.p-3.py-lg-5
        figure.d-none.d-lg-block(data-aos="zoom-in-out")
          img.mx-auto(src="@/assets/curso/temas/158.svg",style="max-width: 702px;",alt="La figura presenta los objetivos de las herramienta CASE; así: Fortalecer el rendimiento en el desarrollo, automatizar la generación de la documentación, hacer el software portable, mayor eficiencia en los productos desarrollados, automatizar tareas de desarrollo, administrar el proyecto, disminuir el valor del software, automatizar los chequeos de errores y reingeniería.")
        .fondo-color-sistema-v.borde-21.d-lg-none.p-3
          figure
            img.mx-auto(src="@/assets/curso/temas/159.png",style="max-width: 440px;",alt="La figura presenta los objetivos de las herramienta CASE; así: Fortalecer el rendimiento en el desarrollo, automatizar la generación de la documentación, hacer el software portable, mayor eficiencia en los productos desarrollados, automatizar tareas de desarrollo, administrar el proyecto, disminuir el valor del software, automatizar los chequeos de errores y reingeniería.")
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Clasificación de las Herramientas CASE
    
    p.mb-5(data-aos="fade") Las herramientas CASE en función de las fases del ciclo de vida que abarcan, se pueden agrupar de la siguiente forma:

    .row.mb-5(data-aos="flip-up")
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/160.png",style="max-width: 295px;")
      .col-lg-9
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="Herramientas integradas, I-CASE (<em>Integrated CASE</em>, CASE integrado)")
            p.ps-md-2.mb-5 Abordan todos los aspectos del ciclo de vida del desarrollo de sistemas. Son llamadas también CASE de trabajo en equipo.
          div.ms-md-5(titulo="Herramientas de alto nivel, U-CASE (<em>Upper CASE</em> - CASE superior) o <em>front-end</em>")
            p.ps-md-2.mb-5 Se utilizan para la automatización y soporte de las actividades de las etapas tempranas del desarrollo: análisis y diseño.
          div.ms-md-5(titulo="Herramientas de bajo nivel, L-CASE (<em>Lower CASE</em> - CASE inferior) o <em>back-end</em>")
            p.ps-md-2.mb-5 Ayudan a las etapas finales en el ciclo de vida del desarrollo: construcción e implementación.
          div.ms-md-5(titulo="Juegos de herramientas o <em>Tools-Case</em>")
            p.ps-md-2.mb-5 Son el tipo más simple de herramientas CASE. Automatizan una tarea o actividad del ciclo de vida del desarrollo de sistemas que se convierte en herramienta o herramientas independientes, constituyendo un caso de multi-herramienta.
    
    p.mb-5(data-aos="fade") A continuación, se presentan ejemplos de las herramientas CASE por ámbitos:

    .row.justify-content-center.mb-4
        .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
          .tarjeta-personalizada-1.tarjeta-personalizada-1--color-1.h-100
            .figura-flecha.mb-4.me-4
              h4.figura-flecha__titulo.mb-0 Análisis y diseño
              figure.figura-flecha__fig
                img.mx-auto(src="@/assets/curso/temas/164.png",style="max-width: 228px;")
            p.px-3.mb-0 Workbench
            p.px-3.mb-0 GUI Design Studio
            p.px-3.mb-0 DIA
            p.px-3.mb-0.pb-4 StarUML


        .col-lg-4.col-md-6.mb-4(data-aos="fade-down")
          .tarjeta-personalizada-1.tarjeta-personalizada-1--color-2.h-100
            .figura-flecha.mb-4.me-4.ps-2
              h4.figura-flecha__titulo.mb-0.px-4 Diseño de archivos y base de datos
              figure.figura-flecha__fig
                img.mx-auto(src="@/assets/curso/temas/165.png",style="max-width: 228px;")
            p.px-3.mb-0 Power Designer
            p.px-3.mb-0 Oracle Designer
            p.px-3.mb-0.pb-4 EasyCase

        .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
          .tarjeta-personalizada-1.tarjeta-personalizada-1--color-1.h-100
            .figura-flecha.mb-4.me-4
              h4.figura-flecha__titulo.mb-0 Programación
              figure.figura-flecha__fig
                img.mx-auto(src="@/assets/curso/temas/164.png",style="max-width: 228px;")
            p.px-3.mb-0 NetBeans
            p.px-3.mb-0.pb-4 Eclipse/Omondo 
    
    p.mb-0(data-aos="fade-left") Los diagramas de clase se diagraman con las herramientas que hacen parte del grupo de Herramientas de alto nivel, U-CASE, entre las que encontramos StartUML, Lucichart, ArgoUML, MagicDraw.



</template>

<script>
export default {
  name: 'Tema3',
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
