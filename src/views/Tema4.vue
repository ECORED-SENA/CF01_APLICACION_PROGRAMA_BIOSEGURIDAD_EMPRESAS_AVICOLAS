<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Control de ingreso y Seguridad y Salud en el Trabajo
      p El control de ingreso constituye una de las medidas más importantes dentro de un programa de bioseguridad avícola, ya que representa la primera barrera para prevenir el ingreso de agentes patógenos a la explotación. La mayoría de las enfermedades aviares pueden introducirse a través de personas, vehículos, equipos, herramientas, aves silvestres, animales domésticos, alimento, agua o materiales contaminados.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-5.ajuste-3(data-aos="fade-right")
            p.mb-0 Por esta razón, todas las granjas avícolas deben implementar procedimientos estrictos de control de acceso, apoyados en barreras sanitarias, protocolos de higiene y medidas de Seguridad y Salud en el Trabajo (SST).
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img1.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          p.mb-0 La Seguridad y Salud en el Trabajo complementa la bioseguridad, debido a que protege la integridad física y la salud de los trabajadores durante la ejecución de las actividades productivas. El uso adecuado de elementos de protección personal, la identificación de riesgos y la capacitación permanente contribuyen a reducir accidentes laborales, enfermedades ocupacionales y la contaminación cruzada entre las diferentes áreas de producción.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Barreras sanitarias
      p.mb-5 Las barreras de bioseguridad son medidas físicas, químicas, biológicas y administrativas destinadas a impedir el ingreso o la propagación de agentes infecciosos dentro de la explotación avícola. Estas barreras deben implementarse desde el acceso principal de la granja hasta el interior de cada galpón, conformando un sistema integral de protección sanitaria:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Barreras físicas
                  p.mb-0 Incluyen cercas perimetrales, puertas de acceso controlado, mallas antiaves, zonas restringidas y divisiones internas que limitan el tránsito de personas y animales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Barreras químicas
                  p.mb-0 Corresponden a los procesos de limpieza y desinfección mediante el uso de pediluvios, rodaluvios, arcos de desinfección y productos sanitizantes autorizados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Barreras biológicas
                  p.mb-0 Comprenden acciones como la vacunación y la vigilancia sanitaria, orientadas a fortalecer la prevención de enfermedades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Barreras administrativas
                  p.mb-0 Incluyen los protocolos de ingreso, los registros de visitantes, la capacitación del personal y el control documental.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La combinación de estas barreras disminuye significativamente el riesgo de ingreso de enfermedades como influenza aviar, enfermedad de Newcastle, salmonelosis, micoplasmosis y bronquitis infecciosa, contribuyendo a mantener el estatus sanitario de la explotación.  La articulación de estas medidas permite establecer diferentes niveles de protección y reducir las posibilidades de ingreso y propagación de agentes infecciosos dentro de la explotación.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Pediluvios, rodaluvios y arcos de desinfección
      p.mb-5 Los #[b pediluvios, rodaluvios y arcos de desinfección] son barreras químicas indispensables para disminuir el riesgo de ingreso de microorganismos a las instalaciones avícolas. Su eficacia depende de una adecuada ubicación, mantenimiento y concentración de las soluciones empleadas.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Pediluvio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Pediluvio
              p.mb-0 Consiste en un recipiente que contiene una solución desinfectante destinada a la limpieza y desinfección del calzado del personal antes de ingresar a las áreas de producción. Debe ubicarse en todos los accesos a los galpones y mantenerse limpio, protegido de la lluvia y con la concentración adecuada del desinfectante.
        .py-3.py-md-4(titulo="Rodaluvio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Rodaluvio
              p.mb-0 Es un sistema diseñado para desinfectar las llantas de los vehículos que ingresan a la explotación. Puede estar conformado por fosas o plataformas impregnadas con soluciones desinfectantes que permitan el contacto de las ruedas con el producto.
        .py-3.py-md-4(titulo="Arcos de desinfección")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Arcos de desinfección
              p.mb-0 Generan una aspersión uniforme de solución desinfectante sobre la superficie externa de vehículos y equipos. Su funcionamiento debe complementarse con procesos previos de lavado, debido a que la presencia de materia orgánica disminuye la eficacia de los desinfectantes.
      p.mb-5 A continuación, se establece la relación entre cada sistema, su aplicación y la frecuencia de mantenimiento requerida.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Sistemas de desinfección y frecuencia de mantenimiento
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Sistema
                      th.ajuste-border-tabla.texto-left Aplicación
                      th.texto-left Frecuencia de mantenimiento
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pediluvio
                      td.ajuste-border-tabla.texto-left Desinfección del calzado.
                      td.texto-left Cambio diario o cuando esté contaminado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Rodaluvio
                      td.ajuste-border-tabla.texto-left Desinfección de llantas.
                      td.texto-left Renovación frecuente de la solución.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Arco de desinfección
                      td.ajuste-border-tabla.texto-left Vehículos y equipos.
                      td.texto-left Verificación diaria de boquillas y concentración.
          p.mb-0 El mantenimiento adecuado de estos sistemas es indispensable para conservar su eficacia y evitar que se conviertan en fuentes adicionales de contaminación.       
          Separador
          #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.3 Unidad sanitaria y flujo de ingreso
          .caja-2.color-4.mb-5(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img9.jpg', alt='' style="width: 500px").m-auto
              .col-xl.caja-2_p
                p La #[b unidad sanitaria] constituye el punto obligatorio de transición entre el exterior y las áreas productivas de la granja. En ella se realizan las actividades de registro, cambio de ropa, higiene personal y desinfección antes del ingreso a los galpones. El flujo de ingreso debe establecer una secuencia lógica que evite la contaminación cruzada. Generalmente, comprende las siguientes etapas:
                ol.lista-ol--cuadro.mb-0
                  li
                    .lista-ol--cuadro__vineta
                      span A
                    | 
                    p.mb-0 Registro del visitante o trabajador.
                  li 
                    .lista-ol--cuadro__vineta
                      span B
                    | 
                    p.mb-0 Verificación de autorización.
                  li 
                    .lista-ol--cuadro__vineta
                      span C
                    | 
                    p.mb-0 Cambio de ropa y calzado.
                  li 
                    .lista-ol--cuadro__vineta
                      span D
                    | 
                    p.mb-0 Lavado y desinfección de manos.
                  li 
                    .lista-ol--cuadro__vineta
                      span E
                    | 
                    p.mb-0 Ducha, cuando corresponda.
                  li 
                    .lista-ol--cuadro__vineta
                      span F
                    | 
                    p.mb-0 Paso por el pediluvio.
                  li 
                    .lista-ol--cuadro__vineta
                      span G
                    | 
                    p.mb-0 Ingreso controlado al área autorizada.
      p Esta secuencia permite establecer una transición sanitaria progresiva entre el exterior y las zonas productivas.
      p.mb-5 El flujo de salida debe seguir un procedimiento similar, evitando el transporte de agentes patógenos hacia el exterior de la explotación. Para facilitar la aplicación del procedimiento, se organiza a continuación la secuencia básica de ingreso.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Sistemas de desinfección y frecuencia de mantenimiento
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Etapa
                      th.texto-left Actividad
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 1
                      td.texto-left Registro del visitante o trabajador.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 2
                      td.texto-left Verificación de autorización.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 3
                      td.texto-left Cambio de ropa y calzado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 4
                      td.texto-left Lavado y desinfección de manos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 5
                      td.texto-left Paso por el pediluvio.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 6
                      td.texto-left Ingreso al área autorizada.
          p.mb-0 El cumplimiento ordenado de estas etapas contribuye a controlar el tránsito de personas y disminuye el riesgo de contaminación cruzada entre áreas.
          Separador
          #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.4 Elementos de Protección Personal (EPP)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl
          .caja-1.color-2(data-aos="fade-right").mb-3
            p.mb-0 Los #[b Elementos de Protección Personal (EPP)] constituyen la última barrera para proteger al trabajador frente a los riesgos biológicos, químicos y físicos presentes durante las actividades avícolas. El uso adecuado de los EPP disminuye el riesgo de accidentes laborales, evita la contaminación del ambiente de producción y protege la salud del personal. 
          p.mb-0 Estos elementos deben seleccionarse de acuerdo con el riesgo asociado con cada actividad. Todos los EPP deben mantenerse limpios, desinfectados y reemplazarse cuando presenten deterioro. A continuación, se relacionan los principales elementos y su función.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img10.jpg', alt='' style="width: 500px").m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img11.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Overol
                  p.mb-0.text-center Protección corporal.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Botas de caucho
                  p.mb-0.text-center Evitan la contaminación por contacto con el suelo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Guantes
                  p.mb-0.text-center Protección frente a productos químicos y agentes biológicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mascarilla o respirador
                  p.mb-0.text-center Protección respiratoria.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Gafas de seguridad
                  p.mb-0.text-center Protección ocular.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Protector auditivo
                  p.mb-0.text-center Disminuye el impacto del ruido.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Gorro
                  p.mb-0.text-center Evita la contaminación por cabello.
      p.mb-0 El uso correcto, la limpieza y el reemplazo oportuno de estos elementos forman parte de las medidas preventivas que deben mantenerse durante las actividades productivas.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Riesgos laborales
      p.mb-5 A continuación, se presenta un pódcast que permite reconocer los principales riesgos laborales presentes en las empresas avícolas, así como las medidas preventivas y de control que deben implementarse en el marco del Sistema de Gestión de Seguridad y Salud en el Trabajo.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Riesgos laborales y medidas de prevención en empresas avícolas
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img19.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones técnicas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img20.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.ajuste-4(data-aos="fade-left")
            p La correcta aplicación de las medidas de control de ingreso y prevención de riesgos requiere mantener acciones permanentes de seguimiento. Para ello, se recomienda:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Restringir el ingreso únicamente al personal autorizado.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Mantener operativos los sistemas de pediluvios, rodaluvios y arcos de desinfección.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Verificar diariamente la concentración de las soluciones desinfectantes.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Capacitar periódicamente al personal en bioseguridad y SST.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Mantener disponibles y en buen estado los elementos de protección personal.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Actualizar los protocolos de ingreso de acuerdo con los riesgos sanitarios identificados.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Realizar inspecciones periódicas para verificar el cumplimiento de los procedimientos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Documentar todas las actividades mediante registros de ingreso, inspección y mantenimiento.
      p.mb-5 Estas recomendaciones fortalecen la prevención, facilitan el seguimiento de los procedimientos y contribuyen a conservar las condiciones sanitarias y laborales requeridas en la explotación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img19.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Normatividad aplicable
      p.mb-5 Las medidas de control de ingreso, bioseguridad y Seguridad y Salud en el Trabajo deben articularse con las disposiciones que regulan estos componentes en el sector avícola colombiano.  A continuación, se relacionan los referentes normativos incluidos para orientar su implementación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img21.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Decreto 1072 de 2015").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
            .row(titulo="Decreto 1071 de 2015").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disposiciones para el sector agropecuario.
            .row(titulo="Resolución ICA 3651 de 2014 y normas que la modifiquen o sustituyan").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Requisitos para la certificación de granjas avícolas bioseguras.
            .row(titulo="Resolución 0312 de 2019").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Estándares mínimos del SG-SST.
            .row(titulo="Lineamientos técnicos del ICA sobre bioseguridad y Buenas Prácticas Avícolas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Implementación de barreras sanitarias, control de ingreso y medidas preventivas.
      p.mb-0 La aplicación articulada de estos referentes permite integrar la prevención sanitaria con las medidas destinadas a proteger la seguridad y la salud de los trabajadores.

</template>

<script>
export default {
  name: 'Tema4',
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
