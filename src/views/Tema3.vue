<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Historias de usuario

    .row.mb-4
      .col-lg-7
        p.mb-4(data-aos="fade") Las historias de usuario son una forma sencilla de representar los requisitos de un sistema de información. Se crean en una o dos oraciones y se redactan en un lenguaje común y legible para el usuario. Estas historias, conocidas como #[em User Stories], se han convertido en un estándar ampliamente utilizado en la definición de requisitos. Surgieron en XP (1999) y fueron impulsadas de manera concluyente por Mike Cohn en su libro #[em "User Stories Applied: For Agile Software Development"] (2004), estableciendo el patrón para definirlas. La simplicidad es la razón principal de su popularidad. Las historias de usuario están compuestas por tres elementos:
        
        .row.justify-content-center(data-aos="flip-up")
          .col-md-6.col-lg-4.mb-4
            .fondo-color-primario.p-4.borde-20.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/166.svg",style="max-width: 37px;")
              h4.text-white.text-center Cómo [Rol del usuario]
          .col-md-6.col-lg-4.mb-4
            .fondo-color-sistema-n.p-4.borde-20.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/167.svg",style="max-width: 37px;")
              h4.text-white.text-center Quiero [Objetivo]

          .col-md-6.col-lg-4.mb-4
            .fondo-color-primario.p-4.borde-20.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/168.svg",style="max-width: 37px;")
              h4.text-white.text-center Para poder [Beneficio]

      .col-lg-5.order-first.order-lg-last(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/59.png",style="max-width: 502px;")

    .row.align-items-center.mb-2(data-aos="fade-left")
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0.position-relative A continuación, se hace la descripción de los elementos de una historia de usuario según Cohn, M. (2018):
    
    .fondo-personalizado-9
      .fondo-personalizado-9__contenido.pt-5
        TabsA.tab-a-personalizado-1.color-acento-botones.mb-5(data-aos="zoom-in-out")
          .borde-10.p-5.fondo-color-sistema-j(titulo="Tarjeta <em>(Card)</em>")
            h4.mb-5 Tarjeta #[em (Card)]
            p.mb-4 Es una frase que sintetiza una necesidad dada en una conversación entre el usuario y el dueño del producto. Escrita en una tarjeta, comúnmente sigue el formato rol-objetivo-beneficio. Su estructura es:
            ul.lista-ul.lista-personalizada-1.mb-0
              li.mb-1
                i.fas.fa-cube
                span Como [tipo de usuario] -> ¿quién?
              li.mb-1
                i.fas.fa-cube
                span Quiero [necesidad] -> ¿qué?
              li.mb-1
                i.fas.fa-cube
                span Para [beneficio esperado] -> ¿para qué? Con esta estructura simple de tres líneas se identifican: ¿Quién? (roles de valor), ¿Qué? (problema a resolver) y ¿Para qué? (objetivo a alcanzar). 
          .borde-10.p-5.fondo-color-sistema-j(titulo="Conversación")
            h4.mb-5 Conversación
            p.mb-0 Es el proceso de comunicación entre las personas que requieren las necesidades (dueño del producto) y las personas que saben cómo solucionarlas (desarrolladores). Se realiza mediante preguntas y utilizando recursos como gráficas y prototipos para clarificar el contenido de las historias de usuario.
          .borde-10.p-5.fondo-color-sistema-j(titulo="Confirmación")
            h4.mb-5 Confirmación
            p.mb-0 Es la verificación del acuerdo con relación a lo que se quiere construir. Permite validar si se terminó o no, o si se cumplió con lo esperado. Esta confirmación recibe el nombre de criterios de aceptación, los cuales ayudan a tener claro el contexto de la historia de usuario y a determinar fácilmente si está terminada o no.
        
        p.pb-5(data-aos="fade") A continuación se presenta un ejemplo, el usuario desea comprar una boleta para una película en el cine. los criterios de aceptación que se pueden establecer son:
    
    .cont-titulo-decorativo.p-2.mb-5(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Criterios de aceptación:

    .fondo-personalizado-8.mb-5
      .fondo-personalizado-8__contenido.pb-4
        .row.justify-content-center
          .col-lg-3.mb-4(data-aos="fade-up")
            .fondo-color-primario.position-relative.borde-20.p-4.pt-5.h-100
              span.num-tarjeta-1.pt-3.ps-3(style="color: white;") 1
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 87px;")
              p.mb-5.text-white.text-center Cuando se agoten las boletas, se debe mostrar un mensaje informando que no hay disponibilidad para la venta.
          .col-lg-3.mb-4(data-aos="fade-down")
            .fondo-color-sistema-p.position-relative.borde-20.p-4.pt-5.h-100
              span.num-tarjeta-1.pt-3.ps-3(style="color: #3A1D71;") 2
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 87px;")
              p.mb-5.text-center El sistema debe validar la edad del comprador para permitir la venta de boletas según la clasificación de la película.

          .col-lg-3.mb-4(data-aos="fade-up")
            .fondo-color-primario.position-relative.borde-20.p-4.pt-5.h-100
              span.num-tarjeta-1.pt-3.ps-3(style="color: white;") 3
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 87px;")
              p.mb-5.text-white.text-center Tras un pago en efectivo, el sistema debe mostrar el valor del cambio a devolver; si no hay cambio, deberá mostrar cero.

    p.mb-0(data-aos="fade-left") Cuando se realizan historias de usuario es muy importante cumplir con las siguientes reglas:

    .fondo-personalizado-9.mb-5
      .fondo-personalizado-9__contenido.py-5
        .py-5
          .row.justify-content-center(data-aos="fade")
            .col-lg-5
              .px-4.px-md-5.fondo-personalizado-10.pos-1.color-1.mb-4
                .row.align-items-center
                  .col-lg-auto 
                    figure.mb-4.mb-lg-0
                      img.mx-auto(src="@/assets/curso/temas/62.png",style="max-width: 75px;")
                  .col 
                    p.mb-0.text-white.pb-lg-1.pb-4.py-1.pt-2.fw-bold Ser concisa
          .row.justify-content-center(data-aos="fade-left")
            .col-lg-1
            .col-lg-5
              .px-4.px-md-5.fondo-personalizado-10.pos-1.color-2.mb-4
                .row.align-items-center
                  .col-lg-auto 
                    figure.mb-4.mb-lg-0
                      img.mx-auto(src="@/assets/curso/temas/63.png",style="max-width: 75px;")
                  .col 
                    p.mb-0.text-white.pb-lg-1.pb-4.py-1.pt-2.fw-bold Concreta
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-2
            .col-lg-5
              .px-4.px-md-5.fondo-personalizado-10.pos-1.color-3.mb-4
                .row.align-items-center
                  .col-lg-auto 
                    figure.mb-4.mb-lg-0
                      img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 75px;")
                  .col 
                    p.mb-0.text-white.pb-lg-1.pb-4.py-1.pt-2.fw-bold Realizar criterios de aceptación claros y específicos
    
    .fondo-personalizado-12.mb-5
      .fondo-personalizado-12__contenido.pb-5
        .row.mb-5.pb-5
          .col-lg-7(data-aos="fade-up")
            p.mb-4 Así como estas reglas son necesarias, también lo es una buena redacción de las historias de usuario. Por este motivo, a continuación se presenta un método que facilita mejorar la calidad en la escritura de una historia de #[b usuario: el método #[em “Invest”].]
            .fondo-color-sistema-j.px-4.py-5.borde-13
              p.fw-bold.mb-0 Método #[em invest]
              p.mb-0 A continuación, se hace una descripción de cada uno de los elementos que intervienen en este método:
          .col-lg-5.order-first.order-lg-last(data-aos="fade-down")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/66.png",style="max-width: 502px;")
        
        .fondo-personalizado-13.mb-4
          img.imgf-1(src="@/assets/curso/temas/67.png")
          img.imgf-2(src="@/assets/curso/temas/68.png")
          img.imgf-3(src="@/assets/curso/temas/69.png")
          img.imgf-4(src="@/assets/curso/temas/70.png")
          img.imgf-5(src="@/assets/curso/temas/71.png")
          .fondo-personalizado-13__contenido.pe-3.ps-3.ps-lg-0.pt-5
            .row.align-items-end(data-aos="zoom-in-out")
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/72.png",style="max-width: 418px;")
              .col-lg-8
                SlyderF.slider-personalizado-1.mb-3(columnas="col-lg-6").pb-4
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/73.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center Independiente
                    p.mb-0.text-white.text-center Las historias de usuario deben ser lo más independientes posible para evitar dependencias. 
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/74.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center Negociable
                    p.mb-0.text-white.text-center Las historias de usuario deben ser flexibles y negociables, siempre en acuerdo con el cliente.
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/75.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center Valiosa
                    p.mb-0.text-white.text-center Es crucial que cada historia de usuario aporte valor al cliente. Idealmente, el cliente debería participar activamente en su redacción.
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/76.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center Estimable
                    p.mb-0.text-white.text-center La estimación de la historia debe ser precisa y realizable, teniendo en cuenta el tamaño y la complejidad, para facilitar la planificación por parte del equipo.
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/77.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center #[em Small] (Pequeña)
                    p.mb-0.text-white.text-center El tamaño de la historia de usuario debe ser pequeño para simplificar y mejorar la precisión de la estimación. Es ideal que se pueda completar en periodos cortos, como días o semanas.
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/78.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center #[em Testeable] (Comprobable)
                    p.mb-0.text-white.text-center La historia de usuario debe ser comprobable, con criterios claros de aceptación para considerarse completada.

    p.mb-4(data-aos="zoom-in-out") Al utilizar este método, se garantiza que las historias de usuario sean independientes entre sí, facilitando así su planificación y desarrollo sin sobrecargarlas con detalles técnicos que puedan limitar las negociaciones entre clientes y desarrolladores.

    .cont-titulo-decorativo.p-2.mb-5(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Ejemplos
    
    p.mb-4(data-aos="fade-left") A continuación, se presentan algunos ejemplos prácticos de historias de usuario aplicando el método #[em invest]:

    h4.px-4.py-2.d-inline-block.fondo-color-primario.text-white.borde-20.mb-5 #[span(style="color: #00FFDF !important;") &bull;]	 Historia de usuario: “Crear Usuario”

    p.mb-5(data-aos="fade-right") En seguida, se presentar dos opciones: 

    .fondo-personalizado-14.pos-1
      .fondo-personalizado-14__contenido
        .row.justify-content-center.mb-5(data-aos="fade-up")
          .col-lg-4
            .d-flex.flex-column.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/80.png")
              .fondo-color-primario.p-3.cont_3_1.h-100
                p.mb-4.fw-bold.text-white Primera opción:
                ul.lista-ul.lista-personalizada-2
                  li.mb-1
                    figure.me-1(style="max-width: 17px;")
                      img(src="@/assets/curso/temas/82.svg",style="max-width: 17px;")
                    span.text-white #[b Rol:] como cliente de un supermercado.
                  li.mb-1
                    figure.me-1(style="max-width: 17px;")
                      img(src="@/assets/curso/temas/82.svg",style="max-width: 17px;")
                    span.text-white #[b Objetivo:] quiero hacer compras mediante una aplicación web.
                  li.mb-1
                    figure.me-1(style="max-width: 17px;")
                      img(src="@/assets/curso/temas/82.svg",style="max-width: 17px;")
                    span.text-white #[b Beneficio:] para poder comprar sin salir de casa.
                  li.mb-1
                    figure.me-1(style="max-width: 17px;")
                      img(src="@/assets/curso/temas/82.svg",style="max-width: 17px;")
                    span.text-white #[b Comentario:] en esta historia de usuario, se identifica claramente lo que el cliente desea hacer, aunque no se especifican los detalles de cómo se realizarán las compras en línea. Estos detalles podrían aclararse en reuniones posteriores. Esta historia cumple con las características del método INVEST: es sencilla, clara y satisface una necesidad específica, facilitando así la estimación del tiempo de desarrollo.
          .col-lg-4
            .d-flex.flex-column.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/81.png")
              .fondo-color-primario.p-3.cont_3_1.h-100
                p.mb-4.fw-bold.text-white Segunda opción:
                ul.lista-ul.lista-personalizada-2
                  li.mb-1
                    figure.me-1(style="max-width: 17px;")
                      img(src="@/assets/curso/temas/82.svg",style="max-width: 17px;")
                    span.text-white #[b Rol:] como cliente de un supermercado.
                  li.mb-1
                    figure.me-1(style="max-width: 17px;")
                      img(src="@/assets/curso/temas/82.svg",style="max-width: 17px;")
                    span.text-white #[b Objetivo:] quiero acceder al registro mediante un formulario que me permita escribir mi correo electrónico y asignar una contraseña.
                  li.mb-1
                    figure.me-1(style="max-width: 17px;")
                      img(src="@/assets/curso/temas/82.svg",style="max-width: 17px;")
                    span.text-white #[b Beneficio:] para asegurar mi privacidad.
                  li.mb-1
                    figure.me-1(style="max-width: 17px;")
                      img(src="@/assets/curso/temas/82.svg",style="max-width: 17px;")
                    span.text-white #[b Comentario:] esta historia de usuario contiene especificaciones excesivas en la sección de objetivo y no clarifica suficientemente el beneficio. Se recomienda simplificar y aclarar el propósito para alinearse mejor con los criterios de #[em INVEST].

        .row.mb-5(data-aos="fade-down")
          .col-lg-7.mb-4.mb-lg-0
            h4.px-4.py-2.d-inline-block.fondo-color-primario.text-white.borde-20.mb-5 #[span(style="color: #00FFDF !important;") &bull;] Ejemplo de una historia épica
            ul.lista-ul.lista-personalizada-2.mb-0
              li
                div.me-1
                  img(src="@/assets/curso/temas/84.svg",style="min-width: 14px;max-width: 14px;")
                div #[span.color-sistema-n.fw-bold Rol:] como cliente de un supermercado.
              li
                div.me-1
                  img(src="@/assets/curso/temas/84.svg",style="min-width: 14px;max-width: 14px;")
                div #[span.color-sistema-n.fw-bold Objetivo:] quiero ingresar a una página web.
              li
                div.me-1
                  img(src="@/assets/curso/temas/84.svg",style="min-width: 14px;max-width: 14px;")
                div #[span.color-sistema-n.fw-bold Beneficio:] para hacer compras en línea.
              li
                div.me-1
                  img(src="@/assets/curso/temas/84.svg",style="min-width: 14px;max-width: 14px;")
                div #[span.color-sistema-n.fw-bold Comentario:] esta historia no es independiente y se considera una Épica, porque es muy amplia y puede subdividirse en múltiples historias más pequeñas y manejables. Para visualizar mejor una historia de usuario Épica, se recomienda consultar recursos de aprendizaje específicos sobre este tema.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/83.png",style="max-width: 505px;")
        
        .row.justify-content-center.pb-2(data-aos="flip-up")
          .col-lg-2.col-md-6.mb-4
            .borde-20.fondo-color-primario.p-4.text-center.h-100
              img.mx-auto.mb-4(src="@/assets/curso/temas/85.svg",style="max-width: 40px;")
              h4.text-white Hacer un registro
          .col-lg-2.col-md-6.mb-4
            .borde-20.fondo-color-primario.p-4.text-center.h-100
              img.mx-auto.mb-4(src="@/assets/curso/temas/86.svg",style="max-width: 40px;")
              h4.text-white Un ingreso
          .col-lg-2.col-md-6.mb-4
            .borde-20.fondo-color-primario.p-4.text-center.h-100
              img.mx-auto.mb-4(src="@/assets/curso/temas/87.svg",style="max-width: 40px;")
              h4.text-white Seleccionar productos
          .col-lg-2.col-md-6.mb-4
            .borde-20.fondo-color-primario.p-4.text-center.h-100
              img.mx-auto.mb-4(src="@/assets/curso/temas/88.svg",style="max-width: 40px;")
              h4.text-white Pagar, etc.

    .row.justify-content-center(data-aos="flip-up") 
      .col-lg-10
        .p-4.mt-5.fondo-personalizado-5.borde-11.mb-5(data-aos="flip-up")
          .row
            .col-auto(style="margin: auto;")
              figure.mb-lg-0.mb-2
                img(src="@/assets/curso/temas/89.png" style="max-width:72px")
            .col-lg.mb-4.mb-md-0.col-md-6
              h4.color-acento-contenido Plantillas de historias
              p.mb-0.text-white Para visualizar una historia del usuario épica se le invita a ingresar al anexo:   Plantillas de historias.
            .col-md-auto.text-center(style="place-self:center;")
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_Plantilla_Historias.xls')" target="_blank")
                span(style="color:initial;") Descargar
                i.fas.fa-file-download(style="color:initial;")

    .row.mb-5(data-aos="fade-left")
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 Por lo anterior, tampoco se cumpliría con la característica de estimación, ya que no se podría determinar cuándo terminaría la historia. Como se identificó en los ejemplos anteriores, el método #[em INVEST] nos proporciona reglas para optimizar la redacción de las historias de usuario, permitiendo así satisfacer las necesidades reales del cliente.

        .fondo-color-sistema-j.p-4.borde-13
          .row.align-items-center
            .col-auto.d-none.d-lg-block 
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/91.svg",style="max-width: 85px;")
            .col 
              p.mb-0 Para realizar una buena gestión de proyectos, es habitual en las metodologías ágiles utilizar una serie de herramientas para crear las historias de usuario, tales como:
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/90.png",style="max-width: 502px;")
    
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-4
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/92.png' alt="")
          .crd_hover_txt--body
            .py-2.d-flex.align-items-center(style="min-height: 75px;")
              p.mb-0.text-white.text-center Trello
      .col-lg-3.col-md-6.mb-4
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/93.png' alt="")
          .crd_hover_txt--body
            .py-2.d-flex.align-items-center(style="min-height: 75px;")
              p.mb-0.text-white.text-center Jira Software
      .col-lg-3.col-md-6.mb-4
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/94.png' alt="")
          .crd_hover_txt--body
            .py-2.d-flex.align-items-center(style="min-height: 75px;")
              p.mb-0.text-white.text-center Taiga
      .col-lg-3.col-md-6.mb-4
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/95.png' alt="")
          .crd_hover_txt--body
            .py-2.d-flex.align-items-center(style="min-height: 75px;")
              p.mb-0.text-white.text-center Excel

    h4.px-4.py-2.d-inline-block.fondo-color-primario.text-white.borde-20.mb-5 #[span(style="color: #00FFDF !important;") &bull;] 	Plantillas de historias de usuario

    .row.mb-5
      .col-lg-7
        p.mb-0 Las plantillas de historias de usuario pueden adaptarse según las necesidades específicas sin perder la flexibilidad y sencillez que caracteriza a una historia de usuario. Los equipos de desarrollo colaboran utilizando herramientas en línea para compartir y trabajar conjuntamente en las plantillas. A continuación, se presenta un ejemplo del uso de una plantilla de Excel para la gestión de productos, descargada de la web.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/96.png",style="max-width: 502px;")

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 4.] Ejemplo plantilla historia de usuario
        .tabla-a.tabla-personalizada-1.tam-1.fondo-color-sistema-h(data-aos="flip-up")
          table
            thead
              tr
                th ID de la historia
                th Rol
                th Funcionalidad
                th Razón/Resultado
                th Criterio de aceptación
            tbody
              tr
                td #[b Id.01]
                td Como cliente
                td Quiero ver una lista de categorías de productos.
                td Para poder realizar búsquedas de productos por categorías.
                td Despliegue de listado de categorías a seleccionar con productos asociados.
              tr
                td #[b Id.02]
                td Como cliente
                td Quiero ver una lista de precios.
                td Para poder elegir el producto más barato.
                td Despliegue una lista ordenada de productos por precio de menor a mayor.
            
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
