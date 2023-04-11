<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-light navbar-default ">
        <div class="container-fluid">
            <img src="../assets/imagenes/logo.png.png" width="40" height="40" alt="...">
            <a class="navbar-brand" href="#">Karma Instruments</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" aria-current="page" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/servicios">Servicios</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/instrumentos">Productos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contacto">Contacto</router-link>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'MenuComponent',
    

}
</script>

<style>

</style>