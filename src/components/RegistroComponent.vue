<template>
    <div class="container-fluid d-flex justify-content-center align-items-center vh-100" style="background-image: url('https://imgs.search.brave.com/RVEK0dFi62abHnXzV416D_RUq7Rs3n6EoP7lO34jhjE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9jLndh/bGxoZXJlLmNvbS9w/aG90b3MvY2UvMmMv/MjU2MHgxNjAwX3B4/X1N0dWRpb3MtNTM1/MjA3LmpwZyFk');">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center align-items-center">
        <div class="form-signin text-center">
          <form @submit.prevent="registerUser">
          <h2 class="h3 mb-3 font-weight-normal">Regístrate</h2>
          <label for="name" class="sr-only">Nombre completo:</label>
          <input v-model="name" type="text" id="name" class="form-control mb-3" placeholder="Nombre completo" required autofocus>
          <label for="email" class="sr-only">Email:</label>
          <input v-model="email" type="email" id="email" class="form-control mb-3" placeholder="Email" required>
          <label for="password" class="sr-only">Contraseña:</label>
          <input v-model="password" type="password" id="password" class="form-control mb-3" placeholder="Contraseña" equired pattern=".{6,}" title="La contraseña debe tener al menos 6 caracteres" required>
          <button class="btn btn-lg btn-primary btn-block align-items-center" type="submit">Registrarse</button>
          <p class="mt-3 mb-0 text-white">¿Ya tienes una cuenta? <router-link to="/login" class="text-blue">Inicia sesión</router-link></p>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import { auth } from "@/firebase";

  export default {
    

  setup() {
    const email = ref("");
    const password = ref("");

    const registerUser = async () => {
      try {
        // Crear la cuenta de usuario utilizando el servicio de autenticación de Firebase
        const usuarioCreado = await auth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        console.log("Usuario creado:", usuarioCreado);
        alert('Usuario registrado con éxito!')
      } catch (error) {
        console.error(error);
        alert('Ocurrio un error :/!')
      }
    };

    return { email, password, registerUser };
  }
};
      /*await db.collection('users').doc(result.user.uid).set({
        email: this.email,
        password: this.password,
      })*/
    
       // aquicódigo para enviar los datos del formulario a un servidor o almacenarlos en una base de datos
       /*console.log({
        name: this.name,
        email: this.email,
        password: this.password,
      }); */

    
  
  
  
  </script>
  
  <style>
.form-signin {
  background-color: #222;
  padding: 15px;
  border-radius: 10px;
}
.form-signin h2 {
  color: #fff;
  margin-bottom: 10px;
}
.form-signin label {
  color: #fff;
}
.form-signin input[type="text"],
.form-signin input[type="email"],
.form-signin input[type="password"] {
  margin-bottom: 10px;
}
.form-signin button[type="submit"] {
  margin-top: 15px;
}
</style>