<template>
  <div id="AdministradorProductosConponent" class="container">
    <div class="page-header">
      <h1>Administrador Productos</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Lista de Instrumentos</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Categoria</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="instrumento in instrumento"
              :key="instrumento.id"
              :instrumento="instrumento"
            >
              <td>
                {{ instrumento.nombre }}
              </td>
              <td>
                {{ instrumento.marca }}
              </td>
              <td>
                {{ instrumento.categoria }}
              </td>
              <td>
                {{ instrumento.imagen }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
<script>
import firebase from "@/firebase";
import auth from "@/firebase";


export default {
  name: "AdministradorProductosComponent",
 
};
</script>
  
<style>
</style>