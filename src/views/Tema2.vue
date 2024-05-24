<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Especificación y análisis de requisitos

    p.mb-4(data-aos="fade") La función más importante de la especificación de requisitos es servir de intermediario para que los clientes, los analistas de requisitos, los desarrolladores y los usuarios puedan comunicarse eficazmente. En esta fase es fundamental recolectar tanto #[b los requerimientos del usuario y del cliente como los del #[em software] a desarrollar], para lograr la satisfacción del cliente. Por ello, es crucial el uso de técnicas que permitan representar de manera visual e intuitiva estos requerimientos.

    .row 
      .col-lg-7
        .fondo-color-sistema-l.p-4.borde-13.mb-4(data-aos="fade-up")
          p.mb-0 Cuando se realiza la recolección de requerimientos de un cliente, el UML facilita el modelado de estos a través de sus casos de uso. Los #[em stakeholders] (partes interesadas) que están involucrados en el producto son incluidos en el modelado con las funcionalidades requeridas (casos de uso), que a su vez son modelados incluyendo relaciones y asociaciones jerárquicamente organizadas entre ellos.
        .row(data-aos="fade-down")
          .col-auto.d-none.d-lg-block
            figure
              img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 85px;") 
          .col 
            p.mb-0.position-relative(style="top: -5px;") Los casos de uso y sus actores son quienes especifican los requerimientos de un cliente, detallando las expectativas que cada uno tiene del sistema, sin centrarse únicamente en la funcionalidad que se implementará. Los análisis de requisitos se realizan para diversos procesos, no necesariamente solo para desarrollos de #[em software]. Entre los diagramas más relevantes y utilizados en UML se encuentran los diagramas de casos de uso.
      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 502px;")
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Diagrama de casos de uso
    
    .row.align-items-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-down") Los casos de uso permiten describir cada una de las funciones de las aplicaciones a desarrollar desde el punto de vista del usuario. Su utilidad se centra en expresar las funcionalidades que el producto de #[em software] debe ejecutar y, definir a las personas que serán responsables de realizar estas funcionalidades. Esta técnica implica la creación de un diagrama con su respectiva notación. El caso de uso representa el comportamiento del #[em software] en la interacción con el usuario, con el objetivo de que este alcance una meta específica. Por tanto, un caso de uso se compone de los elementos que forman parte de su notación.

        .px-3.py-4.fondo-color-sistema-j.borde-13(data-aos="fade-up")
          .row.align-items-center 
            .col-lg-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 112px;")
            .col
              p.mb-4.fw-bold Componentes de los diagramas de casos de uso
              p.mb-0 La notación de un diagrama de caso de uso incluye tres componentes principales que facilitan la representación simbólica de las funcionalidades del sistema, así como de las personas involucradas y las interacciones entre ellas.

      .col-lg-5.order-first.order-lg-last(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 505px;")

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-8
        .p-3.fondo-personalizado-5.borde-13
          .row.align-items-center 
            .col-lg-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 88px;")
            .col
              p.mb-0.text-white Estos componentes son: #[b los actores], que son los usuarios o roles que interactúan con el sistema; #[b los casos de uso], que describen las funciones del sistema; y #[b las relaciones], que especifican las conexiones entre actores y casos de uso.

    .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Actor
    
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-0 Define un rol desempeñado por un usuario, representa a una persona o grupo de personas que interactúan con un #[em software]. Se simboliza mediante la figura de un "#[em stick man]", junto al nombre del actor, que es obligatorio. Los actores se utilizan para identificar la clase de usuario que participará en el sistema y será responsable de ejecutar determinadas funciones. Por lo general, los nombres de los actores comienzan con mayúscula.
      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 502px;")

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-4(data-aos="fade-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/25.png' alt="")
          .crd_hover_txt--body
            .py-2(style="min-height: 131px;")
              p.mb-3.fw-bold.text-white.text-center Principales
              p.mb-0.text-white.text-center Son actores especificados para identificar los objetivos de los usuarios, los cuales son guiados por los casos de uso.
      .col-lg-4.col-md-8.mb-4(data-aos="flip-down")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/26.png' alt="")
          .crd_hover_txt--body
            .py-2(style="min-height: 131px;")
              p.mb-3.fw-bold.text-white.text-center De apoyo
              p.mb-0.text-white.text-center Proveen servicios al sistema informático y son definidos para esclarecer las interfaces externas.
      .col-lg-4.col-md-8.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/27.png' alt="")
          .crd_hover_txt--body
            .py-2(style="min-height: 131px;")
              p.mb-3.fw-bold.text-white.text-center Los pasivos
              p.mb-0.text-white.text-center Se interesan en el funcionamiento de los casos de uso, aunque no son considerados actores principales.
    
    p.mb-4(data-aos="fade-left") En la figura que se presenta a continuación, se identifica cómo se representa de manera gráfica un actor en un UML, al cual también se le adiciona el nombre del actor correspondiente para dar mayor claridad en el proceso.

    .fondo-personalizado-4.mb-5
      .fondo-personalizado-4__contenido.pt-5.pb-4
        .row.justify-content-center(data-aos="flip-up")
          .col-lg-4
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Representación gráfica de un actor en UML
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 400px;",alt="La figura contiene la Figura representación gráfica de un actor en UML, con círculos y palos.")

    p.mb-4(data-aos="fade-right") Además, es importante considerar que los actores no son necesariamente personas, aunque en los diagramas de casos de uso se representen mediante formas humanas. En este contexto, los sistemas externos también cumplen el rol de actores, pues pueden requerir información del sistema real o interactuar con él, como ocurre con una base de datos.

    .row.mb-5
      .col-lg-7(data-aos="fade-up")
        .fondo-color-sistema-l.p-4.borde-13.h-100.d-flex.align-items-center
          p.mb-0 Al determinar los casos de uso, resulta esencial identificar al actor. Este término se refiere al usuario cuando desempeña un rol específico, implicando que dicho usuario ejecuta los casos de uso. Dado lo anterior, cada actor tiene la capacidad de participar en diversos casos de uso y, a su vez, cada caso de uso puede involucrar a diferentes actores. Para identificar a un actor, basta con visualizar los roles que interactúan dentro del sistema.
      .col-lg-5.order-first.order-lg-last(data-aos="fade-down")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 501px;")

    .fondo-personalizado-6.pos-1.mb-5
      .fondo-personalizado-6__contenido.pb-5
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-8
            .fondo-color-sistema-m.p-4.borde-20
              .row.align-items-center
                .col-lg-auto 
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 114px;")
                .col 
                  p.fw-bold.mb-4 Ejemplo 1:
                  p.mb-4 Para explicar cada uno de los elementos de un caso de uso, se presenta el siguiente requerimiento:
                  p.mb-4 Una empresa solicita un sistema que facilite el proceso de generación de facturas de venta para comerciantes. Estas facturas deben ser enviadas a través de un sistema externo encargado del proceso de facturación.
                  p.mb-0 Los actores identificados en los requisitos del ejemplo 1 son #[b el comerciante y el sistema externo].

        h4.px-4.py-2.d-inline-block.fondo-color-primario.text-white.borde-20.mb-5 #[span(style="color: #00FFDF !important;") &bull;] Relación

        .borde-7.sombra-1.p-5.mb-5.bg-white(data-aos="zoom-in-out")
          p.mb-4 La interacción entre un actor y un caso de uso se denota mediante una relación, simbolizada por una línea o una flecha. Se describen varios tipos de relaciones según los actores mencionados anteriormente.
          .row
            .col-lg-7
              ul.lista-ul.lista-personalizada-1
                li
                  i.fas.fa-code.color-sistema-n
                  span La relación de comunicación entre un actor y un caso de uso puede ser activa o pasiva.
                li
                  i.fas.fa-code.color-sistema-n
                  span Un actor activo inicia la ejecución, con la flecha apuntando hacia el caso de uso correspondiente.
                li
                  i.fas.fa-code.color-sistema-n
                  span Un actor pasivo, en cambio, no inicia la ejecución y la flecha apunta hacia él.
                li
                  i.fas.fa-code.color-sistema-n
                  span El tipo de comunicación o relación entre actores y casos de uso establece una asociación directa.
                li
                  i.fas.fa-code.color-sistema-n
                  span Esta asociación especifica que el actor es el ejecutor del proceso descrito.

            .col-lg-5.order-first.order-lg-last
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/31.png",style="max-width: 471px;")
        
        .row.justify-content-center(data-aos="fade") 
          .col-lg-4
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Representación gráfica de una relación de caso de uso en UML
            .borde-7.sombra-1.px-4.py-5.bg-white
              figure
                img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 321px;",alt="Fechas que representan la relación con el actor.")

    p.mb-5(data-aos="fade-right") Continuando con el ejemplo 1 se identifican las siguientes relaciones de comunicación:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-4(data-aos="flip-up")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/34.png' alt="")
          .crd_hover_txt--body
            .py-2.d-flex.align-items-center(style="min-height: 79px;")
              p.mb-0.text-white.text-center Entre el comerciante y la generación de la factura.
      .col-lg-4.col-md-8.mb-4(data-aos="flip-down")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/35.png' alt="")
          .crd_hover_txt--body
            .py-2.d-flex.align-items-center(style="min-height: 79px;")
              p.mb-0.text-white.text-center Entre el comerciante y el envío de la factura.

      .col-lg-4.col-md-8.mb-4(data-aos="flip-up")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/36.png' alt="")
          .crd_hover_txt--body
            .py-2.d-flex.align-items-center(style="min-height: 79px;")
              p.mb-0.text-white.text-center Entre la factura y el sistema externo.
    
    h4.px-4.py-2.d-inline-block.fondo-color-primario.text-white.borde-20.mb-5 #[span(style="color: #00FFDF !important;") &bull;] Caso de uso

    .row.mb-5
      .col-lg-8(data-aos="fade-up")
        .fondo-color-sistema-o.p-4.borde-10
          .row.align-items-center 
            .col-lg-auto 
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 112px;")
            .col 
              p.mb-4 Los casos de uso se identifican mediante los verbos o acciones que el actor ejecuta o ejecutará. Estas acciones se describen y representan de la siguiente manera:

              ul.lista-ul.lista-personalizada-1
                li
                  i.fas.fa-code.color-sistema-n
                  span Se simbolizan con un óvalo, indicando una función que el sistema debe proporcionar.
                li
                  i.fas.fa-code.color-sistema-n
                  span El caso de uso debe ser de fácil lectura e interpretación, tanto para los desarrolladores como para el cliente. Para el nombre, se recomienda utilizar un verbo en infinitivo acompañado de un complemento.
      .col-lg-4.order-first.order-lg-last(data-aos="fade-down")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 400px;")

    .fondo-personalizado-7.pos-1.mb-5
      .fondo-personalizado-7__contenido.pb-5
        .row.justify-content-center(data-aos="flip-up")
          .col-lg-4
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Representación caso de uso
            .borde-7.sombra-1.px-4.py-5.bg-white
              figure
                img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 321px;",alt="La representación del  caso de uso es a tráves de un ovalo.")
    
    .row.mb-4
      .col-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col(data-aos="fade")
        p.mb-0.position-relative(style="top: -5px;") Los casos de uso que se identifican para el ejemplo 1 son: generar factura y enviar factura, los cuales se ven representados gráficamente en la siguiente figura.

    .fondo-personalizado-7.pos-1.mb-5
      .fondo-personalizado-7__contenido.pb-5
        .row.justify-content-center(data-aos="flip-up")
          .col-lg-4
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5.] Ejemplo caso de uso
            .borde-7.sombra-1.px-4.py-5.bg-white
              figure
                img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 321px;",alt="La representación del  caso de uso es a tráves de un ovalo.")
    
    .row.mb-4
      .col-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col(data-aos="fade")
        p.mb-0.position-relative(style="top: -5px;") A continuación, se presenta un ejemplo de la representación gráfica del diagrama de caso de uso, que incluye los actores, relaciones y el caso de uso del problema planteado en el Ejemplo 1.

    
    .fondo-personalizado-7.pos-1.mb-5
      .fondo-personalizado-7__contenido.pb-5
        .row.justify-content-center(data-aos="flip-up")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 6.] Representación ejemplo 1
            .borde-7.sombra-1.px-4.py-4.bg-white
              figure
                img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 321px;",alt="La figura  representa un proceso de dos pasos donde un comerciante genera una factura y luego la envía a un destinatario o sistema.")

    .row.mb-5
      .col-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col(data-aos="fade")
        p.mb-0.position-relative(style="top: -5px;") Por otro lado, los pasos para diseñar el diagrama de casos de uso del sistema de ventas, mostrado en la figura anterior, están detallados a continuación:

    .fondo-personalizado-8.mb-5
      .fondo-personalizado-8__contenido.pb-4
        .row.justify-content-center
          .col-lg-3.mb-4(data-aos="fade-up")
            .fondo-color-primario.borde-20.p-4.pt-5.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 87px;")
              p.mb-5.text-white.text-center Se identifican los casos de uso según requerimientos, para el caso del ejemplo son: (generar factura, enviar factura).
          .col-lg-3.mb-4(data-aos="fade-down")
            .fondo-color-sistema-p.borde-20.p-4.pt-5.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 87px;")
              p.mb-5.text-center Se identifican los posibles actores que interactuaran con el sistema: para el caso del ejemplo: (comerciante y sistema externo).
          .col-lg-3.mb-4(data-aos="fade-up")
            .fondo-color-primario.borde-20.p-4.pt-5.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 87px;")
              p.mb-5.text-white.text-center Se identifican las relaciones de comunicación entre comerciante y los casos de uso, generar factura y enviar factura.

    .row.mb-5(data-aos="flip-up")
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0.position-relative(style="top: -5px;") Además de la relación básica de comunicación mostrada anteriormente, existen otras relaciones en los casos de uso que detallan con mayor precisión las interacciones entre ellos.
    
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Relaciones de casos de uso
    
    .row.mb-5(data-aos="fade")
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0.position-relative(style="top: -5px;") Durante el proceso de desarrollo, se pueden definir diferentes casos de uso que no son independientes entre sí. Es posible establecer relaciones de dependencia mutua entre los casos de uso. Las principales relaciones consideradas por UML son:
    
    .fondo-personalizado-9.pos-1.mb-4
      .fondo-personalizado-9__contenido
        .row.justify-content-center.mb-5(data-aos="zoom-in-out")
          .col-lg-4.col-md-8.mb-4
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/temas/46.png' alt="")
              .crd_hover_txt--body
                .py-2(style="min-height: 131px;")
                  p.mb-0.fw-bold.text-white.text-center Inclusión   #[em (include)]
                  p.mb-0.text-white.text-center Se emplea para extraer comportamientos comunes de un caso de uso. Un caso de uso puede incluir a otro.
          .col-lg-4.col-md-8.mb-4(data-aos="flip-down")
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/temas/47.png' alt="")
              .crd_hover_txt--body
                .py-2(style="min-height: 131px;")
                  p.mb-0.fw-bold.text-white.text-center Extensión  #[em (extend)]
                  p.mb-0.text-white.text-center Utilizada para ampliar las funcionalidades de un caso de uso existente, es especialmente útil para incorporar nuevos requisitos del sistema.
          .col-lg-4.col-md-8.mb-4(data-aos="flip-up")
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/temas/48.png' alt="")
              .crd_hover_txt--body
                .py-2(style="min-height: 131px;")
                  p.mb-0.fw-bold.text-white.text-center Generalización #[em (generalization)] 
                  p.mb-0.text-white.text-center Esta relación ocurre entre un caso de uso general y uno más específico, donde el específico hereda propiedades del caso de uso base.

        .row.mb-5
          .col-auto.d-none.d-lg-block(data-aos="fade-left")
            figure
              img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
          .col(data-aos="fade")
            p.mb-0.position-relative(style="top: -5px;") Tomando como referencia el Ejemplo 1, con el objetivo de perfeccionar el diagrama de casos de uso, se pueden introducir nuevos casos de uso que ilustren las relaciones mencionadas anteriormente.
        
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="Ejemplo <em>extends</em>")
            .row.align-items-center.mb-4
              .col-lg-6
                p.mb-0 Se establece la relación #[em extends] cuando un caso de uso es similar a otro, pero incluye funciones adicionales. Por ejemplo, en el caso mencionado anteriormente, el caso de uso enviar factura podría ampliarse a #[b enviar factura por correo electrónico]. Ambos casos implican la misma acción básica de enviar la factura; sin embargo, en la extensión, además se envía un correo electrónico con la factura. Esto se representaría de la siguiente manera:
              .col-lg-6.pe-5
                .bg-white.borde-12.p-2.mb-3
                  figure
                    img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 440px;",alt="La figura presenta  un proceso secuencial en el cual un comerciante genera una factura y luego la envía. Existe una opción detallada para enviar la factura específicamente por correo electrónico. El flujo termina con la recepción de la factura por un sistema externo, mostrando que el envío por correo es una parte adicional del proceso de envío general.")
                p.mb-0 La relación se interpreta así: el caso de uso enviar factura por correo extiende del caso de uso enviar factura.
          div.ms-md-5(titulo="Ejemplo <em>include</em>")
            .row.align-items-center.mb-4
              .col-lg-6
                p.mb-0 Otro aspecto importante a considerar se presenta en ejemplo #[em include]; esta relación se define cuando parte del comportamiento o acción es común en más de un caso de uso, eliminando la necesidad de duplicar dichas acciones. Por ejemplo, en el caso del Ejemplo 1, se añade el siguiente requisito funcional: antes de enviar la factura, el usuario puede realizar una búsqueda de facturas para seleccionar y enviar. Esto hace necesario incluir la relación #[em include]. La representación sería la siguiente:
              .col-lg-6.pe-5
                .bg-white.borde-12.p-2.mb-3
                  figure
                    img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 440px;",alt="La figura presenta  un proceso en el que un comerciante genera y envía una factura, con pasos adicionales para buscar la factura y enviarla por correo electrónico, culminando con la recepción por parte de un sistema externo.")

    .fondo-personalizado-9.pos-1.mb-5
      .fondo-personalizado-9__contenido.pt-4
        .cont-titulo-decorativo.p-2.mb-5(data-aos="fade")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Especificación de casos de uso
        
        .row.mb-5 
          .col-lg-7(data-aos="fade")
            p.mb-4 La especificación de casos de uso se refiere al proceso de descripción detallada de cada caso, incluyendo los flujos y eventos que interactúan con el sistema y los actores involucrados. Generalmente, el analista encargado del diseño identifica los requerimientos y los documenta.
            p.mb-0 El propósito de la especificación de casos de uso incluye:
          .col-lg-5(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 502px;")
        
        .row.justify-content-center 
          .col-lg-6
            .px-4.px-md-5.fondo-personalizado-10.color-1.mb-4(data-aos="fade-up")
              .row.align-items-center
                .col-lg-auto 
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/52.png",style="max-width: 75px;")
                .col 
                  p.mb-0.text-white.pb-lg-1.pb-4.py-1 Describir la interacción de un actor con el sistema.
            .px-4.px-md-5.fondo-personalizado-10.color-2.mb-4(data-aos="fade")
              .row.align-items-center
                .col-lg-auto 
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 75px;")
                .col
                  p.mb-0.text-white.pb-lg-1.pb-4.py-1 Explicar el rol que desempeñan los actores en su interacción con el sistema y sus flujos.
            .px-4.px-md-5.fondo-personalizado-10.color-3.mb-4(data-aos="fade-down")
              .row.align-items-center
                .col-lg-auto 
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 75px;")
                .col
                  p.mb-0.text-white.pb-lg-1.pb-4.py-1 Detallar los casos de uso.
    
    .row.mb-5.align-items-center.mb-4(data-aos="zoom-in-out")
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0.position-relative A continuación, se presenta las partes esenciales y las directrices básicas para la documentación de casos de uso.
    
    .fondo-personalizado-6.pos-2.mb-4
      .fondo-personalizado-6__contenido
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 1.] Plantilla de casos de uso

            .tabla-a.mb-5.fondo-color-sistema-h(data-aos="flip-up")
              table
                thead
                  tr
                    th Componente
                    th Descripción de una especificación de caso de uso
                tbody
                  tr
                    td #[b Nombre del caso de uso]
                    td Indica el nombre del caso de uso. Normalmente, el nombre expresa el resultado objetivo y observable del caso de uso, como por ejemplo "Imprimir factura" en el caso de un sistema de ventas.
                  tr
                    td #[b Autor]
                    td Persona que diseña el caso de uso.
                  tr
                    td #[b Fecha]
                    td Aquí se diligencia la fecha en la que se realizó el caso de uso.
                  tr
                    td #[b Descripción]
                    td Se realiza una corta descripción del caso de uso.
                  tr
                    td #[b Actores]
                    td Describe los nombres del actor o actores del caso de uso.
                  tr
                    td #[b Precondiciones]
                    td Son aquellas condiciones que deben existir para que se cumpla el caso de uso.
                  tr
                    td #[b Flujo normal]
                    td Son los pasos normales de ejecución del caso de uso.
                  tr
                    td #[b Flujo alternativo]
                    td Flujos alternativos de ejecución de casos de uso.
                  tr
                    td #[b PosCondiciones]
                    td Son aquellas condiciones que se cumplen cuando finaliza un caso de uso.

        .row.mb-5.align-items-center.mb-4
          .col-auto.d-none.d-lg-block
            figure
              img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
          .col
            p.mb-0.position-relative A continuación, se presenta un ejemplo de especificación de casos de uso para el caso de uso “Crear Foro” utilizando la plantilla propuesta posteriormente.

        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 2.] Descripción de una especificación de caso de uso ejecutado

            .tabla-a.mb-5.tabla-personalizada-1.tam-1.fondo-color-sistema-h(data-aos="flip-up")
              table
                thead
                  tr
                    th(style="width: 220px;") Componente
                    th(style="min-width: 300px;") Descripción de una especificación de caso de uso
                tbody
                  tr
                    td #[b Nombre del caso de uso]
                    td Crear foro
                  tr
                    td #[b Autor]
                    td Mario Vera Cruz
                  tr
                    td #[b Fecha]
                    td 20/09/2021
                  tr
                    td #[b Descripción]
                    td Crea un nuevo mensaje.
                  tr
                    td #[b Actores]
                    td Alumno/Docente.
                  tr
                    td #[b Precondiciones]
                    td Al iniciar el usuario debe estar autenticado en el sistema.
                  tr
                    td #[b Flujo normal]
                    td
                      p.mb-0 #[b 1.] El actor da clic en la opción nuevo mensaje.
                      p.mb-0 #[b 2.] Se muestra un área de texto para escribir el mensaje.
                      p.mb-0 #[b 3.] El actor introduce el mensaje.
                      p.mb-0 #[b 4.] El sistema verifica datos y los almacena.
                      p.mb-0 #[b 5.] El profesor acepta y publica.

                  tr
                    td #[b Flujo alternativo]
                    td
                      p.mb-0 #[b 4a]. Se hace una comprobación de los datos, si no son correctos muestra mensaje de corrección.
                      p.mb-0 #[b 4b]. El profesor rechaza el mensaje de modo que no es publicado sino devuelto.

                  tr
                    td #[b PosCondiciones]
                    td Se publica y almacena el mensaje satisfactoriamente.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-out")
      h2 2.2 Casos de uso reales (Prototipos)

    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p.mb-4 El propósito principal de los casos de uso reales es detallar el proceso de un sistema de información descrito mediante un caso de uso, lo que incluye la interacción de objetos y la definición de las transacciones de las interfaces y clases de los diferentes procedimientos secundarios de diseño. Por lo tanto, es fundamental completar los entornos recolectados del análisis con las clases de diseño correspondientes, sin dejar de lado las restricciones del entorno tecnológico.
        .fondo-color-sistema-j.p-3.borde-13(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto 
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 112px;")
            .col
              p.mb-0 Los casos de uso reales representan el diseño preciso del caso de uso desde una tecnología específica. Por ejemplo, si se trata de un diseño gráfico para el usuario, se incluirá el diseño de las ventanas y una descripción de la interacción con los objetos de la interfaz. Los casos de uso reales proporcionan diseños de pantalla y explicaciones sobre la interacción entre los objetos de la interfaz.
      .col-lg-5.order-first.order-lg-last(data-aos="fade-up")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/56.png",style="max-width: 502px;")

    .row.mb-5.align-items-center(data-aos="fade")
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0.position-relative Para aclarar las definiciones anteriores, se utiliza un ejemplo de un sistema de ventas que se presentará posteriormente. En este ejemplo, se realiza el diseño del caso de uso real y se describe la interacción entre los artefactos del diseño. A continuación, se presenta una tabla con los datos de un ejemplo para un sistema de ventas:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3.] Sistema de ventas

        .tabla-a.tabla-personalizada-1.tam-1.fondo-color-sistema-h(data-aos="flip-up")
          table
            thead
              tr
                th(style="width: 320px;") Caso de uso adquirir productos
                th(style="min-width: 300px;") Adquirir productos
            tbody
              tr
                td #[b Actores]
                td Cliente (quien inicia el proceso), Cajero.
              tr
                td #[b Tipo]
                td Primario, real.
              tr
                td(style="vertical-align: top;") #[b Descripción]
                td
                  ul.lista-ul.lista-personalizada-1
                    li.mb-1
                      | &bull; &nbsp;
                      span En el almacén de ropa el cliente se dirige a la caja registradora con los productos a comprar.
                    li.mb-1
                      | &bull; &nbsp;
                      span El empleado-cajero hace el registro de los productos que el cliente compra y recibe el dinero en efectivo.
                    li.mb-1
                      | &bull; &nbsp;
                      span Al finalizar el proceso, el cliente se retira con los artículos comprados.

    .row.mb-5.align-items-center
      .col-auto.d-none.d-lg-block(data-aos="fade-up")
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col(data-aos="fade-down")
        p.mb-0.position-relative A continuación, se presenta el ejemplo del sistema de ventas:

    .fondo-personalizado-11.pos-1
      .fondo-personalizado-11__contenido.pb-5
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] Ejemplo Sistema de ventas
        .row 
          .col-lg-8
            figure.mb-4.mb-lg-0(data-aos="flip-up")
              img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 820px;",alt="La figura presenta la interfaz de un sistema de ventas  contiene campos para Cod Producto, Precio, Total, Monto, Cantidad, Descripción y Total Venta. En la parte inferior, se encuentran tres botones de acción para Ingresar Producto, Terminar Venta y Efectuar Pago.")
          .col-lg-4
            ul.lista-ul.lista-personalizada-1(data-aos="zoom-in-out")
              li.mb-2
                div.list-dec-1.me-2
                  span.fondo-color-acento-contenido 1
                span El cliente se acerca a la caja registradora con los artículos que desea llevar.
              li.mb-2
                div.list-dec-1.me-2
                  span.fondo-color-acento-contenido 2
                div
                  p.mb-0 El cajero ingresa el código del producto en #[span.color-sistema-n.fw-bold A] de la Ventana-1.
                  p.mb-0 - Opcional: Si el cliente tiene más de un producto, el cajero puede registrar la cantidad en #[span.color-sistema-n.fw-bold E].
                  p.mb-0 - Una vez finalizado el registro de todos los productos, se presiona #[span.color-sistema-n.fw-bold H].
              li.mb-2
                div.list-dec-1.me-2
                  span.fondo-color-acento-contenido 3
                div
                  p.mb-0 El sistema almacena los productos registrados.
                  p.mb-0 - La descripción y el precio del producto se muestran en #[span.color-sistema-n.fw-bold B] y en #[span.color-sistema-n.fw-bold F] de la Ventana-1.
              li.mb-2
                div.list-dec-1.me-2
                  span.fondo-color-acento-contenido 4
                span El cajero presiona el botón #[span.color-sistema-n.fw-bold I] para dar por finalizada la venta.
              li.mb-2
                div.list-dec-1.me-2
                  span.fondo-color-acento-contenido 5
                span El sistema realiza el cálculo y muestra en #[span.color-sistema-n.fw-bold C] el total de la venta.



</template>

<script>
export default {
  name: 'Tema2',
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
