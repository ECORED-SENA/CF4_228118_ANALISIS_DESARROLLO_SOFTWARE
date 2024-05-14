<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Diagramas de clase
    
    .fondo-personalizado-2.mb-5
      .fondo-personalizado-2__contenido.pt-5.pb-4
        .row.mb-4
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 Un diagrama de clases es un tipo de diagrama estático que describe la estructura de un sistema mostrando sus clases, atributos y las relaciones entre ellas. Se utiliza durante el proceso de análisis y diseño de sistemas para crear el diseño conceptual de la información que se manejará y los componentes que se encargarán de su funcionamiento y la interacción entre ellos. En un diagrama de clases, se pueden distinguir principalmente dos elementos: las clases y sus relaciones (Flores Cueto & Bertolotti Zúñiga, 2013).
            .fondo-color-sistema-j.p-3.borde-13
              .row.align-items-center
                .col-lg-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/108.png",style="max-width: 73px;")
                .col
                  p.mb-0 El objetivo de un diagrama de clases es representar las clases que conforman el modelo de un sistema determinado. Este diagrama se construye y se refina durante las fases de análisis y diseño, y sirve como referencia en la implementación del sistema.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/109.png",style="max-width: 505px;")

        .row.align-items-center
          .col-auto.d-none.d-lg-block
            figure
              img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
          .col
            p.mb-0 Los diagramas de clases pueden utilizarse desde tres perspectivas diferentes:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/110.png')
          
        h3.text-center.mb-5 Conceptual
        p El diagrama de clase representa los conceptos dentro del dominio del problema en estudio. 
      .col-md.tarjeta.fondo-color-sistema-m.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/111.png')
          
        h3.text-center.mb-5 Especificación
        p El diagrama de clase muestra las interfaces de las clases sin detallar su implementación. Las clases se asemejan a tipos de datos, representando una interfaz con múltiples implementaciones posibles.
      .col-md.tarjeta.color-primario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/112.png')
          
        h3.text-center.mb-5 Implementación
        p Esta vista muestra las clases tal y como se manifiestan en el entorno de implementación.

    .row.align-items-center.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0 Los elementos que componen un diagrama de clase son:
    
    p(style="color: red;") Falta elemento de line aqui

    .row.align-items-center.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0 En UML, una clase es representada por un rectángulo que posee tres divisiones, en donde:

    .fondo-personalizado-2.pos-2.mb-4
      .fondo-personalizado-2__contenido.pb-5
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 9.] Representación de una clase en UML
        .fondo-personalizado-burbuja.bg-white.overflow-hidden.borde-lg-28
          .burbuja(style="top: 40px;left: -89px;")
          .burbuja(style="top: -89px;right: -89px;")
          .burbuja(style="bottom: -89px;left: 18%;")
          .fondo-personalizado-burbuja__contenido.p-3.py-lg-5
            .d-flex.py-lg-5
              .fondo-color-sistema-v.p-3.px-4.px-lg-3.borde-21.d-inline-block.mx-auto
                figure.d-none.d-lg-block
                  img.mx-auto(src="@/assets/curso/temas/113.png",style="max-width: 897px;",alt="La representación de una clase de UML es un rectángulo que tiene tres divisiones (Nombre de la clase, - Atributos y +Operaciones o Métodos ()).")
                figure.d-lg-none
                  img.mx-auto(src="@/assets/curso/temas/115.png",style="max-width: 897px;",alt="La representación de una clase de UML es un rectángulo que tiene tres divisiones (Nombre de la clase, - Atributos y +Operaciones o Métodos ()).")
    
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .row.align-items-center
          .col-auto.d-none.d-lg-block
            figure
              img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
          .col
            p.mb-0 Los atributos y los métodos de las clases tienen características que definen su grado de comunicación y visibilidad con el entorno, a lo que se denominan controles de acceso.
          
        .cont-titulo-decorativo.p-2.mt-2.mb-4
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Control de acceso
        p.mb-0 El control de acceso, también conocido como visibilidad, determina la accesibilidad de los atributos o métodos de una clase. Los atributos y métodos pueden ser privados, protegidos o públicos. Cada uno de estos niveles de acceso se representa con los símbolos especificados a continuación:

      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/114.png",style="max-width: 505px;")
        
    
    .fondo-personalizado-14
      .fondo-personalizado-14__contenido.pb-5
        .fondo-personalizado-13.mb-5
          img.imgf-1(src="@/assets/curso/temas/67.png")
          img.imgf-2(src="@/assets/curso/temas/68.png")
          img.imgf-3(src="@/assets/curso/temas/69.png")
          img.imgf-4(src="@/assets/curso/temas/70.png")
          img.imgf-5(src="@/assets/curso/temas/71.png")
          .fondo-personalizado-13__contenido.pe-3.ps-3.ps-lg-0.pt-5
            .row.align-items-end
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/116.png",style="max-width: 367px;")
              .col-lg-8
                SlyderF.slider-personalizado-1.mb-3(columnas="col-lg-6").pb-4
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/117.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center Público
                    p.mb-0.text-white.text-center Se define un atributo o método como público cuando debe ser visible o accesible por todas las clases.
                    p.mb-0.text-white.text-center Símbolo: - 
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/118.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center Privado
                    p.mb-0.text-white.text-center Se define un atributo o método como privado cuando su visibilidad o acceso se restringe exclusivamente a la clase en la que se declara. 
                    p.mb-0.text-white.text-center Símbolo: + 
                  .fondo-color-primario.borde-16.p-3.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/119.png",style="max-width: 86px;")
                    p.mb-3.fw-bold.text-white.text-center Protegido
                    p.mb-0.text-white.text-center Se define un atributo o método como protegido cuando se desea que sea accesible solamente desde la clase que lo define y desde aquellas clases que heredan de ella. 
                    p.mb-0.text-white.text-center Símbolo: #
        
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Por ejemplo, se puede representar una clase denominada #[b Producto] que contiene tres atributos: #[b código de tipo entero, nombre de tipo #[em String] y precio de tipo #[em double]]. Además, incluye dos métodos: obtenerPrecio y calcularTotal. En esta representación, todos los atributos de la clase son privados, lo cual se indica con el símbolo -, y los métodos son públicos, identificados con el símbolo +.
          .col-lg-4
            .borde-19.overflow-hidden
              .p-4.pb-3.text-center.fondo-color-primario.d-flex.mb-2.align-items-end.justify-content-center(style="min-height: 84px;")
                p.mb-0.fw-bold.text-white(style="font-size: 25px;") Producto
              .p-2.text-center.fondo-color-sistema-n.mb-2(style="min-height: 84px;")
                p.mb-0.text-white - codigo: int
                p.mb-0.text-white - nombre: String
                p.mb-0.text-white - precio: double
              .p-2.text-center.fondo-color-primario.d-flex.justify-content-center.flex-column(style="min-height: 84px;")
                p.mb-0.text-white + obtenerPrecio()
                p.mb-0.text-white + calcularTotal()
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Relaciones entre clases
    
    p.mb-5 Las relaciones entre las diferentes clases indican cómo interactúan los objetos pertenecientes a esas clases. Existen distintos tipos de relaciones:

    .fondo-personalizado-burbuja
      .burbuja2.right(style="bottom: 0;")
      .fondo-personalizado-burbuja__contenido.pb-5
        .row.justify-content-evenly 
          .col-lg-3.mb-4
            .borde-20.p-5.h-100.fondo-color-primario 
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/120.png",style="max-width: 108px;")
              h4.text-white.text-center Asociación (conexión entre clases).
          .col-lg-3.mb-4
            .borde-20.p-5.h-100.fondo-color-sistema-n
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/121.png",style="max-width: 108px;")
              h4.text-white.text-center Dependencia (relación de uso).
          .col-lg-3.mb-4
            .borde-20.p-5.h-100.fondo-color-primario
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/121.png",style="max-width: 108px;")
              h4.text-white.text-center Generalización (relaciones de herencia).
    
    Separador

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Asociaciones

    .row.mb-4
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0 La relación de asociación se refiere a las conexiones entre clases. Este tipo de relación se representa gráficamente mediante una línea que conecta dos clases y presenta las siguientes características:

    .fondo-personalizado-9.mb-4
      .fondo-personalizado-9__contenido.py-5
        .row 
          .col-lg-3.col-md-6.mb-4
            .fondo-personalizado-15.pos-1.px-4.pb-5.h-100
              .d-flex
                .fondo-color-sistema-u.p-4.borde-23.mb-4.mx-auto.d-inline-block(style="min-height: 128px;")
                  figure
                    img.mx-auto(src="@/assets/curso/temas/123.svg",style="max-width: 75px;")
              h4.mb-4.text-center Nombre de la asociación
              p.text-center Es necesario asignar un nombre a la asociación, que es obligatorio para establecer el contexto de la relación. 
          .col-lg-3.col-md-6.mb-4
            .fondo-personalizado-15.pos-1.px-4.pb-5.h-100
              .d-flex
                .fondo-color-sistema-u.p-4.borde-23.mb-4.mx-auto.d-inline-block(style="min-height: 128px;")
                  figure
                    img.mx-auto(src="@/assets/curso/temas/124.svg",style="max-width: 89px;")
              h4.mb-4.text-center Rol
              p.text-center Cada clase tiene un rol asociado que describe su función en la asociación. Los roles son opcionales y no se necesitan si el nombre de la clase describe claramente su papel en la relación.
          .col-lg-3.col-md-6.mb-4
            .fondo-personalizado-15.pos-1.px-4.pb-5.h-100
              .d-flex
                .fondo-color-sistema-u.p-4.borde-23.mb-4.mx-auto.d-inline-block(style="min-height: 128px;")
                  figure
                    img.mx-auto(src="@/assets/curso/temas/125.svg",style="max-width: 89px;")
              h4.mb-4.text-center Navegabilidad
              p.text-center Define si la relación es unidireccional o bidireccional. Se representa gráficamente con flechas que indican la dirección de la asociación.
          .col-lg-3.col-md-6.mb-4
            .fondo-personalizado-15.pos-1.px-4.pb-5.h-100
              .d-flex
                .fondo-color-sistema-u.p-4.borde-23.mb-4.mx-auto.d-inline-block(style="min-height: 128px;")
                  figure
                    img.mx-auto(src="@/assets/curso/temas/126.svg",style="max-width: 89px;")
              h4.mb-4.text-center Multiplicidad 
              p.text-center Indica el número de instancias de una clase que pueden asociarse con una instancia específica de la otra clase en la relación.

    .row.align-items-center.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0 A continuación, se presentan algunos ejemplos gráficos:

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 10.] Ejemplo de asociación
    .fondo-personalizado-burbuja.bg-white.overflow-hidden.borde-lg-28
      .burbuja(style="top: 40px;left: -89px;")
      .burbuja(style="top: -89px;right: -89px;")
      .burbuja(style="bottom: -89px;left: 18%;")
      .fondo-personalizado-burbuja__contenido.p-3.py-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/127.png",style="max-width: 512px;",alt="En la figura se ejemplifica navegabilidad unidireccional y  bidireccional; o la asociación entre la clase A y la clase B.")

    .row.mb-4 
      .col-lg-7
        p.mb-4 En el ejemplo anterior, se pueden identificar tres  diferentes ejemplos de asociación entre la clase A y la clase B, en todos los ejemplos la Clase A asume el rol A en el contexto de asociación, mientras que la clase B asume el rol B en el contexto de la relación. Adicionalmente, se identificó que los dos primeros ejemplos presentan navegabilidad unidireccional, lo que indica que la relación se establece en una sola dirección. En el primer caso, la 'Asociación1' vincula la Clase B, como origen, con la Clase A, como destino. En el segundo caso, 'Asociación2' vincula la Clase A, como origen, con la Clase B, como destino. En el último ejemplo, el vínculo es bidireccional; es decir, funciona en ambos sentidos: desde la Clase A hacia la Clase B y viceversa.

        p.mb-4.color-sistema-n Una relación de asociación debe contar, como mínimo, con tres elementos: 
        
        .row.justify-content-center
          .col-md-6.col-lg-4.mb-4
            .fondo-color-primario.p-4.borde-20.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/60.svg",style="max-width: 37px;")
              h4.text-white.text-center El nombre de la asociación
          .col-md-6.col-lg-4.mb-4
            .fondo-color-sistema-n.p-4.borde-20.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/60.svg",style="max-width: 37px;")
              h4.text-white.text-center La navegabilidad

          .col-md-6.col-lg-4.mb-4
            .fondo-color-primario.p-4.borde-20.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/60.svg",style="max-width: 37px;")
              h4.text-white.text-center La multiplicidad.

      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/128.png",style="max-width: 502px;")

    .fondo-personalizado-2.mb-5
      .fondo-personalizado-2__contenido.py-5
        .row 
          .col-lg-8
            .fondo-color-sistema-j.borde-16.p-4.h-100.d-flex.justify-content-center.flex-column
              p.mb-0 En cuanto a la multiplicidad, esta indica el número de instancias de las clases que participan en la relación. Aunque este número puede variar, es común utilizar el valor de '1' o '*' para denotar múltiples instancias.
              p.mb-0 Para facilitar la comprensión y la interpretación, es importante considerar la navegabilidad. La lectura se realiza tomando como referencia una instancia de la clase de origen de la asociación con respecto al valor 'N' de instancias de la clase de destino, donde 'N' representa la multiplicidad en el extremo opuesto.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/130.png",style="max-width: 400px;")

    .row.justify-content-center.mb-5
      .col-lg-8
        .borde-11.fondo-personalizado-5.p-3
          .row.align-items-center
            .col-lg-auto 
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/131.png",style="max-width: 72px;")
            .col 
              p.mb-0.text-white Por ejemplo, se podría representar una clase llamada 'Figura' que contiene dos atributos ('lado1' y 'lado2') y tres métodos (un constructor 'Figura', un método 'área' y un método 'perímetro') de la siguiente manera:
    
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 11.] Ejemplo de variaciones de asociación entre clases
    .fondo-personalizado-burbuja.bg-white.overflow-hidden.borde-lg-28
      .burbuja(style="top: 40px;left: -89px;")
      .burbuja(style="top: -89px;right: -89px;")
      .burbuja(style="bottom: -89px;left: 18%;")
      .fondo-personalizado-burbuja__contenido.p-3.py-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/132.png",style="max-width: 512px;",alt="Ejemplo de variaciones de asociación entre clases; lo cual incluye tres variaciones de relaciones de asociación entre la clase instructor y la clase aprendiz, en todos los tres casos la navegabilidad varía dependiendo de lo que se está representando en la relación por medio de su nombre.")

    .row.align-items-center.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0 En el ejemplo anterior, se presentan tres variaciones de relaciones de asociación entre la clase #[b Instructor] y la clase #[b Aprendiz]. En los tres casos, la navegabilidad varía en función de lo que se representa en la relación, tal como se indica en su nombre.

    .fondo-personalizado-16
      .fondo-personalizado-16__contenido.py-5
        .row 
          .col-lg-4.mb-4
            .fondo-color-primario.borde-16.p-4.h-100
              figure.mb-5
                img.mx-auto(src="@/assets/curso/temas/134.png",style="max-width: 101px;")
              h4.text-white.text-center.mb-4 En el primer caso
              ul.lista-ul.lista-personalizada-1
                li
                  i.fas.fa-cube.text-white 
                  span.text-white Existe una relación de asociación denominada #[b Enseña], con una navegabilidad que va del #[b Instructor] al #[b Aprendiz], indicando que un instructor enseña a varios aprendices.
          .col-lg-4.mb-4
            .fondo-color-primario.borde-16.p-4.h-100
              figure.mb-5
                img.mx-auto(src="@/assets/curso/temas/135.png",style="max-width: 101px;")
              h4.text-white.text-center.mb-4 En el segundo caso
              ul.lista-ul.lista-personalizada-1
                li
                  i.fas.fa-cube.text-white 
                  span.text-white La relación se interpreta de la siguiente manera: un aprendiz es evaluado por un instructor.
          .col-lg-4.mb-4
            .fondo-color-sistema-m.borde-16.p-4.h-100
              figure.mb-5
                img.mx-auto(src="@/assets/curso/temas/136.png",style="max-width: 101px;")
              h4.text-center.mb-4 En el tercer  caso
              ul.lista-ul.lista-personalizada-1
                li
                  i.fas.fa-cube 
                  span De esta representación gráfica, se ilustra una relación bidireccional; es decir, se pueden realizar lecturas desde cada extremo. En este ejemplo, un instructor comparte conocimientos con muchos aprendices y un aprendiz comparte experiencias con un instructor.
    
    Separador 

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Herencia

    .fondo-personalizado-16.mb-5
      .fondo-personalizado-16__contenido.py-5
        .row 
          .col-lg-8
            .fondo-color-sistema-j.borde-16.p-5.h-100.d-flex.align-items-center
              p.mb-0 La herencia es una de las relaciones más comunes en la práctica del paradigma orientado a objetos. Como se mencionó anteriormente, se pueden construir relaciones que van desde conceptos (clases) generales a conceptos (clases) específicos (especialización), o de conceptos específicos a generales (generalización), según Schmuller (2001).
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/137.png",style="max-width: 400px;")

    
    .fondo-personalizado-burbuja
      .burbuja2.right
      .fondo-personalizado-burbuja__contenido.mb-5
        .row.justify-content-center.mb-5
          .col-lg-8
            .borde-11.fondo-personalizado-5.p-3
              .row.align-items-center
                .col-lg-auto 
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/138.png",style="max-width: 81px;")
                .col 
                  p.mb-0.text-white La herencia es un tipo especial de asociación que cuenta con clases principales o superclases (que son las más generales en la relación) y clases secundarias o subclases (que son las más especializadas). Este tipo de relación tiene implícito el nombre 'es un' o 'es una'. También, implícitamente, es una relación que vincula una instancia de la superclase con una instancia de la subclase; por lo tanto, no se asignan nombres ni multiplicidad a este tipo de relación.

        p.pb-5 En una relación de herencia, las subclases heredan las características (atributos) y comportamientos (métodos) de las superclases.
    
    .fondo-personalizado-14.pos-2.mb-5
      .fondo-personalizado-14__contenido
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 12.] Ejemplo de herencia
            figure.mb-5
              img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/139.svg",style="max-width: 1030px;",alt="En la figura se representa una relación de herencia entre siete (7) diferentes clases; en las cuales se pueden presentar varios niveles, y en cada nivel existe su correspondiente superclase o subclase.")
              img.mx-auto.d-lg-none(src="@/assets/curso/temas/140.svg",style="max-width: 366px;",alt="En la figura se representa una relación de herencia entre siete (7) diferentes clases; en las cuales se pueden presentar varios niveles, y en cada nivel existe su correspondiente superclase o subclase.")
        
        .row 
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 En la figura anterior, se presenta una relación de herencia entre siete (7) clases distintas. Las clases de tipo #[b 'supertipo'] están situadas en los niveles superiores de la jerarquía y representan las clases más generales cuyas definiciones serán heredadas por las subclases. En las relaciones de herencia, se pueden establecer varios niveles, y en cada nivel existen la correspondiente superclase y sus subclases. Es importante notar que no se asigna un nombre a estas relaciones porque se entiende implícitamente como una relación del tipo 'es un' o 'es una', la cual se interpreta desde las subclases hacia las superclases y siempre en relaciones uno a uno.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/141.png",style="max-width: 502px;")

    
    .row.justify-content-center.mb-5
      .col-lg-8
        .borde-11.fondo-personalizado-5.p-4
          .row.align-items-center
            .col-lg-auto 
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/142.png",style="max-width: 96px;")
            .col
              p.mb-0.text-white Por ejemplo, una #[b Camioneta] es un #[b Vehículo Terrestre], que a su vez es un #[b Vehículo]. La clase #[b Vehículo Terrestre] hereda todas las características y comportamientos de la clase #[b Vehículo]. A su vez, la clase #[b Camioneta] hereda todas las características y comportamientos de la clase #[b Vehículo Terrestre]. De manera indirecta, la clase #[b Camioneta] está heredando las características y comportamientos de la clase #[b Vehículo] al estar en la misma línea de herencia. La clase #[b Barco] no hereda las características de la clase #[b Vehículo Terrestre] porque no se encuentra en la misma línea de herencia.
    
    .fondo-personalizado-14.pos-3.mb-5
      .fondo-personalizado-14__contenido
        .fondo-personalizado-burbuja
          .burbuja2.right(style="top: 60px;")
          .fondo-personalizado-burbuja__contenido
            p.mb-5 Hay dos tipos de herencia en función de la cantidad de clases supertipo directas asociadas: si una clase hereda características de un solo supertipo, es una herencia simple; si una clase hereda características de más de un supertipo, es una herencia múltiple.

            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 13.] Ejemplo de herencia múltiple
            figure.pb-4
              img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/143.svg",style="max-width: 1240px;",alt="Ejemplo de herencia múltiple con un diagrama de clases donde hay varias relaciones de herencia, para el caso de la clase VehiculoAnfibio se presenta un caso de herencia múltiple ya que esta clase está heredando características de dos clases supertipo directas diferentes: VehículoTerrestre y VehículoAcuatico.")
              img.mx-auto.d-lg-none(src="@/assets/curso/temas/144.svg",style="max-width: 366px;",alt="Ejemplo de herencia múltiple con un diagrama de clases donde hay varias relaciones de herencia, para el caso de la clase VehiculoAnfibio se presenta un caso de herencia múltiple ya que esta clase está heredando características de dos clases supertipo directas diferentes: VehículoTerrestre y VehículoAcuatico.")
    
    .row.align-items-center.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 85px;")
      .col
        p.mb-0 En el ejemplo de herencia múltiple, el diagrama de clases presenta  varias relaciones de herencia. Por ejemplo, la clase #[b Vehículo Anfibio] es un caso de herencia múltiple, ya que hereda características de dos clases #[b supertipo] directas y diferentes: #[b Vehículo Terrestre y Vehículo Acuático.]

    .row.justify-content-center.mb-5
      .col-lg-10
        .borde-11.fondo-personalizado-5.p-4
          .row.align-items-center
            .col-lg-auto 
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/145.png",style="max-width: 95px;")
            .col
              p.mb-0.text-white La herencia múltiple es admitida solo por algunos lenguajes de programación, siendo Python, Perl y C++ los más conocidos que la implementan. Sin embargo, otros lenguajes orientados a objetos ofrecen funcionalidades similares a la herencia múltiple mediante el uso de interfaces.

    .fondo-personalizado-16.mb-5
      .fondo-personalizado-16__contenido.pt-1
        .cont-titulo-decorativo.p-2.mt-5.mb-5.mb-lg-1
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Visibilidad en las relaciones de herencia
        .row.align-items-center
          .col-lg-8
            p.mb-0 Para definir la visibilidad de los atributos y métodos de una clase, se utilizan los identificadores de acceso: #[em private, public y protected]. En el contexto de las relaciones de herencia, es crucial ser cuidadoso para evitar resultados no deseados, respetando las siguientes normas:
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/146.png",style="max-width: 400px;")

    .row.justify-content-center
      .col-lg-8
        .px-4.px-md-5.fondo-personalizado-10.pos-2.color-1.mb-4
          .row.align-items-center(style="min-height: 65px;")
            .col-lg-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/147.png",style="max-width: 72px;")
            .col 
              p.mb-0.text-white.pb-lg-1.pb-4.py-1.pt-2 Un atributo o método #[em private] en una superclase es inaccesible desde las subclases
    .row.justify-content-center
      .col-lg-1
      .col-lg-8
        .px-4.px-md-5.fondo-personalizado-10.pos-2.color-2.mb-4
          .row.align-items-center(style="min-height: 65px;")
            .col-lg-auto 
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/148.png",style="max-width: 57px;")
            .col 
              p.mb-0.text-white.pb-lg-1.pb-4.py-1.pt-2 Un atributo o método #[em public] en una superclase permanece público en las subclases.
    .row.justify-content-center
      .col-lg-2
      .col-lg-8
        .px-4.px-md-5.fondo-personalizado-10.pos-2.color-3.mb-4
          .row.align-items-center(style="min-height: 65px;")
            .col-lg-auto 
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/149.png",style="max-width: 54px;")
            .col 
              p.mb-0.text-white.pb-lg-1.pb-4.py-1.pt-2 Un atributo o método #[em protected] en una superclase se mantiene protegido en las subclases si existen más niveles de herencia, o actúa como privado en caso contrario.

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Agregación
    
    .row.mb-5
      .col-lg-7
        p.mb-4 La agregación es un tipo de asociación que indica que un conjunto de clases forma un todo. Por ejemplo, existen clases #[b agregadas] que simbolizan el todo y están compuestas por un conjunto de clases #[b componentes].
        .fondo-color-sistema-j.borde-13.p-4.py-3
          p.mb-0 Esta relación se representa con una línea que conecta la clase agregada con sus clases componentes, teniendo un rombo en el lado de la clase agregada que representa la relación de agregación. Aunque esta relación no tiene un nombre explícito, ya que se comprende la existencia de clases agregadas y componentes, es necesario establecer la multiplicidad en el lado de los componentes.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/150.png",style="max-width: 505px;")
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 14.] Ejemplo de relación de Agregación
        
        figure.mb-4
          img.mx-auto(src="@/assets/curso/temas/151.svg",style="max-width: 1030px;",alt="En el ejemplo de relación de Agregación se observa que los elementos que son componentes en este diagrama pueden ser componentes de otras clases, además una instancia de los componentes puede ser reemplazado por otra fácilmente razón por la cual la relación que tienen con la clase agregada no es tan fuerte y por eso es una agregación. v.")

    .fondo-personalizado-16.mb-4
      .fondo-personalizado-16__contenido.pt-5
        .row.align-items-center
          .col-lg-8
            p.mb-0 En la figura se presenta un ejemplo de relación de agregación. Como se puede apreciar, la clase #[b Computador de Escritorio] está compuesta por un monitor, una torre, un teclado, un ratón y dos parlantes. Además, la clase #[b Torre] consta de varios discos duros, memorias, un procesador y una tarjeta de video. Los componentes en este diagrama pueden ser partes de otras clases. Asimismo, una instancia de cualquier componente puede ser sustituida con facilidad, lo cual sugiere que la asociación con la clase agregada no es muy fuerte, característica distintiva de una agregación.
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/152.png",style="max-width: 456px;")
    
    Separador

    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Composición
    
    .row.mb-5
      .col-lg-7
        .fondo-color-sistema-o.p-4.d-flex.align-items-center.h-100.borde-16
          p.mb-0 La composición es un tipo particular de relación de agregación donde los componentes no pueden pertenecer a más de una relación de agregación; es decir, son exclusivos de la composición establecida. Para distinguir una relación de composición de una de agregación, el rombo representativo se rellena completamente de negro. (Schmuller, 2001).
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/153.png",style="max-width: 505px;")
    
    .fondo-personalizado-14.pos-4.mb-5
      .fondo-personalizado-14__contenido
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 15.] Ejemplo de relación de Composición
            figure.mb-5
              img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/154.svg",style="max-width: 820px;",alt="En este ejemplo de relación de Composición, la relación es más fuerte que la relación de agregación; dado que los elementos de la clase agregada no pueden formar parte de otra clase.")
              img.mx-auto.d-lg-none(src="@/assets/curso/temas/155.svg",style="max-width: 295px;",alt="En este ejemplo de relación de Composición, la relación es más fuerte que la relación de agregación; dado que los elementos de la clase agregada no pueden formar parte de otra clase.")
    
    .row.justify-content-center
      .col-lg-8
        .fondo-color-sistema-o.borde-16.p-4.p-lg-5
          p.mb-0 En la figura anterior, se identifica un ejemplo de composición. En este caso lo que se representa es una relación mucho más fuerte que la agregación ya que los elementos que componen la clase agregada no pueden formar parte de otra clase.





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
