<template>
   <div class="container">
    <div class="row">
      <h2 class="text-center mt-4 text-primary">Seleccion Instrumental: Productos</h2>
      <div class="container mt-2 mb-2 justify-center align-center">
      <div class="row">
        <div class="col-md-12 col-xl-12">
          
          <img
              src="../assets/imagenes/musica.png"
              class="card-img-top"
              height="200"
              width="150"
              alt="..."
            />
        </div>
      </div>
    </div>

      <div>
        <label for="" class="m-2 fw-bolder text-uppercase"> Busqueda:</label>
        <input type="text" class="mb-3 fw-bold text-bg-information text-center" v-model="search">
      </div>
        <InstrumentoComponent v-for="instrumento in instrumento" :key="instrumento.id" :instrumento="instrumento" :search=search></InstrumentoComponent> <!--Actualizar props en LibroComponent-->
      <hr>

    </div>
  </div>
</template>

<script>
import InstrumentoComponent from "@/components/InstrumentoComponent.vue";

export default {
  name: "InstrumentosComponent",
  
  components: {
    InstrumentoComponent
  },
  data() {
    return {
      search: "",
      instrumento: [
        {
          id: 1,
          nombre: 'Guitarra Electronica F310',
          marca: 'Yamaha',
          categoria: 'Guitarra Electrica',
          imagen: 'https://c0.klipartz.com/pngpicture/769/429/gratis-png-guitarra-guitarra-en-blanco-y-negro-guitarra-electrica-en-blanco-y-negro-ilustracion-de-guitarra-electrica-thumbnail.png',
        },
        {
          id: 2,
          nombre: 'Guitarra Elecrica Roja y negra',
          marca: 'Sirux',
          categoria: 'Guitarra Electrica',
          imagen: 'https://c0.klipartz.com/pngpicture/248/58/gratis-png-guitarra-electrica-roja-y-negra-guitarra-electrica-guitarra-baja-guitarra-thumbnail.png',
        },
        {
          id: 3,
          nombre: 'Guitarra clasica L200',
          marca: 'Paidos',
          categoria: 'Guitarra Clasica',
          imagen: 'https://c0.klipartz.com/pngpicture/268/25/gratis-png-guitarra-guitarra-thumbnail.png',
        },
        {
          id: 4,
          nombre: 'Guitarra Bajo Electrico Negro',
          marca: 'PRH',
          categoria: 'Guitarra Bajo',
          imagen: 'https://c0.klipartz.com/pngpicture/761/555/gratis-png-bajo-electrico-negro-guitarra-guitarra-electrica-negra-thumbnail.png',
        },
        {
          id: 5,
          nombre: 'Guitarra Electrica Bajo roja con negro  ',
          marca: 'Thumbnail',
          categoria: 'Guitarra Bajo',
          imagen: 'https://c0.klipartz.com/pngpicture/432/604/gratis-png-esp-ltd-ec-1000-bass-guitar-esp-guitarras-guitarra-electrica-bajo-thumbnail.png',
        },
        {
          id: 6,
          nombre: 'Guitarra Electrica Blanco con Naranja',
          marca: 'Thumbnail',
          categoria: 'Guitarra Electrica',
          imagen: 'https://c0.klipartz.com/pngpicture/454/436/gratis-png-guitarra-electrica-naranja-ilustracion-guitarra-guitarra-thumbnail.png',
        },
        {
          id: 7,
          nombre: 'Violon Vintage Clasico',
          marca: 'Cello',
          categoria: 'Violin Clasico',
          imagen: 'https://c0.klipartz.com/pngpicture/697/698/gratis-png-violin-marron-musica-en-especie-violin-cello-thumbnail.png',
        },
        {
          id: 8,
          nombre: 'Violin Marron 4 cuerdas ',
          marca: 'Thumbnail',
          categoria: 'Violin Clasico',
          imagen: 'https://c0.klipartz.com/pngpicture/464/803/gratis-png-ilustracion-de-violin-marron-instrumento-musical-instrumento-de-cuerda-de-violin-violin-thumbnail.png',
        }
      ]
    }
  }
}
</script>

<style></style>