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
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/registro">Registro</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        
                        <button @click="logout" class="btn btn-outline-dark btn-md">Cerrar sesión</button>
                    </li>

                    
                </ul>
                
            </div>
        </div>
    </nav>
  </header>
</template>

<script>
import firebase from '@/firebase'
export default {
    
    name: 'MenuComponent',
    
    

  data() {
    return {
      currentUser: null
    }
  },
  created() {
    // Escuchar cambios en el estado de autenticación del usuario
    firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user
    })
  },
  methods: {
    async logout() {
      try {
        await firebase.auth().signOut()
        // Si el cierre de sesión es exitoso, redirecciona al usuario a la página de inicio de sesión
        this.$router.push('/login')
        alert('Cerraste sesión')
      } catch (error) {
        // Si hay algún error, muestra un mensaje de error
        alert(error.message)
      }
    }
  }
}
</script>

<style>
.btn-outline-dark {
  color: #000000;
  border-color: #000000;
}
.btn-outline-dark:hover {
  color: #ffffff;
  background-color: #000000;
  border-color: #000000;
}
</style>