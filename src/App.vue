<template>
  <div class="">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,

  }
}
</script>

<style>


@import './assets/css/bootstrap.min.css';
@import './assets/css/mi_estilos.css';

#navbarSupportedContent a:hover,
#navbarSopportedContent .active{
  color: white;
}

</style>
