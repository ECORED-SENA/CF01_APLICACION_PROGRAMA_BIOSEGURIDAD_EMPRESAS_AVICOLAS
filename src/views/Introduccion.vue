<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p La producción avícola requiere la implementación permanente de medidas sanitarias y preventivas que permitan proteger la salud de las aves, reducir los riesgos de contaminación y garantizar condiciones adecuadas durante el desarrollo de las actividades productivas. En este contexto, la bioseguridad constituye un componente fundamental para prevenir el ingreso, establecimiento y propagación de agentes patógenos que puedan afectar la productividad, el bienestar animal, la salud de los trabajadores y la inocuidad de los productos avícolas.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 La aplicación de un programa de bioseguridad implica integrar diferentes procedimientos relacionados con las Prácticas Operativas Estandarizadas Sanitarias (POES), las Buenas Prácticas Avícolas (BPA), la adecuación de la infraestructura, el control de ingreso, la limpieza y desinfección, el manejo del agua, los equipos e insumos, el control de plagas y vectores, así como la gestión de residuos y mortalidad. Estas acciones deben desarrollarse de manera organizada, sistemática y documentada para fortalecer la prevención sanitaria y la trazabilidad de las actividades realizadas en la explotación avícola.
          p.mb-0 A través de este componente formativo se abordarán los fundamentos técnicos y normativos necesarios para aplicar adecuadamente las medidas de bioseguridad en empresas avícolas, articulando los procedimientos sanitarios con la protección de los trabajadores, el bienestar animal, la inocuidad y la sostenibilidad de los sistemas productivos. De esta manera, se busca fortalecer las competencias requeridas para implementar condiciones bioseguras de acuerdo con los procedimientos establecidos y la normatividad vigente.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.jpg', alt='' style="width: 500px").m-auto
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
