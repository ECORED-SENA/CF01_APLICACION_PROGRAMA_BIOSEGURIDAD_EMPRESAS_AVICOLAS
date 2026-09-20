<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Manejo de residuos y mortalidad
      p El manejo adecuado de los residuos y de la mortalidad constituye uno de los componentes fundamentales del programa de bioseguridad en las empresas avícolas. La acumulación, disposición inadecuada o eliminación incorrecta de estos materiales favorece la proliferación de microorganismos patógenos, insectos, roedores y otros vectores capaces de transmitir enfermedades a las aves, al personal y al ambiente. Además, puede generar contaminación del suelo, del agua y del aire, ocasionando impactos negativos sobre la salud pública y el ecosistema.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/t8/img1.jpg', alt='' style="width: 400px").m-auto
            .col-xl
              p La implementación de un programa integral para el manejo de residuos debe contemplar la identificación, clasificación, almacenamiento temporal, tratamiento, transporte y disposición final de todos los residuos generados durante el proceso productivo, así como procedimientos específicos para el retiro oportuno de aves muertas. Estas actividades deben ejecutarse bajo protocolos establecidos, registros documentales y en cumplimiento de la normatividad sanitaria y ambiental vigente.
              p.mb-0 El manejo responsable de la mortalidad y de los residuos permite disminuir los riesgos epidemiológicos, mejorar las condiciones higiénicas de la explotación, facilitar la certificación en #[b Buenas Prácticas Avícolas (BPA)] y fortalecer la sostenibilidad ambiental de la empresa.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t8/img2.png', alt='' style="width: 300px").m-auto
      #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.1 Clasificación de residuos
      p.mb-5 En una empresa avícola se generan diversos tipos de residuos derivados de las actividades productivas, sanitarias, administrativas y de mantenimiento. Su correcta clasificación facilita el almacenamiento, el tratamiento y la disposición final, evitando riesgos sanitarios y ambientales. A continuación, se relacionan los principales tipos de residuos generados en una granja avícola, algunos ejemplos y el manejo recomendado.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 21.
                span Tipos de residuos y manejo recomendado en la producción avícola
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Tipo de residuo
                      th.ajuste-border-tabla.texto-left Ejemplos
                      th.texto-left Manejo recomendado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Orgánicos
                      td.ajuste-border-tabla.texto-left Pollinaza, gallinaza, plumas y restos de alimento.
                      td.texto-left Compostaje, aprovechamiento o disposición autorizada.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Reciclables
                      td.ajuste-border-tabla.texto-left Papel, cartón, plástico limpio y vidrio.
                      td.texto-left Separación y reciclaje.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Peligrosos
                      td.ajuste-border-tabla.texto-left Envases de plaguicidas, medicamentos y agujas.
                      td.texto-left Gestión mediante operador autorizado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Especiales
                      td.ajuste-border-tabla.texto-left Aceites usados, baterías y luminarias.
                      td.texto-left Disposición según normativa ambiental.
          p.mb-5 Esta clasificación permite establecer un manejo diferenciado según las características de cada residuo y facilita su aprovechamiento o disposición segura. La separación en la fuente también requiere identificar los recipientes de acuerdo con el código de colores correspondiente.
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img3.png', alt="" ).m-auto
                  h4.text-center Blanco
                  .caja-6_p
                    p.mb-0.text-center Aprovechables reciclables.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img4.png', alt="" ).m-auto
                  h4.text-center Verde
                  .caja-6_p
                    p.mb-0.text-center Residuos orgánicos aprovechables.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img5.png', alt="" ).m-auto
                  h4.text-center Negro
                  .caja-6_p
                    p.mb-0.text-center Residuos no aprovechables.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img6.png', alt="" ).m-auto
                  h4.text-center Rojo, cuando aplique
                  .caja-6_p
                    p.mb-0.text-center Residuos biosanitarios o peligrosos.
      p.mb-0 La correcta identificación de los recipientes facilita la separación desde el lugar donde se genera el residuo y disminuye el riesgo de mezclas que dificulten su posterior manejo.
      Separador
      #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.2 Disposición final
      p.mb-5 La disposición final consiste en el conjunto de actividades destinadas a eliminar o aprovechar los residuos sin generar riesgos para la salud animal, humana o el medio ambiente. Antes de la disposición final, debe realizarse el almacenamiento temporal en recipientes resistentes, identificados y ubicados en áreas protegidas del ingreso de animales, aves silvestres e insectos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 Los residuos orgánicos pueden destinarse al compostaje, biodigestión o aprovechamiento agrícola cuando cumplen las condiciones sanitarias establecidas. Los residuos reciclables deben entregarse a gestores autorizados, mientras que los residuos peligrosos requieren manejo especializado conforme a la legislación ambiental.
          p.mb-0 La quema a cielo abierto, el abandono de residuos y el vertimiento en fuentes hídricas constituyen prácticas prohibidas debido a sus efectos negativos sobre la salud pública y el ambiente. A continuación, se relacionan los principales métodos de disposición final, su aplicación y el beneficio asociado:
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t8/img7.jpg', alt='' style="width: 500px").m-auto
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 22.
                span Métodos de manejo de residuos y sus beneficios
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Método
                      th.ajuste-border-tabla.texto-left Aplicación
                      th.texto-left Beneficio
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compostaje
                      td.ajuste-border-tabla.texto-left Residuos orgánicos.
                      td.texto-left Producción de abono.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Biodigestión
                      td.ajuste-border-tabla.texto-left Residuos orgánicos.
                      td.texto-left Producción de biogás.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Reciclaje
                      td.ajuste-border-tabla.texto-left Papel, cartón y plástico.
                      td.texto-left Aprovechamiento de materiales.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestor autorizado
                      td.ajuste-border-tabla.texto-left Residuos peligrosos.
                      td.texto-left Cumplimiento legal.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Relleno sanitario autorizado
                      td.ajuste-border-tabla.texto-left Residuos no aprovechables.
                      td.texto-left Disposición segura.
          p.mb-0 La selección del método debe realizarse de acuerdo con el tipo de residuo, sus características y las disposiciones sanitarias y ambientales aplicables.
          Separador
          #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 8.3 Manejo de mortalidad
      p.mb-5 La mortalidad forma parte del proceso productivo y debe manejarse mediante protocolos estrictos que impidan la diseminación de enfermedades. Las aves muertas deben retirarse de los galpones varias veces al día, utilizando recipientes exclusivos y evitando su contacto con aves vivas, alimento o equipos de producción. Posteriormente, deben trasladarse al sitio destinado para su tratamiento o disposición final, siguiendo rutas previamente establecidas para evitar la contaminación cruzada. Dependiendo de la infraestructura de la empresa y de la normatividad vigente, la mortalidad puede manejarse mediante compostaje, incineración autorizada, rendering u otros métodos aprobados por la autoridad competente.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t8/img8.png', alt='' style="width: 440px").m-auto
        .col-xl
          .caja-1.color-2.ajuste-2(data-aos="fade-left")
            p Todo procedimiento debe registrarse indicando fecha, cantidad de aves, posible causa de muerte, tratamiento aplicado y responsable de la actividad. El manejo de la mortalidad debe desarrollarse mediante una secuencia organizada:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Identificar las aves muertas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Retirarlas inmediatamente.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Depositarlas en un recipiente exclusivo.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Transportarlas por la ruta sanitaria.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Registrar la mortalidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Aplicar el método de disposición autorizado.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Desinfectar los equipos utilizados.
      p.mb-5 El cumplimiento de esta secuencia permite reducir el contacto de la mortalidad con las áreas productivas y mantener la trazabilidad de las actividades realizadas. Los métodos de disposición presentan características particulares que deben considerarse antes de su implementación: 
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Compostaje")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Compostaje
              p.mb-0 Presenta bajo costo y permite el aprovechamiento del material. Requiere control de temperatura.
        .py-3.py-md-4(titulo="Rendering")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Rendering
              p.mb-0 Permite el aprovechamiento industrial. Debe realizarse en plantas autorizadas.
        .py-3.py-md-4(titulo="Incineración")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Incineración
              p.mb-0 Reduce completamente el material biológico. Requiere equipos autorizados y control de emisiones.
        .py-3.py-md-4(titulo="Enterramiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Enterramiento
              p.mb-0 Constituye una alternativa excepcional y solo puede emplearse cuando sea autorizado por la autoridad competente. Debe cumplir los requisitos ambientales y sanitarios aplicables.
      p.mb-0 La elección del método debe responder a las condiciones de la explotación y a los requisitos establecidos por la autoridad competente.
      Separador
      #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.4 Sanitización de la pollinaza y gallinaza
      .row.justify-content-center.align-items-center.mb-5
        .col-xl
          .caja-1.color-3(data-aos="fade-right").mb-3
            p.mb-0 La pollinaza y la gallinaza constituyen subproductos de la producción avícola con alto contenido de materia orgánica y nutrientes, pero también pueden contener microorganismos patógenos, huevos de parásitos, hongos y residuos de medicamentos veterinarios. Su manejo inadecuado favorece la proliferación de moscas y roedores, la generación de malos olores y la contaminación ambiental.
          p.mb-0 La sanitización busca disminuir la carga microbiana mediante procesos controlados como el compostaje, la fermentación o el tratamiento térmico. El compostaje es uno de los métodos más utilizados porque permite alcanzar temperaturas superiores a 55 °C durante varios días, suficientes para reducir significativamente la presencia de microorganismos patógenos. El producto obtenido puede emplearse como fertilizante orgánico cuando cumple las condiciones sanitarias establecidas. A continuación, se relacionan los principales beneficios asociados con el proceso de compostaje.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t8/img13.jpg', alt='' style="width: 500px").m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t8/img14.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t8/img15.png').m-auto
                  h4.mb-3.estilo-text Reduce microorganismos
                  p.mb-0.text-center Mayor bioseguridad.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t8/img16.png').m-auto
                  h4.mb-3.estilo-text Disminuye olores
                  p.mb-0.text-center Mejor ambiente.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t8/img17.png').m-auto
                  h4.mb-3.estilo-text Reduce volumen
                  p.mb-0.text-center Facilita el almacenamiento.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t8/img18.png').m-auto
                  h4.mb-3.estilo-text Produce abono orgánico
                  p.mb-0.text-center Aprovechamiento agrícola.
                .tarjeta.color-acento-botones.fit___card-sinbordes
                  .row.justify-content-center.mb-4
                    .col-12
                      img(src='@/assets/curso/temas/t8/img19.png').m-auto
                  h4.mb-3.estilo-text Disminuye moscas
                  p.mb-0.text-center Mejor control sanitario.
      p.mb-5 Estos beneficios permiten relacionar el tratamiento sanitario de los residuos orgánicos con su posible aprovechamiento y con la reducción de impactos ambientales. Para que el proceso se desarrolle adecuadamente, deben controlarse diferentes parámetros:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 23.
                span Parámetros recomendados para el proceso de compostaje
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Parámetro
                      th.texto-left Valor recomendado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Humedad
                      td.texto-left 50–60 %.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura
                      td.texto-left Mayor de 55 °C durante varios días.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aireación
                      td.texto-left Periódica.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Relación carbono/nitrógeno
                      td.texto-left Adecuada según el material utilizado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tiempo aproximado
                      td.texto-left Según las condiciones del proceso y el monitoreo técnico.
          p.mb-0 El seguimiento de estos parámetros permite controlar las condiciones del proceso y determinar los ajustes requeridos durante el compostaje.
          Separador
          #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 8.5 Normatividad ambiental
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-5.color-4(data-aos="fade-right")
            p.mb-0 El manejo de residuos en empresas avícolas debe desarrollarse conforme a la legislación sanitaria y ambiental colombiana, garantizando la protección de los recursos naturales y la prevención de la contaminación. La empresa debe elaborar procedimientos documentados para la separación, el almacenamiento, el transporte, el tratamiento y la disposición final de los residuos, así como mantener registros que evidencien el cumplimiento de la normatividad.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t8/img20.jpg', alt='' style="width: 400px").m-auto
        .col-xl
          p.mb-0 Cuando se generen residuos peligrosos, estos deberán entregarse únicamente a gestores autorizados y deberán conservarse los respectivos soportes de disposición final. Las inspecciones periódicas permiten comprobar el cumplimiento de los programas ambientales y corregir oportunamente cualquier desviación identificada. La gestión de los residuos requiere responsabilidades definidas para las diferentes actividades desarrolladas dentro de la explotación.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 24.
                span Responsabilidades en la gestión de residuos avícolas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Actividad
                      th.texto-left Responsabilidad
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Clasificar residuos.
                      td.texto-left Personal operativo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Supervisar el almacenamiento.
                      td.texto-left Encargado sanitario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestionar residuos peligrosos.
                      td.texto-left Administración.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mantener registros.
                      td.texto-left Responsable del programa de bioseguridad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Capacitar al personal.
                      td.texto-left Empresa.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comprobar el cumplimiento.
                      td.texto-left Médico veterinario o responsable técnico.
          p La asignación de responsabilidades facilita el seguimiento de las actividades y permite identificar a los encargados de cada componente del programa. La gestión documental también constituye un elemento esencial para garantizar la trazabilidad. Entre los principales registros se encuentran los siguientes:
          .bg-carrusel
            .px-5
              .row.align-items-center.mb-5
                .col-xl-4(data-aos="fade-right")
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/t8/img21.png', alt='' style="max-width: 400px").m-auto
                .col-xl-8(data-aos="fade-left")
                  SlyderF(columnas="col-lg-6 col-xl-6")
                    .tarjeta.color-acento-botones.fit___card-sinbordes
                      .row.justify-content-center.mb-4
                        .col-12
                          img(src='@/assets/curso/temas/t8/img22.png').m-auto
                      h4.mb-3.estilo-text Control diario de mortalidad
                      p.mb-0.text-center Fecha, galpón, cantidad y causa probable.
                    .tarjeta.color-acento-botones.fit___card-sinbordes
                      .row.justify-content-center.mb-4
                        .col-12
                          img(src='@/assets/curso/temas/t8/img23.png').m-auto
                      h4.mb-3.estilo-text Registro de disposición de residuos
                      p.mb-0.text-center Tipo, cantidad y destino.
                    .tarjeta.color-acento-botones.fit___card-sinbordes
                      .row.justify-content-center.mb-4
                        .col-12
                          img(src='@/assets/curso/temas/t8/img24.png').m-auto
                      h4.mb-3.estilo-text Registro de compostaje
                      p.mb-0.text-center Temperatura, humedad y volteos.
                    .tarjeta.color-acento-botones.fit___card-sinbordes
                      .row.justify-content-center.mb-4
                        .col-12
                          img(src='@/assets/curso/temas/t8/img25.png').m-auto
                      h4.mb-3.estilo-text Registro de entrega a gestor autorizado
                      p.mb-0.text-center Fecha, cantidad y empresa receptora.
                    .tarjeta.color-acento-botones.fit___card-sinbordes
                      .row.justify-content-center.mb-4
                        .col-12
                          img(src='@/assets/curso/temas/t8/img26.png').m-auto
                      h4.mb-3.estilo-text Inspección sanitaria
                      p.mb-0.text-center Hallazgos y acciones correctivas.
      p.mb-5 Estos registros permiten documentar las actividades realizadas, sustentar el cumplimiento de los procedimientos y facilitar el seguimiento sanitario y ambiental.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img19.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones técnicas
      .caja-2.color-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t8/img27.jpg', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p El manejo de residuos y mortalidad requiere acciones permanentes de clasificación, retiro, tratamiento, control y registro. Para fortalecer estas actividades, se recomienda:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Clasificar los residuos desde el momento de su generación.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Retirar la mortalidad varias veces al día y nunca dejar aves muertas dentro de los galpones.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Mantener recipientes exclusivos, identificados y con tapa para el transporte de mortalidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Implementar programas de compostaje técnicamente controlados cuando sean viables.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Evitar la acumulación de pollinaza, gallinaza y residuos orgánicos cerca de los galpones.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Desinfectar diariamente los equipos utilizados para el manejo de residuos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Mantener registros completos de mortalidad, disposición final y aprovechamiento de residuos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Capacitar permanentemente al personal sobre manejo ambiental y bioseguridad.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | La aplicación sistemática de estas recomendaciones contribuye a disminuir los riesgos sanitarios y ambientales asociados con los residuos generados durante el proceso productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img19.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Normatividad aplicable
      p.mb-5 El manejo de residuos, mortalidad y subproductos avícolas debe articularse con las disposiciones sanitarias, ambientales y de Seguridad y Salud en el Trabajo aplicables a la explotación. A continuación, se relacionan los referentes incluidos en el contenido fuente.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 25.
                span Normativa aplicable al manejo de residuos en la producción avícola
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Norma
                      th.texto-left Aplicación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1076 de 2015
                      td.texto-left Gestión ambiental y manejo integral de residuos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1071 de 2015
                      td.texto-left Sector agropecuario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1072 de 2015
                      td.texto-left Seguridad y Salud en el Trabajo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 3651 de 2014 y normas que la modifiquen o sustituyan
                      td.texto-left Requisitos para granjas avícolas bioseguras, incluyendo manejo de residuos y mortalidad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución 2184 de 2019
                      td.texto-left Código de colores para la separación de residuos en la fuente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lineamientos técnicos del ICA sobre buenas prácticas avícolas
                      td.texto-left Manejo sanitario de residuos, mortalidad y subproductos avícolas.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl
              .caja-1.color-2(data-aos="fade-right").mb-3
                p.mb-0 La aplicación articulada de estos referentes, junto con los procedimientos internos y los registros correspondientes, fortalece la gestión sanitaria y ambiental de la empresa avícola. El manejo adecuado de los residuos y de la mortalidad constituye una estrategia indispensable para preservar la bioseguridad de las empresas avícolas, prevenir la diseminación de enfermedades y reducir el impacto ambiental de la producción.
              p.mb-0 La correcta clasificación, el almacenamiento, el tratamiento y la disposición final de los residuos, junto con la aplicación de protocolos para el retiro y manejo de aves muertas, fortalecen las Buenas Prácticas Avícolas (BPA), favorecen la sostenibilidad de la explotación y contribuyen al cumplimiento de la normativa sanitaria y ambiental vigente.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t8/img28.png', alt='' style="width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema8',
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
