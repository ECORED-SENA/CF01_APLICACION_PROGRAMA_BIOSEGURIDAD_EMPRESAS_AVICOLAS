<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 9
        h1 Control integrado de plagas y vectores
      p El #[b control integrado de plagas y vectores (CIPV)] constituye uno de los pilares fundamentales del programa de bioseguridad en las empresas avícolas. Su propósito es prevenir el ingreso, establecimiento y proliferación de organismos que puedan afectar la salud de las aves, disminuir la productividad, contaminar los alimentos y transmitir enfermedades de importancia económica y sanitaria.
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3(data-aos="fade-right").mb-3
            p.mb-0 Las principales plagas presentes en las explotaciones avícolas incluyen roedores, moscas, escarabajos de la cama, cucarachas y hormigas. Entre los vectores más importantes se encuentran las aves silvestres, los insectos hematófagos y algunos animales domésticos que pueden transportar microorganismos patógenos entre explotaciones.
          p.mb-0 Un programa de control integrado no se basa únicamente en la aplicación de productos químicos. Su éxito depende de la combinación de medidas preventivas, manejo ambiental, exclusión física, monitoreo permanente, saneamiento, educación del personal y uso responsable de plaguicidas cuando sean necesarios.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t9/img1.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t9/img2.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1(data-aos="fade-left").mb-3
            p.mb-0 Estas acciones reducen el riesgo de transmisión de enfermedades como influenza aviar, enfermedad de Newcastle, salmonelosis, colibacilosis, cólera aviar y otras patologías de importancia para la producción avícola.
          p.mb-0 La implementación del control integrado debe formar parte del #[b Programa de Bioseguridad] y de las #[b Buenas Prácticas Avícolas (BPA)], con procedimientos documentados, registros de monitoreo y acciones correctivas que permitan mantener bajo control las poblaciones de plagas y vectores.
      Separador
      #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 9.1 Concepto y clasificación
      p Las #[b plagas] son organismos cuya presencia ocasiona pérdidas económicas, deterioro de las instalaciones o afectaciones a la salud animal y humana. Los #[b vectores] son organismos capaces de transportar y transmitir agentes infecciosos entre animales, personas o el ambiente.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-5.color-2(data-aos="fade-right")
            p.mb-0 En las granjas avícolas, las plagas y vectores encuentran condiciones favorables para su desarrollo cuando existen residuos de alimento, agua estancada, acumulación de gallinaza, malezas, deficiencias estructurales o prácticas inadecuadas de limpieza.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t9/img3.jpg', alt='' style="width: 400px").m-auto
        .col-xl-4
          p.mb-0 El control integrado busca disminuir las poblaciones de estos organismos hasta niveles que no representen un riesgo sanitario, utilizando estrategias preventivas y correctivas compatibles con la protección ambiental y el bienestar animal. A continuación, se relacionan las principales plagas y vectores presentes en empresas avícolas, junto con su clasificación y el riesgo sanitario asociado:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 26.
                span Plagas y vectores de importancia sanitaria en la producción avícola
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Organismo
                      th.ajuste-border-tabla.texto-left Clasificación
                      th.texto-left Riesgo sanitario
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ratas y ratones
                      td.ajuste-border-tabla.texto-left Plaga
                      td.texto-left Contaminan el alimento y transmiten enfermedades.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Moscas
                      td.ajuste-border-tabla.texto-left Plaga
                      td.texto-left Transportan bacterias y parásitos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Escarabajo de la cama (#[i Alphitobius diaperinus])
                      td.ajuste-border-tabla.texto-left Plaga
                      td.texto-left Hospedador de bacterias, virus y parásitos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cucarachas
                      td.ajuste-border-tabla.texto-left Plaga
                      td.texto-left Contaminación microbiológica.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Hormigas
                      td.ajuste-border-tabla.texto-left Plaga
                      td.texto-left Contaminación del alimento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aves silvestres
                      td.ajuste-border-tabla.texto-left Vector
                      td.texto-left Transmisión de influenza aviar y enfermedad de Newcastle.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Insectos hematófagos
                      td.ajuste-border-tabla.texto-left Vector
                      td.texto-left Transmisión de agentes infecciosos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Perros y gatos
                      td.ajuste-border-tabla.texto-left Vector mecánico
                      td.texto-left Transporte de microorganismos entre áreas.
          p.mb-5 La presencia de estos organismos puede generar diferentes consecuencias sanitarias, productivas y económicas.
          .bg-carrusel
            .px-5
              .row.align-items-center.mb-5
                .col-xl-4(data-aos="fade-right")
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/t9/img4.png', alt='' style="max-width: 400px").m-auto
                .col-xl-8(data-aos="fade-left")
                  SlyderF(columnas="col-lg-6 col-xl-6")
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t9/img5.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Contaminación del alimento
                      p.mb-0.text-center Disminución de la inocuidad.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t9/img6.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Daño a instalaciones
                      p.mb-0.text-center Incremento de costos.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t9/img7.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Transmisión de enfermedades
                      p.mb-0.text-center Mortalidad y pérdidas económicas.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t9/img8.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Estrés en las aves
                      p.mb-0.text-center Disminución de la productividad.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t9/img9.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Contaminación ambiental
                      p.mb-0.text-center Afectación sanitaria.
      p.mb-0 La identificación de las plagas, los vectores y sus posibles impactos permite orientar las acciones preventivas y correctivas dentro del programa de bioseguridad.
      Separador
      #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 9.2 Ciclo de vida y rutas de ingreso
      .caja-3.mb-5.color-2(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p Conocer el ciclo biológico de las plagas permite establecer estrategias de control más eficientes y sostenibles. Los roedores presentan alta capacidad reproductiva y hábitos nocturnos. Las moscas completan su ciclo en pocos días cuando existen humedad y materia orgánica disponible. El escarabajo de la cama se desarrolla dentro de la pollinaza y puede sobrevivir durante el vacío sanitario si no se realiza una limpieza adecuada. Las principales rutas de ingreso de plagas y vectores incluyen:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Puertas abiertas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Grietas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Drenajes.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Ventanas sin mallas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Vehículos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Alimento contaminado.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Empaques.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Aves silvestres.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Animales domésticos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Visitantes.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t9/img10.jpg', alt='' style="width: 500px").m-auto
      p.mb-5 La identificación de estas rutas permite establecer barreras físicas y medidas de control que reduzcan significativamente el riesgo de infestación. Los ciclos biológicos de algunas de las principales plagas comprenden las siguientes etapas:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 27.
                span Plagas y vectores de importancia sanitaria en la producción avícola
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Plaga
                      th.texto-left Etapas del ciclo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mosca
                      td.texto-left Huevo – Larva – Pupa – Adulto
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Escarabajo de la cama
                      td.texto-left Huevo – Larva – Pupa – Adulto
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cucaracha
                      td.texto-left Huevo – Ninfa – Adulto
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ratón
                      td.texto-left Cría – Juvenil – Adulto
          p.mb-5 El conocimiento de estas etapas facilita la selección del momento más adecuado para aplicar medidas de prevención y control. Las rutas de ingreso también deben asociarse con medidas preventivas específicas.
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 28.
                span Rutas de ingreso de agentes contaminantes y medidas preventivas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Ruta
                      th.texto-left Medida preventiva
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Vehículos
                      td.texto-left Rodaluvios y desinfección.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Personal
                      td.texto-left Unidad sanitaria y pediluvios.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aves silvestres
                      td.texto-left Mallas y control de acceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alimento
                      td.texto-left Almacenamiento seguro.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Drenajes
                      td.texto-left Mantenimiento y protección.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grietas
                      td.texto-left Sellado de instalaciones.
          p.mb-0 El control de estos puntos disminuye las posibilidades de ingreso y establecimiento de plagas y vectores dentro de la explotación.
          Separador
          #t_9_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 9.3 Umbral de daño
      p El #[b umbral de daño] corresponde al nivel de presencia de una plaga a partir del cual es necesario implementar medidas de control para evitar pérdidas económicas o riesgos sanitarios. La determinación del umbral requiere un monitoreo permanente mediante inspecciones, trampas mecánicas, trampas luminosas, cebaderos y registros de seguimiento.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-2(data-aos="fade-right")
            p.mb-0 Cuando el monitoreo evidencia un incremento en la población de plagas, deben implementarse acciones correctivas antes de que ocurra una infestación. El monitoreo continuo permite evaluar la eficacia de las medidas aplicadas y reducir el uso innecesario de productos químicos. Entre los principales métodos de monitoreo se encuentran los siguientes:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t9/img11.png', alt='' style="width: 390px").m-auto
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inspección directa
                  p.mb-0 Consiste en la revisión periódica de las instalaciones para identificar la presencia o indicios de plagas y vectores, como excrementos, huellas, daños, nidos, insectos o materiales contaminados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trampas para roedores
                  p.mb-0 Se utilizan para detectar y realizar seguimiento a la presencia y actividad de ratas y ratones, permitiendo identificar las áreas con mayor incidencia y evaluar la efectividad de las medidas de control implementadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trampas adhesivas
                  p.mb-0 Permiten capturar y monitorear insectos rastreros y otras plagas pequeñas, facilitando la identificación de su presencia, distribución y nivel de actividad dentro de las instalaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trampas luminosas
                  p.mb-0 Emplean fuentes de luz para atraer y capturar insectos voladores, especialmente moscas y otros insectos, contribuyendo al monitoreo de su presencia y al control de las poblaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registros fotográficos
                  p.mb-0 Constituyen una evidencia visual de la presencia de plagas, daños, puntos críticos o condiciones que favorecen su proliferación. Facilitan el seguimiento de las infestaciones y la evaluación de las acciones correctivas implementadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t9/img16.png', alt='' style="max-width: 500px").m-auto
      .caja-2.color-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t9/img17.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p Estos métodos permiten reunir información sobre presencia, ubicación y evolución de las poblaciones de plagas. Algunos indicios permiten identificar el tipo de organismo presente en las instalaciones.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Huecos o madrigueras:] ratas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Huellas:] ratones.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Larvas:] moscas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Insectos adultos]: escarabajos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Ootecas:] cucarachas.
      p.mb-0 El registro oportuno de estas evidencias facilita la aplicación de acciones correctivas antes de que la población alcance niveles de mayor riesgo sanitario.
      Separador
      #t_9_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 9.4 Plaguicidas, insecticidas y rodenticidas
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t9/img18.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los #[b plaguicidas] son sustancias destinadas a prevenir, controlar o eliminar organismos considerados plagas.
          br
          p Dentro de este grupo se encuentran los #[b insecticidas], utilizados para controlar insectos, y los rodenticidas, empleados para el control de roedores. Su utilización debe realizarse únicamente cuando las medidas preventivas resulten insuficientes y siempre bajo criterios técnicos que minimicen el riesgo para las aves, el personal y el ambiente.
      p.mb-5 Todo producto debe conservar su etiqueta original, contar con #[b Hoja de Datos de Seguridad (HDS)], almacenarse en sitios exclusivos y mantenerse fuera del alcance de personas no autorizadas. El personal encargado de su aplicación debe utilizar los Elementos de Protección Personal (EPP) establecidos y respetar las dosis, los tiempos de reingreso y las recomendaciones del fabricante. Los principales productos empleados pueden clasificarse de acuerdo con el organismo que se requiere controlar:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t9/img19.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Insecticidas
                  p.mb-0.text-center Moscas, escarabajos y cucarachas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Rodenticidas
                  p.mb-0.text-center Ratas y ratones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Larvicidas
                  p.mb-0.text-center Larvas de moscas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Repelentes
                  p.mb-0.text-center Aves silvestres e insectos.
      .caja-3.mb-5.color-2(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p La selección del producto debe responder a las necesidades identificadas mediante el monitoreo y a las indicaciones técnicas correspondientes. La etiqueta constituye una fuente esencial de información para la manipulación y aplicación segura del producto.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Nombre comercial:] identificación.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Ingrediente activo:] acción del producto.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Dosis:] preparación correcta.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Precauciones:] seguridad.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Tiempo de reingreso:] protección del personal.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Categoría toxicológica:] nivel de riesgo.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Pictogramas:] identificación de peligros.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t9/img24.jpg', alt='' style="width: 500px").m-auto
      p.mb-0 La lectura completa de la etiqueta y de la HDS debe formar parte del procedimiento previo a la preparación, aplicación y almacenamiento de cualquier plaguicida.
      Separador
      #t_9_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 9.5 Medidas de prevención y control
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t9/img25.png', alt='' style="width: 400px").m-auto
        .col-xl
          .caja-1.ajuste-2(data-aos="fade-left")
            p La #[b prevención] constituye la estrategia más eficaz para disminuir la presencia de plagas y vectores. Entre las principales medidas se encuentran:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Mantener las instalaciones limpias.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Eliminar diariamente los residuos orgánicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Controlar los derrames de alimento.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Cortar las malezas alrededor de los galpones.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Eliminar las aguas estancadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Sellar grietas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Proteger las ventanas con mallas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-5.color-3(data-aos="fade-right")
            p.mb-0 Estas acciones disminuyen la disponibilidad de alimento, agua, refugio y rutas de ingreso para las diferentes plagas. Los cebaderos para roedores deben instalarse en el perímetro de la granja y revisarse periódicamente para determinar el consumo del cebo.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t9/img26.jpg', alt='' style="width: 400px").m-auto
        .col-xl-4
          p.mb-0 Las trampas para insectos deben ubicarse estratégicamente sin interferir con la producción. Todo programa de control integrado debe incluir cronogramas de inspección, registros de monitoreo, acciones preventivas, acciones correctivas y evaluación de resultados. Las principales medidas preventivas y sus beneficios se relacionan a continuación.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t9/img27.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Limpieza permanente
                  p.mb-0.text-center Reduce el alimento disponible.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Corte de malezas
                  p.mb-0.text-center Disminuye refugios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Eliminación de agua estancada
                  p.mb-0.text-center Reduce la reproducción de insectos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Sellado de grietas
                  p.mb-0.text-center Impide el ingreso de roedores.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Instalación de mallas
                  p.mb-0.text-center Evita el ingreso de aves silvestres.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t9/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Manejo adecuado de residuos
                  p.mb-0.text-center Reduce la proliferación de plagas.
      p.mb-5 La aplicación constante de estas medidas permite disminuir la dependencia de controles químicos y fortalecer la prevención. Las actividades del programa deben desarrollarse con una frecuencia definida:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-8(data-aos="fade-right")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t9/img34.png').m-auto
                  h4.mb-3.estilo-text Inspección perimetral
                  p.mb-0.text-center Semanal
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t9/img35.png').m-auto
                  h4.mb-3.estilo-text Revisión de cebaderos
                  p.mb-0.text-center Semanal
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t9/img36.png').m-auto
                  h4.mb-3.estilo-text Cambio de cebos
                  p.mb-0.text-center Según consumo o fabricante.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t9/img37.png').m-auto
                  h4.mb-3.estilo-text Revisión de trampas
                  p.mb-0.text-center Semanal
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t9/img38.png').m-auto
                  h4.mb-3.estilo-text Aplicación de insecticidas
                  p.mb-0.text-center Según monitoreo y criterio técnico.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t9/img39.png').m-auto
                  h4.mb-3.estilo-text Actualización de registros
                  p.mb-0.text-center Después de cada actividad.
            .col-xl-4(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t9/img40.png', alt='' style="max-width: 400px").m-auto
      .caja-3.mb-5.color-2(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p El cumplimiento de estas frecuencias facilita el seguimiento del programa y permite responder oportunamente ante cambios en la presencia de plagas. La gestión documental también es necesaria para garantizar la trazabilidad de las actividades realizadas.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Inspección de plagas:] fecha, área y hallazgos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Consumo de rodenticidas:] cantidad utilizada.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Aplicación de insecticidas:] producto, dosis y responsable.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Mapa de cebaderos:] ubicación y numeración.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Acciones correctivas:] actividades realizadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Evaluación del programa:] resultados del monitoreo.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t9/img41.jpg', alt='' style="width: 500px").m-auto
      p.mb-5 Estos registros permiten analizar la evolución de las poblaciones, documentar las intervenciones realizadas y sustentar las decisiones del programa de control integrado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img19.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones técnicas
      .caja-2.color-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t9/img42.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p El control integrado requiere acciones permanentes de saneamiento, exclusión, monitoreo y seguimiento. Para fortalecer su implementación, se recomienda:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Mantener las instalaciones limpias y libres de residuos orgánicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Almacenar el alimento en bodegas cerradas, limpias y protegidas contra plagas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Inspeccionar semanalmente el perímetro de la granja para detectar signos de infestación.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Utilizar cebaderos protegidos, identificados y ubicados según un plano de distribución.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Aplicar plaguicidas únicamente cuando el monitoreo justifique su uso y siguiendo las recomendaciones del fabricante.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Capacitar al personal en identificación de plagas, bioseguridad y manejo seguro de plaguicidas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Registrar todas las actividades de monitoreo y control para garantizar la trazabilidad del programa.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Evaluar periódicamente la eficacia del programa mediante indicadores de presencia de plagas y cumplimiento de las acciones preventivas.
      p.mb-5 La aplicación sistemática de estas recomendaciones fortalece el control sanitario y reduce la posibilidad de que las plagas y vectores afecten la producción avícola.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img19.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Normatividad aplicable
      p.mb-5 El control integrado de plagas y vectores debe articularse con las disposiciones relacionadas con el sector agropecuario, la gestión ambiental, la Seguridad y Salud en el Trabajo y el manejo seguro de plaguicidas. A continuación, se relacionan los referentes incluidos en el contenido fuente.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 29.
                span Normativa aplicable al control de plagas y vectores en la producción avícola
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Norma
                      th.texto-left Aplicación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1071 de 2015
                      td.texto-left Disposiciones para el sector agropecuario.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1076 de 2015
                      td.texto-left Gestión ambiental y uso responsable de plaguicidas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1072 de 2015
                      td.texto-left Sistema de Gestión de Seguridad y Salud en el Trabajo para la manipulación de sustancias químicas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 3651 de 2014 y normas que la modifiquen o sustituyan
                      td.texto-left Requisitos de bioseguridad y control integrado de plagas en granjas avícolas certificadas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lineamientos técnicos del ICA sobre buenas prácticas avícolas (BPA)
                      td.texto-left Programas de monitoreo, prevención y control integrado de plagas y vectores.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Normativa nacional sobre almacenamiento y manejo seguro de plaguicidas de uso agropecuario
                      td.texto-left Establece requisitos para transporte, almacenamiento, aplicación y disposición de envases conforme a la regulación vigente.
          p.mb-5 La aplicación articulada de estos referentes, junto con los procedimientos internos y los registros del programa, fortalece el control sanitario y ambiental de la explotación.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-1.color-2(data-aos="fade-right").mb-3
                p.mb-0 El control integrado de plagas y vectores es una estrategia preventiva esencial para preservar la bioseguridad de las empresas avícolas. La combinación de medidas de exclusión, saneamiento, monitoreo, manejo ambiental y uso responsable de plaguicidas permite reducir significativamente el riesgo de transmisión de enfermedades, proteger el bienestar de las aves y garantizar la inocuidad de la producción.
              p.mb-0 Un programa documentado, con registros actualizados, inspecciones periódicas y acciones correctivas oportunas, fortalece el cumplimiento de las #[b Buenas Prácticas Avícolas (BPA)] y de la normativa sanitaria y ambiental vigente, contribuyendo a la sostenibilidad y competitividad del sector avícola.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t9/img43.jpg', alt='' style="width: 500px").m-auto
      .caja-9.mb-3(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t9/img44.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Inspección, monitoreo y toma de muestras
            p.mb-0 Se invita a leer el documento “#[b Inspección, monitoreo y toma de muestras]”, donde se aborda la verificación del Programa de Bioseguridad en empresas avícolas, incluyendo la calidad y toma de muestras de agua, el muestreo microbiológico de superficies, equipos y utensilios, la verificación de protocolos y los indicadores de seguimiento.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Inspección_Monitoreo_Muestras.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      .caja-9.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t9/img44.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Registros y documentación
            p.mb-0 Se invita a leer el documento “#[b Registros y documentación]”, donde se aborda la gestión documental del Programa de Bioseguridad en empresas avícolas, incluyendo tipos de registros, técnicas de diligenciamiento, trazabilidad, documentación sanitaria y control documental. 
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Registros_Documentacion.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema9',
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
