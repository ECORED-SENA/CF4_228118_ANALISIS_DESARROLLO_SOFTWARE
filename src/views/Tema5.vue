<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
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

    .fondo-personalizado-2
      .fondo-personalizado-2__contenido.py-5
        .row 
          .col-lg-8
            .fondo-color-sistema-j.borde-16.p-4.h-100.d-flex.justify-content-center.flex-column
              p.mb-0 En cuanto a la multiplicidad, esta indica el número de instancias de las clases que participan en la relación. Aunque este número puede variar, es común utilizar el valor de '1' o '*' para denotar múltiples instancias.
              p.mb-0 Para facilitar la comprensión y la interpretación, es importante considerar la navegabilidad. La lectura se realiza tomando como referencia una instancia de la clase de origen de la asociación con respecto al valor 'N' de instancias de la clase de destino, donde 'N' representa la multiplicidad en el extremo opuesto.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/130.png",style="max-width: 400px;")

            


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
