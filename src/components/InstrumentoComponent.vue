<template>
  <!-- v-if presenta los card al principio acomodados de izq a derecha -->
  <div v-if="(instrumento.nombre.toLowerCase()).includes(search.toLowerCase()) || (instrumento.categoria.toLowerCase()).includes(search.toLowerCase()) || search === '' " class="col-12  col-md-6 col-lg-3"> 
      <div class="card" style="width: 18rem;">
          <img :src="instrumento.imagen" class="card-img-top" style="width: 18rem;" alt="...">
          <div class="card-body">
              <h5 class="card-title">Nombre: {{ instrumento.nombre }}</h5>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Marca: {{ instrumento.marca }}</li>
              <li class="list-group-item">Categoria: {{ instrumento.categoria }}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "InstrumentoComponent",
  props: [
      'instrumento',
      "search"

  ]
}
</script>

<style></style>