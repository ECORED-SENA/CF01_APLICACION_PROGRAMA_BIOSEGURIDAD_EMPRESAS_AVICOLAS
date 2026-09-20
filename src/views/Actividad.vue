<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aplicación del programa de bioseguridad en empresas avícolas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la bioseguridad avícola, los POES, las BPA, la infraestructura, los procedimientos sanitarios y el control de riesgos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la bioseguridad en una explotación avícola?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prevenir el ingreso y propagación de agentes patógenos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar el ingreso y circulación de personal externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Favorecer el traslado y mezcla continua de las aves.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar el uso y almacenamiento de productos veterinarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad establece requisitos para certificar granjas avícolas bioseguras en Colombia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ministerio encargado de las actividades comerciales nacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Instituto Colombiano Agropecuario encargado del control sanitario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Departamento encargado de las estadísticas productivas nacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Servicio encargado de la formación profesional agropecuaria nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué son las Prácticas Operativas Estandarizadas Sanitarias (POES)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Normas comerciales para distribuir los productos avícolas terminados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Programas financieros para controlar los costos productivos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Documentos técnicos para estandarizar los procedimientos sanitarios establecidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Planes administrativos para seleccionar los proveedores comerciales externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el alcance principal de las Buenas Prácticas Avícolas (BPA)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solamente los procesos diarios de limpieza y desinfección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Únicamente los procedimientos diarios de alimentación y vacunación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente las actividades diarias realizadas por los operarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Todo el sistema productivo mediante requisitos técnicos integrales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué principio busca evitar el ingreso de agentes patógenos antes de causar enfermedad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prevención mediante medidas aplicadas antes del ingreso patógeno.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Contención mediante acciones aplicadas después del proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Documentación mediante registros aplicados durante las actividades sanitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Producción mediante controles aplicados durante el manejo alimentario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué principio establece barreras para controlar el ingreso a la explotación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contención mediante aislamiento interno de los lotes afectados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Exclusión mediante barreras físicas y administrativas de ingreso controlado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Trazabilidad mediante registros sanitarios de las actividades realizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Capacitación mediante formación periódica del personal operativo responsable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué busca el principio de contención dentro de una empresa avícola?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar el ingreso controlado de visitantes y vehículos externos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar el movimiento interno de trabajadores entre diferentes galpones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Impedir la propagación de enfermedades hacia otras áreas productivas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Permitir la mezcla frecuente de aves procedentes de distintos lotes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes acciones corresponde al protocolo de ingreso de personas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ingreso inmediato sin registrar antecedentes sanitarios del visitante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso permanente del mismo calzado dentro y fuera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acceso libre a diferentes galpones durante cada visita.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambio de ropa y calzado antes del ingreso autorizado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Con qué frecuencia debe realizarse el manejo de mortalidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diariamente según los procedimientos establecidos por la empresa avícola.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Semanalmente según los procedimientos establecidos por la empresa avícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mensualmente según los procedimientos establecidos por la empresa avícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Anualmente según los procedimientos establecidos por la empresa avícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuándo debe realizarse la desinfección de los galpones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Durante cada ingreso de visitantes a la explotación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre lotes antes de recibir nuevas aves productivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Después de cada registro diligenciado por el personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Durante cada revisión administrativa de documentos sanitarios internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué característica deben tener los pisos de las instalaciones avícolas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porosos y absorbentes para conservar la humedad ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Rugosos y permeables para almacenar los líquidos residuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Impermeables y lavables para facilitar los procesos sanitarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Blandos y absorbentes para conservar los residuos orgánicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué función cumplen los drenajes en las instalaciones avícolas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conservar eficientemente las aguas dentro de las áreas productivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Distribuir eficientemente las aguas hacia los equipos de alimentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Almacenar eficientemente las aguas debajo de las áreas sanitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evacuar eficientemente las aguas generadas durante las actividades sanitarias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Para qué sirve la delimitación y señalización de las áreas de una granja?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar desplazamientos y reducir los riesgos de contaminación cruzada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Facilitar desplazamientos y aumentar los movimientos entre áreas productivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar restricciones y permitir el ingreso hacia zonas sanitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ampliar recorridos y aumentar la circulación de vehículos internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué mecanismo permite verificar el cumplimiento de los POES y las BPA?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El aumento de visitantes dentro de las instalaciones productivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La reducción de documentos utilizados durante las actividades sanitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eliminación de controles aplicados durante los procesos productivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las inspecciones, auditorías y revisiones de los registros sanitarios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿En qué consiste el sistema Todo Dentro–Todo Afuera?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener diferentes edades de aves compartiendo el mismo galpón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Alojar aves de igual edad y retirarlas completamente juntas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Trasladar aves constantemente entre diferentes galpones durante el ciclo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ingresar nuevos lotes antes de retirar completamente los anteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la finalidad de los registros dentro del programa de bioseguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar las actividades sanitarias mediante documentos administrativos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar las inspecciones sanitarias mediante informes administrativos periódicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar trazabilidad y evidenciar el cumplimiento de procedimientos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir las responsabilidades mediante formatos administrativos de uso opcional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué beneficio sanitario genera la implementación conjunta de POES y BPA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducción de enfermedades mediante procedimientos sanitarios correctamente estandarizados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incremento de enfermedades mediante procedimientos sanitarios parcialmente estandarizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Propagación de enfermedades mediante procedimientos sanitarios incorrectamente aplicados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Persistencia de enfermedades mediante procedimientos sanitarios escasamente documentados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué debe considerarse para seleccionar el sitio de una granja avícola?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente la cercanía respecto de los centros comerciales urbanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Clima, agua, suelo, accesos, topografía y riesgos epidemiológicos regionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solamente la disponibilidad inmediata de trabajadores y vehículos particulares.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente la distancia existente respecto de los mercados municipales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la finalidad de una barrera sanitaria en una explotación avícola?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar el traslado de contaminantes entre diferentes zonas productivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir el ingreso de agentes externos hacia los galpones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Impedir el ingreso de agentes contaminantes mediante medidas establecidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Aumentar el contacto de visitantes con las diferentes áreas sanitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué resultado favorece una adecuada gestión documental del programa de bioseguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación progresiva de controles y responsabilidades sanitarias internas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La reducción permanente del seguimiento y las inspecciones sanitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La sustitución completa de procedimientos por registros administrativos internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El fortalecimiento de la trazabilidad y del mejoramiento sanitario continuo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
