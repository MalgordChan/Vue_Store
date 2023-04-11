<template>
    <div class="container pb-5">
        <div class="row">
            <div class="col">
                <h2 class="text-center pt-3">Contacto</h2>
            </div>

        </div>
    </div>
  
</template>

<script>
export default {
    name:'ContactoComponent',
    data(){
        return{
            nombre:"Nombre",
            mensaje:"Casi tienen Na",
        }
    },
    methods:{
        actulizarNombre(){
            this.nombre="Direccion"
        },
        redirigirInicio(){
            this.$router.push('/');
        },
        redirigirPagina(){
            this.$router.push({name:"pagina", params:{parametro:"Plumones"}});
        },
    },
   
}
</script>

<style>

</style>