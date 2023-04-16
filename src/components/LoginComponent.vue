<template>
  <div class="container-fluid d-flex justify-content-center align-items-center vh-100" style="background-image: url('https://imgs.search.brave.com/RVEK0dFi62abHnXzV416D_RUq7Rs3n6EoP7lO34jhjE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9jLndh/bGxoZXJlLmNvbS9w/aG90b3MvY2UvMmMv/MjU2MHgxNjAwX3B4/X1N0dWRpb3MtNTM1/MjA3LmpwZyFk');">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-3">
          <img src="https://imgs.search.brave.com/bw9I425d8_M0_bg5Dt2HFsa8Z8Ky5XcyAdxusWr_jLI/rs:fit:1024:778:1/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2RydW0tcG5nL2Ry/dW0tc3ZnLWRydW1z/LWJhY2tncm91bmQt/c3ZnLWltYWdlLWlj/b24tc3ZnLXNpbGgt/MjQucG5n" class="img-fluid" alt="Imagen de ejemplo">
        </div>
        <div class="col-md-6">
          <form @submit.prevent="loginUser" class="form-signin">
            <h2 class="h3 mb-3 font-weight-normal">Iniciar sesión</h2>
            <label for="email" class="sr-only">Email:</label>
            <input v-model="email" type="email" id="email" class="form-control mb-3" placeholder="Email" required autofocus>
            <label for="password" class="sr-only">Contraseña:</label>
            <input v-model="password" type="password" id="password" class="form-control mb-3" placeholder="Contraseña" required>
            <button class="btn btn-lg btn-primary btn-block " type="submit">Iniciar sesión</button>
            <div><p class="mt-3 mb-0 text-white">¿No tienes una cuenta? <router-link to="/registro" class="text-blue">Regístrate</router-link></p></div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import firebase from '@/firebase'
  import auth from '@/firebase'

  export default {
    name: "LoginComponent",
    data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
  async loginUser() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      // Si el inicio de sesión es exitoso, redirecciona al usuario a la página del administrador
      this.$router.push('/administrador')
      alert('Iniciaste sesion')
    } catch (error) {
      // Si hay algún error, muestra un mensaje de error
      alert(error.message)
    }
  }
}
  }
  
  </script>
  
  <style>
  
  </style>