<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Infraestructura y requisitos para granjas avícolas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3.ajuste-2(data-aos="fade-right").mb-3
            p.mb-0 La infraestructura constituye uno de los componentes más importantes de un programa de bioseguridad, ya que un diseño adecuado de las instalaciones facilita el control sanitario, reduce los riesgos de contaminación y mejora el bienestar de las aves. La ubicación, la distribución y la construcción de una granja deben responder a criterios técnicos que favorezcan la ventilación, el drenaje, la limpieza, el control del ingreso y la prevención de enfermedades.
          p.mb-0 Las instalaciones deben diseñarse de manera que permitan desarrollar todas las actividades productivas bajo condiciones seguras, minimizando el contacto con fuentes externas de contaminación y facilitando la aplicación de los protocolos establecidos en el programa de bioseguridad.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.jpg', alt='' style="width: 400px").m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Requerimientos para el establecimiento
      p.mb-5 La selección del sitio donde se ubicará una granja avícola debe considerar factores como el clima, la disponibilidad de agua potable, las vías de acceso, el tipo de suelo, la topografía y la distancia respecto a otras explotaciones pecuarias. También debe evaluarse el riesgo epidemiológico de la zona y la posibilidad de implementar barreras naturales o artificiales que contribuyan al aislamiento sanitario. A continuación, se presentan los principales aspectos que deben considerarse para el establecimiento de una granja avícola y los requisitos asociados con cada uno:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img3.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ubicación
                  p.mb-0.text-center Área libre de riesgos sanitarios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Agua
                  p.mb-0.text-center Fuente suficiente y de calidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Suelo
                  p.mb-0.text-center Buen drenaje y estabilidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Accesos
                  p.mb-0.text-center Vías adecuadas para ingreso controlado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Energía
                  p.mb-0.text-center Disponibilidad permanente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Aislamiento
                  p.mb-0.text-center Distancia respecto a otras explotaciones.
      p.mb-0 Estos requerimientos permiten seleccionar un sitio que facilite el manejo productivo y contribuya a reducir la exposición de la explotación a factores externos que puedan comprometer sus condiciones sanitarias.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Orientación e instalaciones
      p.mb-5 Los galpones deben orientarse de acuerdo con las condiciones climáticas predominantes para favorecer la ventilación natural y disminuir el estrés térmico de las aves. Las instalaciones deben construirse con materiales resistentes y fáciles de limpiar y desinfectar, garantizando una adecuada iluminación, ventilación y drenaje. A continuación, se relacionan los principales componentes de las instalaciones con las características recomendadas para facilitar las actividades de limpieza, desinfección y control sanitario.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-8(data-aos="fade-right")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t3/img9.png').m-auto
                  h4.mb-3.estilo-text Pisos
                  p.mb-0.text-center Impermeables y lavables.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t3/img10.png').m-auto
                  h4.mb-3.estilo-text Paredes
                  p.mb-0.text-center Material resistente y fácil de limpiar.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t3/img11.png').m-auto
                  h4.mb-3.estilo-text Techos
                  p.mb-0.text-center Buen aislamiento térmico.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t3/img12.png').m-auto
                  h4.mb-3.estilo-text Ventanas
                  p.mb-0.text-center Protección contra aves silvestres.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t3/img13.png').m-auto
                  h4.mb-3.estilo-text Drenajes
                  p.mb-0.text-center Evacuación eficiente de aguas.
            .col-xl-4(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 400px").m-auto
      p.mb-0 Estas características contribuyen a mantener condiciones adecuadas en los galpones y facilitan la aplicación de los procedimientos establecidos en el programa de bioseguridad.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Áreas requeridas
      .row.align-items-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Áreas requeridas
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img15.jpg', alt='Ilustración de la distribución de una granja avícola con áreas señalizadas para producción, almacenamiento, limpieza, desinfección, manejo de residuos y mortalidad, oficinas, vestidores, unidad sanitaria y parqueo, además de rutas diferenciadas para el flujo limpio y sucio. ').m-auto
        .col-xl-6
          p Toda granja debe disponer de áreas claramente definidas para desarrollar las diferentes actividades productivas, sanitarias, administrativas y de apoyo. La adecuada distribución de estos espacios permite organizar los procesos y reducir el riesgo de contaminación cruzada. Entre las principales áreas requeridas se encuentran:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Área de producción.
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Área de almacenamiento.
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Área de limpieza.
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Área de desinfección.
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Área para el manejo de residuos.
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Área para el manejo de mortalidad.
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Área de parqueo.
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Oficinas.
            li.mb-2
              span.fa-li
                i.fas.fa-feather-alt
              | Vestieres.
            li.mb-0
              span.fa-li
                i.fas.fa-feather-alt
              | Unidad sanitaria.
      p.mb-0 La separación y correcta distribución de estas áreas facilita la aplicación de los protocolos de bioseguridad y permite establecer controles específicos de acuerdo con las actividades que se desarrollan en cada espacio.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Distancias sanitarias
      p.mb-5 Las distancias entre granjas, galpones y otras instalaciones pecuarias son fundamentales para disminuir la transmisión de enfermedades. La ubicación debe ajustarse a los criterios técnicos y a la reglamentación vigente emitida por el #[b Instituto Colombiano Agropecuario (ICA)] y las autoridades competentes, considerando, además, las condiciones epidemiológicas de la región. El establecimiento de distancias sanitarias cumple diferentes propósitos relacionados con la prevención y el control epidemiológico. A continuación, se relacionan los principales objetivos con los beneficios esperados:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img16.png', alt="" ).m-auto
              h4.text-center Evitar la transmisión de enfermedades
              .caja-6_p
                p.mb-0.text-center Mayor protección sanitaria.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img17.png', alt="" ).m-auto
              h4.text-center Reducir la contaminación cruzada
              .caja-6_p
                p.mb-0.text-center Mejor control epidemiológico.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img18.png', alt="" ).m-auto
              h4.text-center Facilitar el aislamiento
              .caja-6_p
                p.mb-0.text-center Menor riesgo de brotes.
      p.mb-0 La aplicación de estos criterios contribuye al aislamiento sanitario de la explotación y disminuye la posibilidad de propagación de agentes patógenos entre unidades productivas.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Delimitación, señalización y demarcación
      .caja-2.color-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img19.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p Las áreas de la granja deben estar delimitadas y señalizadas para controlar el acceso de personas y vehículos. Esta organización permite diferenciar los espacios según su función y establecer medidas de control acordes con el nivel de riesgo sanitario. Es indispensable identificar:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Zonas restringidas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Rutas de circulación.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Puntos de desinfección.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Áreas de almacenamiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Zonas destinadas al manejo de residuos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Zonas destinadas al manejo de mortalidad.
      p.mb-0 La delimitación, la señalización y la demarcación de estos espacios facilitan el control de los desplazamientos dentro de la explotación y contribuyen a prevenir la contaminación cruzada.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Sistema Todo Dentro–Todo Afuera
      .row.justify-content-center.align-items-center.mb-5
        .col-xl
          .caja-1.color-2(data-aos="fade-right").mb-3
            p.mb-0 El sistema #[b Todo Dentro–Todo Afuera] (#[i All-In/All-Out]) consiste en alojar aves de la misma edad en un galpón y retirarlas completamente al finalizar el ciclo productivo. Posteriormente, se realiza el vacío sanitario, la limpieza y la desinfección antes del ingreso de un nuevo lote.
          p.mb-0 Este sistema disminuye la transmisión de enfermedades entre lotes, facilita la limpieza de las instalaciones y mejora el control sanitario de la explotación. Asimismo, permite organizar los ciclos productivos y fortalecer el seguimiento de cada lote. A continuación, se presentan las principales ventajas del sistema Todo Dentro–Todo Afuera y los resultados esperados de su aplicación: 
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img20.jpg', alt='' style="width: 500px").m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Menor transmisión de enfermedades
                  p.mb-0.text-center Mejor estado sanitario.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Facilita la limpieza y desinfección
                  p.mb-0.text-center Mayor eficacia de los POES.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img24.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reduce la contaminación cruzada
                  p.mb-0.text-center Disminución del riesgo epidemiológico.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img25.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mejora la trazabilidad
                  p.mb-0.text-center Mayor control de cada lote.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Incrementa la productividad
                  p.mb-0.text-center Mejor desempeño zootécnico.
          p.mb-0 La aplicación adecuada del sistema #[b Todo Dentro–Todo Afuera], junto con el vacío sanitario, la limpieza y la desinfección entre lotes, fortalece las medidas de bioseguridad y contribuye al control sanitario de la explotación avícola.

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
