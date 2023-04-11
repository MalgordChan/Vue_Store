<template>
  <div class="container">
    <div class="row">

      <h1>Instrumentos Musicales Karma</h1>
      <hr>

      <div>
        <label for="" class="m-2 fw-bolder text-uppercase"> Busqueda por: (Nombre o Categoria) </label>
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
          nombre: 'El mercader de libros',
          marca: 'PRH Grupo Editorial',
          categoria: 'Clasica',
          imagen: 'https://books.google.com.mx/books/publisher/content?id=lnCREAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72S-fBppJ61Xql6HhlH6NwsQp9h6f2Zntqe9HCoEJcgZASsOV6lYPwFRqRhGNLCWcaa2I4H1S6m-mAfyG7-nIl1WiND9ihaOuZ3gMIPGn5_6V8rWjvrXKSnh07EEBkDlMVabZp0',
        },
        {
          id: 2,
          nombre: 'El coleccionista de Libros',
          marca: 'Siruela',
          categoria: 'Fantasia',
          imagen: 'https://m.media-amazon.com/images/I/51FjoIAwzRL._SX330_BO1,204,203,200_.jpg',
        },
        {
          id: 3,
          nombre: 'Los cuatro libros',
          marca: 'Paidos',
          categoria: 'Cultura',
          imagen: 'https://m.media-amazon.com/images/I/51Jx8NRZ0HL._SX350_BO1,204,203,200_.jpg',
        },
        {
          id: 4,
          nombre: 'El mercader de libros',
          marca: 'PRH Grupo Editorial',
          categoria: 'Clasica',
          imagen: 'https://books.google.com.mx/books/publisher/content?id=lnCREAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72S-fBppJ61Xql6HhlH6NwsQp9h6f2Zntqe9HCoEJcgZASsOV6lYPwFRqRhGNLCWcaa2I4H1S6m-mAfyG7-nIl1WiND9ihaOuZ3gMIPGn5_6V8rWjvrXKSnh07EEBkDlMVabZp0',
        },
        {
          id: 5,
          nombre: 'El coleccionista de Libros ',
          marca: 'Siruela',
          categoria: 'Fantasia',
          imagen: 'https://m.media-amazon.com/images/I/51FjoIAwzRL._SX330_BO1,204,203,200_.jpg',
        },
        {
          id: 6,
          nombre: 'Los cuatro libros',
          marca: 'Paidos',
          categoria: 'Cultura',
          imagen: 'https://m.media-amazon.com/images/I/51Jx8NRZ0HL._SX350_BO1,204,203,200_.jpg',
        },
        {
          id: 7,
          nombre: 'El coleccionista de Libros',
          marca: 'Siruela',
          categoria: 'Fantasia',
          imagen: 'https://m.media-amazon.com/images/I/51FjoIAwzRL._SX330_BO1,204,203,200_.jpg',
        },
        {
          id: 8,
          nombre: 'Los cuatro libros',
          marca: 'Paidos',
          categoria: 'Cultura',
          imagen: 'https://m.media-amazon.com/images/I/51Jx8NRZ0HL._SX350_BO1,204,203,200_.jpg',
        }
      ]
    }
  }
}
</script>

<style></style>