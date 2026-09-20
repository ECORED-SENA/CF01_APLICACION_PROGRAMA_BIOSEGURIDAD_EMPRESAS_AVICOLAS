<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Manejo y tratamiento del agua
      .caja-1.color-3(data-aos="zoom-in").mb-3
        p.mb-0 El agua es el nutriente de mayor consumo en la producción avícola y constituye un factor determinante para el crecimiento, el desarrollo, el bienestar, la productividad y el estado sanitario de las aves. Una deficiente calidad del agua o un manejo inadecuado de los sistemas de abastecimiento favorecen la proliferación de microorganismos patógenos, la formación de biopelículas en las tuberías, la disminución del consumo de alimento y agua, el incremento de enfermedades y las pérdidas económicas.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/t7/img1.jpg', alt='' style="width: 400px").m-auto
            .col-xl
              p En un programa de bioseguridad, el agua debe considerarse un #[b insumo crítico], por lo que es indispensable garantizar su calidad microbiológica, fisicoquímica y organoléptica mediante programas permanentes de monitoreo, tratamiento, limpieza de tanques y desinfección de las líneas de distribución.
              p.mb-0 El #[b Instituto Colombiano Agropecuario (ICA)] y las #[b Buenas Prácticas Avícolas (BPA)] establecen que toda granja debe disponer de agua suficiente, segura y de calidad para el consumo de las aves y para las actividades de limpieza y desinfección.
          p.mb-0 El manejo integral del agua comprende la protección de las fuentes de abastecimiento, el almacenamiento adecuado, la aplicación de tratamientos cuando sean necesarios, la toma periódica de muestras, el análisis de laboratorio y el mantenimiento preventivo de tanques, tuberías y bebederos, garantizando así la inocuidad de la producción avícola.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t7/img2.png', alt='' style="width: 250px").m-auto
      Separador
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.1 Características del agua
      p.mb-5 El agua destinada al consumo de las aves debe cumplir condiciones físicas, químicas y microbiológicas que garanticen su inocuidad y no afecten la salud ni el desempeño productivo del lote.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Organoléptica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Organoléptica
              p.mb-0 El agua debe ser incolora, inodora, insípida y estar libre de materiales flotantes o sedimentos visibles. La presencia de olores desagradables, coloración anormal o turbidez puede indicar contaminación o deterioro de la calidad.
        .py-3.py-md-4(titulo="Fisicoquímica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fisicoquímica
              p.mb-0 Incluye parámetros como pH, dureza, alcalinidad, sólidos disueltos totales, conductividad, hierro, manganeso, nitratos, nitritos y concentración de cloro residual. Los valores inadecuados pueden disminuir la efectividad de vacunas y medicamentos administrados por vía oral, reducir el consumo de agua y favorecer la formación de incrustaciones o corrosión en las tuberías.
        .py-3.py-md-4(titulo="Microbiológica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Microbiológica
              p.mb-0 El agua debe estar libre de microorganismos patógenos como #[i Salmonella spp., Escherichia coli, Campylobacter spp., Pseudomonas spp]. y otros agentes capaces de ocasionar enfermedades en las aves.
      p.mb-5 El consumo de agua varía según la edad, la genética, la temperatura ambiental, la humedad relativa, el tipo de alimento y el sistema de producción. En condiciones normales, un ave puede consumir entre #[b 1,6 y 2,5 veces] la cantidad de alimento ingerido. A continuación, se relacionan las principales características asociadas con un agua de buena calidad, la condición recomendada y su importancia para la producción avícola.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 15.
                span Características recomendadas para la calidad del agua en producción avícola
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Característica
                      th.ajuste-border-tabla.texto-left Condición recomendada
                      th.texto-left Importancia
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Color
                      td.ajuste-border-tabla.texto-left Transparente
                      td.texto-left Indica ausencia de contaminación visible.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Olor
                      td.ajuste-border-tabla.texto-left Sin olor
                      td.texto-left Favorece el consumo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sabor
                      td.ajuste-border-tabla.texto-left Neutro
                      td.texto-left No altera el consumo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Turbidez
                      td.ajuste-border-tabla.texto-left Baja
                      td.texto-left Reduce la presencia de partículas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold pH
                      td.ajuste-border-tabla.texto-left Aproximadamente entre 6,5 y 8,5.
                      td.texto-left Favorece la salud y la eficacia de tratamientos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Microorganismos patógenos
                      td.ajuste-border-tabla.texto-left Ausentes
                      td.texto-left Previene enfermedades.
          p.mb-5 Estas condiciones permiten establecer criterios básicos para identificar alteraciones que puedan comprometer el consumo, la sanidad o el desempeño productivo de las aves. La calidad del agua puede deteriorarse por diferentes factores relacionados con la fuente, el almacenamiento y el sistema de distribución.
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 16.
                span Factores que afectan la calidad del agua y sus consecuencias
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Factor
                      th.texto-left Consecuencia
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contaminación fecal
                      td.texto-left Enfermedades digestivas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Exceso de minerales
                      td.texto-left Disminución del consumo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Formación de biopelículas
                      td.texto-left Multiplicación bacteriana.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tanques sin limpieza
                      td.texto-left Contaminación permanente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tuberías deterioradas
                      td.texto-left Pérdida de calidad.
          p.mb-0 La identificación oportuna de estos factores facilita la aplicación de medidas preventivas y correctivas dentro del programa de manejo del agua.
          Separador
          #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 7.2 Tratamiento básico del agua
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p El tratamiento del agua tiene como finalidad eliminar microorganismos, reducir contaminantes y garantizar condiciones adecuadas para el consumo animal. Dependiendo de la fuente de abastecimiento, como acueducto, pozo profundo, nacimiento, río o reservorio, pueden requerirse diferentes procesos de tratamiento. Los tratamientos más utilizados en empresas avícolas incluyen:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-feather-alt
                | Sedimentación.
              li.mb-1
                span.fa-li
                  i.fas.fa-feather-alt
                | Filtración.
              li.mb-1
                span.fa-li
                  i.fas.fa-feather-alt
                | Uso de peróxido de hidrógeno.
              li.mb-1
                span.fa-li
                  i.fas.fa-feather-alt
                | Acidificación controlada.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Desinfección mediante luz ultravioleta en algunos sistemas tecnificados.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t7/img6.png', alt='' style="width: 350px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-5.color-2(data-aos="fade-right")
            p.mb-0 La selección del tratamiento debe responder a las características de la fuente y a los resultados obtenidos mediante los controles de calidad correspondientes. La cloración continúa siendo uno de los métodos más utilizados debido a su eficacia para controlar bacterias y otros microorganismos, siempre que se mantengan las concentraciones recomendadas y el tiempo suficiente de contacto.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t7/img7.jpg', alt='' style="width: 400px").m-auto
        .col-xl-3
          p.mb-0 Antes de aplicar cualquier tratamiento, es indispensable realizar análisis de laboratorio que permitan conocer las características del agua y seleccionar el procedimiento más apropiado. A continuación, se relacionan los principales métodos de tratamiento, su objetivo y su aplicación.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 17.
                span Métodos de tratamiento del agua, objetivos y aplicaciones
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Método
                      th.ajuste-border-tabla.texto-left Objetivo
                      th.texto-left Aplicación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sedimentación
                      td.ajuste-border-tabla.texto-left Eliminar partículas pesadas.
                      td.texto-left Agua superficial.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Filtración
                      td.ajuste-border-tabla.texto-left Retener sólidos suspendidos.
                      td.texto-left Antes de la desinfección.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cloración
                      td.ajuste-border-tabla.texto-left Eliminar microorganismos.
                      td.texto-left Agua de consumo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Luz ultravioleta
                      td.ajuste-border-tabla.texto-left Realizar desinfección física.
                      td.texto-left Sistemas cerrados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Peróxido de hidrógeno
                      td.ajuste-border-tabla.texto-left Realizar control microbiológico.
                      td.texto-left Redes de distribución.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acidificación
                      td.ajuste-border-tabla.texto-left Mejorar la calidad microbiológica.
                      td.texto-left Líneas de agua.
          p.mb-0 La aplicación de estos métodos debe integrarse con el monitoreo de la calidad del agua para determinar su eficacia y establecer los ajustes requeridos.
          Separador
          #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 7.3 Productos y dosificaciones
      .caja-3.mb-5.color-2(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p Los productos utilizados para el tratamiento del agua deben estar autorizados para uso pecuario y aplicarse siguiendo estrictamente las recomendaciones técnicas del fabricante. Entre los productos más utilizados se encuentran:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Hipoclorito de sodio.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Dióxido de cloro.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Peróxido de hidrógeno estabilizado.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Ácidos orgánicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Otros sanitizantes específicos para líneas de agua.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t7/img8.jpg', alt='' style="width: 600px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t7/img9.jpg', alt='' style="width: 500px").m-auto
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-2(data-aos="fade-left").mb-3
            p.mb-0 La preparación de soluciones requiere conocer el volumen de agua que se debe tratar, la concentración del producto y el tiempo de contacto recomendado. La dosificación incorrecta puede disminuir la eficacia del tratamiento o generar efectos negativos sobre el consumo de agua, la salud de las aves y la vida útil de los equipos.
          p.mb-0 A continuación, se relacionan algunos de los productos utilizados para el tratamiento del agua, junto con su función y las consideraciones indicadas en el contenido técnico.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 18.
                span Productos utilizados en el tratamiento del agua y sus funciones
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Producto
                      th.ajuste-border-tabla.texto-left Función
                      th.texto-left Consideraciones
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Hipoclorito de sodio
                      td.ajuste-border-tabla.texto-left Desinfección
                      td.texto-left Uso frecuente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Peróxido de hidrógeno
                      td.ajuste-border-tabla.texto-left Eliminación de biopelículas.
                      td.texto-left Alta eficacia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Dióxido de cloro
                      td.ajuste-border-tabla.texto-left Control microbiológico.
                      td.texto-left Amplio espectro.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ácidos orgánicos
                      td.ajuste-border-tabla.texto-left Acidificación
                      td.texto-left Mejora la calidad del agua.
          .caja-2.color-1.mb-5(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t7/img10.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-2_p
                p El uso de estos productos debe realizarse de acuerdo con las instrucciones específicas del fabricante y con las condiciones del sistema de abastecimiento. Durante la dosificación, se deben aplicar medidas que reduzcan errores y protejan al personal encargado de la preparación.
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-feather-alt
                    | #[b Leer la etiqueta:] evita errores.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-feather-alt
                    | #[b Utilizar recipientes graduados:] permite mayor precisión.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-feather-alt
                    | #[b No mezclar productos incompatibles:] evita reacciones químicas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-feather-alt
                    | #[b Preparar soluciones recientes:] conserva la eficacia.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-feather-alt
                    | #[b Utilizar EPP:] protege al trabajador.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-feather-alt
                    | #[b Registrar la dosificación:] garantiza la trazabilidad.
      p.mb-0 Estas medidas deben incorporarse a los procedimientos establecidos para el manejo seguro de los productos utilizados en el tratamiento del agua.
      Separador
      #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.4 Procedimientos de manejo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 El manejo adecuado del agua inicia con la #[b protección de la fuente de abastecimiento], evitando la contaminación por animales, residuos, agroquímicos o aguas residuales. Los tanques de almacenamiento deben permanecer cerrados, protegidos del ingreso de aves silvestres, roedores e insectos, y limpiarse y desinfectarse periódicamente.
          p.mb-0 Las tuberías deben inspeccionarse regularmente para detectar fugas, incrustaciones o formación de biopelículas. Los bebederos deben mantenerse limpios, funcionar correctamente y suministrar agua suficiente durante todo el ciclo productivo. El programa de manejo del agua debe incluir cronogramas de limpieza, desinfección, monitoreo, toma de muestras y mantenimiento preventivo. Toda actividad realizada debe registrarse para facilitar la trazabilidad y demostrar el cumplimiento del programa de bioseguridad. A continuación, se organizan las principales actividades del programa de manejo del agua y su frecuencia: 
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t7/img11.jpg', alt='' style="width: 500px").m-auto
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 19.
                span Productos utilizados en el tratamiento del agua y sus funciones
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Actividad
                      th.texto-left Frecuencia
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Limpieza de tanques
                      td.texto-left Según cronograma del programa sanitario.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lavado de líneas de agua
                      td.texto-left Entre lotes y cuando se requiera.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Limpieza de bebederos
                      td.texto-left Diaria
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comprobación de fugas
                      td.texto-left Diaria
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Medición del consumo
                      td.texto-left Diaria
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Análisis de laboratorio
                      td.texto-left Según programa sanitario y evaluación del riesgo.
          .caja-2.color-4.mb-5(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t7/img12.jpg', alt='' style="width: 500px").m-auto
              .col-xl.caja-2_p
                p El cumplimiento de estas frecuencias permite mantener un seguimiento continuo del sistema de abastecimiento y detectar oportunamente situaciones que puedan afectar la calidad del agua. La limpieza de los tanques debe desarrollarse mediante una secuencia organizada que permita retirar residuos y realizar adecuadamente la desinfección:
                ol.lista-ol--cuadro.mb-0
                  li
                    .lista-ol--cuadro__vineta
                      span A
                    | 
                    p.mb-0 Suspender el suministro de agua.
                  li 
                    .lista-ol--cuadro__vineta
                      span B
                    | 
                    p.mb-0 Vaciar completamente el tanque.
                  li 
                    .lista-ol--cuadro__vineta
                      span C
                    | 
                    p.mb-0 Retirar sedimentos y residuos.
                  li 
                    .lista-ol--cuadro__vineta
                      span D
                    | 
                    p.mb-0 Lavar con detergente autorizado.
                  li 
                    .lista-ol--cuadro__vineta
                      span E
                    | 
                    p.mb-0 Enjuagar completamente.
                  li 
                    .lista-ol--cuadro__vineta
                      span F
                    | 
                    p.mb-0 Aplicar desinfectante.
                  li 
                    .lista-ol--cuadro__vineta
                      span G
                    | 
                    p.mb-0 Respetar el tiempo de contacto.
                  li 
                    .lista-ol--cuadro__vineta
                      span H
                    | 
                    p.mb-0 Enjuagar, si el producto lo requiere, y llenar nuevamente.
                  li 
                    .lista-ol--cuadro__vineta
                      span I
                    | 
                    p.mb-0 Registrar la actividad.
      p.mb-5 El cumplimiento ordenado de estas etapas contribuye a prevenir la acumulación de contaminantes y a conservar la calidad del agua almacenada. Además del mantenimiento programado, algunos cambios pueden indicar posibles problemas relacionados con la calidad del agua.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t7/img13.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Disminución del consumo
                  p.mb-0.text-center Agua contaminada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Sedimentos en bebederos
                  p.mb-0.text-center Mala filtración.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mal olor
                  p.mb-0.text-center Contaminación microbiológica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Color amarillento
                  p.mb-0.text-center Hierro o materia orgánica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Biopelículas
                  p.mb-0.text-center Falta de limpieza de tuberías.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Baja productividad
                  p.mb-0.text-center Calidad deficiente del agua.
      p.mb-5 La identificación de estos signos debe conducir a la revisión del sistema y a la aplicación de las medidas establecidas en el programa sanitario.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img19.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones técnicas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3(data-aos="fade-right")
            p El manejo integral del agua requiere medidas preventivas, monitoreo y conservación permanente de registros. Para fortalecer estas actividades, se recomienda:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Proteger permanentemente las fuentes de abastecimiento contra cualquier fuente de contaminación.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Implementar un programa documentado de monitoreo de la calidad del agua.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Limpiar y desinfectar tanques, tuberías y bebederos de acuerdo con un cronograma establecido.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Utilizar únicamente productos autorizados para el tratamiento del agua y seguir las indicaciones del fabricante.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Capacitar al personal en la preparación de soluciones y el manejo seguro de productos químicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Realizar análisis microbiológicos y fisicoquímicos periódicos para determinar la calidad del agua.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Mantener registros de consumo, tratamientos, mantenimiento y resultados de laboratorio como parte de la trazabilidad del programa sanitario.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t7/img20.png', alt='' style="width: 300px").m-auto
      p.mb-0 Estas recomendaciones permiten integrar el control de la fuente, el tratamiento, el mantenimiento de las instalaciones y el seguimiento documental dentro de un mismo programa de manejo.
      Separador
      #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.5 Normatividad aplicable
      p.mb-5 El manejo y la calidad del agua deben articularse con las disposiciones relacionadas con el sector agropecuario, la protección del recurso hídrico, la Seguridad y Salud en el Trabajo y los requisitos sanitarios aplicables a las granjas avícolas. A continuación, se relacionan los referentes incluidos en el contenido fuente.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 20.
                span Normativa aplicable a la gestión y calidad del agua en la producción avícola
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Norma
                      th.texto-left Aplicación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1071 de 2015
                      td.texto-left Disposiciones del sector agropecuario.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1076 de 2015
                      td.texto-left Protección del recurso hídrico y gestión ambiental.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1072 de 2015
                      td.texto-left Seguridad y Salud en el Trabajo para el manejo de productos químicos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 3651 de 2014 y normas que la modifiquen o sustituyan
                      td.texto-left Requisitos para granjas avícolas bioseguras, incluyendo el suministro de agua segura.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lineamientos técnicos del ICA sobre buenas prácticas avícolas (BPA)
                      td.texto-left Calidad del agua, limpieza de sistemas de distribución y monitoreo sanitario.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución 2115 de 2007 (Ministerios de Salud y Ambiente)
                      td.texto-left Características, control y vigilancia de la calidad del agua para consumo humano; sirve como referencia técnica para la evaluación de la calidad del agua en sistemas pecuarios cuando corresponda.
          p.mb-5 La aplicación de estos referentes debe complementarse con los procedimientos internos, los resultados de los análisis y los registros establecidos dentro del programa sanitario de la explotación.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl
              .caja-1.color-2(data-aos="fade-right").mb-3
                p.mb-0 El agua representa el insumo de mayor consumo en la producción avícola y uno de los principales factores que influyen en la sanidad, el bienestar y el rendimiento de las aves. Un programa integral de manejo y calidad del agua debe incluir la protección de las fuentes, el tratamiento adecuado, la limpieza de tanques y líneas de distribución, el monitoreo de parámetros de calidad y el mantenimiento de registros.
              p.mb-0 La aplicación articulada de estas medidas fortalece la bioseguridad de la explotación y contribuye a la producción de alimentos inocuos, al cumplimiento de las #[b Buenas Prácticas Avícolas (BPA)] y de la normatividad sanitaria vigente.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t7/img21.jpg', alt='' style="width: 600px").m-auto

</template>

<script>
export default {
  name: 'Tema7',
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
