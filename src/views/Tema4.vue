<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Diagrama de actividades
    
    .row.mb-5 
      .col-lg-7
        p.mb-4(data-aos="fade-up") Estos son diagramas de comportamiento que se utilizan para representar una sucesión de actividades. Explican el flujo de operaciones desde el punto de inicio hasta el final, definiendo una variedad de caminos de decisiones en el desarrollo de eventos que abarca una actividad. Según Booch, G. (1994), estos diagramas permiten visualizar un caso de uso específico a un nivel más preciso, ilustrando el flujo de actividades definidas en un sistema.
        p.mb-4(data-aos="fade-down") A continuación, se describen los beneficios del diagrama de actividades:
        p.mb-0.color-sistema-n Beneficios:
      .col-lg-5.order-first.order-lg-last(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/97.png",style="max-width: 502px;")

    .fondo-personalizado-9.pos-2.mb-5
      .fondo-personalizado-9__contenido
        .row(data-aos="flip-up")
          .col-lg-3.col-md-6.mb-4
            .fondo-personalizado-15.pos-1.px-4.pb-5.h-100
              .d-flex
                .fondo-color-sistema-u.p-4.borde-23.mb-5.mx-auto.d-inline-block
                  figure
                    img.mx-auto(src="@/assets/curso/temas/98.svg",style="max-width: 89px;")
              h4.mb-0.text-center Explica la lógica de un algoritmo.
          .col-lg-3.col-md-6.mb-4
            .fondo-personalizado-15.pos-1.px-4.pb-5.h-100
              .d-flex
                .fondo-color-sistema-u.p-4.borde-23.mb-5.mx-auto.d-inline-block
                  figure
                    img.mx-auto(src="@/assets/curso/temas/99.svg",style="max-width: 89px;")
              h4.mb-0.text-center Representa cada uno de los procesos realizados en los diseños de casos de uso en UML.
          .col-lg-3.col-md-6.mb-4
            .fondo-personalizado-15.pos-1.px-4.pb-5.h-100
              .d-flex
                .fondo-color-sistema-u.p-4.borde-23.mb-5.mx-auto.d-inline-block
                  figure
                    img.mx-auto(src="@/assets/curso/temas/100.svg",style="max-width: 89px;")
              h4.mb-0.text-center Instruye procesos entre el sistema y los usuarios en un flujo de trabajo o negocios.
          .col-lg-3.col-md-6.mb-4
            .fondo-personalizado-15.pos-1.px-4.pb-5.h-100
              .d-flex
                .fondo-color-sistema-u.p-4.borde-23.mb-5.mx-auto.d-inline-block
                  figure
                    img.mx-auto(src="@/assets/curso/temas/101.svg",style="max-width: 89px;")
              h4.mb-0.text-center Aporta claridad, optimizando y facilitando los casos de uso complejos.

        .cont-titulo-decorativo.p-2.mt-4.mb-5(data-aos="fade-left")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Elementos de un diagrama de actividades

        p.mb-5(data-aos="fade-right") Un diagrama de actividades contiene fundamentalmente los siguientes elementos:

        .row.justify-content-center 
          .col-lg-10
            AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
              div.ms-md-5(titulo="Actividad")
                .row.align-items-center.mb-4
                  .col-lg-8
                    p.mb-4 Es la descripción o el detalle de una sucesión de conductas parametrizadas, simbolizada como un flujo de acciones ordenadas. El modelado de este flujo se realiza mediante nodos de actividad que se conectan a través de flujos de control. Las actividades pueden generar jerarquías de peticiones, ya sea llamando a diferentes actividades o, como último recurso, solventando operaciones propias. La representación gráfica de las actividades se realiza mediante un rectángulo con bordes redondeados, dentro del cual se especifica el nombre de la actividad.
                    p.mb-4 Para nombrar las actividades se usan verbos del modelo de negocio como, por ejemplo: 
                  .col-lg-4.order-first.order-lg-last
                    figure.mb-4.mb-lg-0
                      img.mx-auto(src="@/assets/curso/temas/102.png",style="max-width: 271px;",alt="La figura representa la grafica de una actividad, la cual debe estar enmarcada en un rectángulo con bordes redondeados y dentro del este el nombre de la actividad.")
                .row.justify-content-center
                  .col-lg-3.mb-4
                    .fondo-color-primario.p-4.borde-20.text-center
                      i.fas.fa-cube.mb-4.text-white.fs-1
                      h4.mb-0.text-white Buscar factura
                  .col-lg-3.mb-4
                    .fondo-color-primario.p-4.borde-20.text-center
                      i.fas.fa-cube.mb-4.text-white.fs-1
                      h4.mb-0.text-white Realizar pago
                  .col-lg-3.mb-4
                    .fondo-color-primario.p-4.borde-20.text-center
                      i.fas.fa-cube.mb-4.text-white.fs-1
                      h4.mb-0.text-white Renovar lista
              div.ms-md-5(titulo="Flujo entre actividades")
                .row
                  .col-lg-7.mb-4.mb-lg-0
                    p.mb-4 Este permite realizar los enlaces entre objetos y nodos dentro de una actividad, incorporando flujos de objetos y flujos de control. La representación gráfica de estos flujos se realiza mediante una flecha con punta abierta, que indica el orden en la ejecución de las actividades. Frecuentemente, se añade una descripción en la flecha para facilitar la comprensión.
                    .fondo-color-sistema-v.p-4.borde-15
                      .row 
                        .col-lg-auto 
                          figure.mb-4.mb-lg-0
                            img.mx-auto(src="@/assets/curso/temas/103.png",style="max-width: 98px;")
                        .col 
                          p.mb-0 Cuando los flujos de actividades incluyen condiciones para su ejecución, estos se representan mediante un rombo y se denominan nodos de decisión. 
                  .col-lg-5
                    .bg-white.sombra-1.p-3.borde-7.h-100.d-flex.align-items-center
                      figure
                        img.mx-auto(src="@/assets/curso/temas/104.png",style="max-width: 317px;",alt="La figura presenta la representación grafica de un flujo de actividades, incluyendo una condición que permite tomar uno o varios caminos.")
              div.ms-md-5(titulo="Nodo inicial")
                .row
                  .col-lg-7.mb-4.mb-lg-0
                    p.mb-4 Como su nombre lo indica, el nodo inicial se encarga de empezar un flujo cuando se llama a una actividad. En cada diagrama existe un solo nodo inicial, el cual se representa con un círculo pequeño.
                  .col-lg-5
                    .bg-white.sombra-1.p-4.borde-7.py-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/105.png",style="max-width: 263px;",alt="La figura representa la grafica de un nodo inicial.")
              div.ms-md-5(titulo="Nodo final")
                .row
                  .col-lg-7.mb-4.mb-lg-0
                    p.mb-4 También es un nodo de control final. Su función es detener todos los flujos de una actividad. En una actividad pueden existir más de un nodo final. Este se representa con un rectángulo, como se presenta a continuación:
                  .col-lg-5
                    .bg-white.sombra-1.p-4.borde-7.py-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/105.png",style="max-width: 263px;",alt="La figura representa la grafica de un nodo final.")

    .row.mb-4(data-aos="zoom-in-out")
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0 Después de realizar la descripción de los elementos que componen un diagrama de actividades, se presenta el siguiente ejemplo de un diagrama de clase sobre un proceso de registro e inicio de sesión.

    .cont-titulo-decorativo.p-2.mt-1.mb-5(data-aos="fade-down")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Ejemplo de diagrama de actividades

    p.mb-5(data-aos="flip-up") A continuación, se presenta un ejemplo de un diagrama de actividades que incluye las funcionalidades de iniciar sesión y registrar en un sistema.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 8.] Ejemplo de diagramas de actividades.
        
        .fondo-personalizado-burbuja.overflow-hidden.fondo-color-sistema-k
          .burbuja.left(style="bottom: 15%;background-color: #F2F6FF;transform: translateX(calc(-89px))")
          .burbuja(style="top: -89px;right: 8%;background-color: #F2F6FF;")
          .burbuja(style="bottom: -89px;right: 8%;background-color: #F2F6FF;")
          .fondo-personalizado-burbuja__contenido.py-5.px-4(data-aos="fade")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/106.png",style="max-width: 718px;",alt="La figura presenta un ejemplo de como se debe construir un diagrama de actividades y sus componentes.")

    .fondo-personalizado-2
      .fondo-personalizado-2__contenido.py-5
        .row.align-items-center 
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
            .fondo-color-sistema-j.px-4.borde-20.py-5
              p.mb-0 Como se presenta en el ejemplo anterior, el flujo inicia con la actividad de autenticar usuario y pasa por un nodo de decisión que verifica si el usuario existe o no. Si el usuario existe, pasa a un nodo de decisión donde se valida el usuario; si no es correcto, muestra un mensaje de error; si es correcto, da acceso a la aplicación y muestra el menú de inicio. En caso de no existir el usuario, pasa a la actividad de registrar usuario y después ingresa datos. Luego sigue a un nuevo nodo de decisión, donde válida los datos y da acceso a la aplicación, continuando el flujo de actividad mostrando la interfaz del menú del sistema y finalmente termina la actividad con un nodo final.
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src="@/assets/curso/temas/107.png",style="max-width: 507px;")



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
