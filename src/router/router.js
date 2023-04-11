//Importando librerías
import { createRouter, createWebHashHistory } from 'vue-router';


//Importando componentes
import InicioComponent from '..//components/InicioComponent.vue';
import ServiciosComponent from'..//components/ServiciosComponent.vue';
import ContactoComponent from '..//components/ContactoComponent.vue';
import InstrumentosComponent from '..//components/InstrumentosComponent.vue';



//Rutas (dirección en el navegador, componente que se ejecuta)
const routes = [
    {path:'/',component:InicioComponent},
    {path:'/servicios', name:"servicios",component:ServiciosComponent},
    {path:'/contacto', name:'contacto', component:ContactoComponent}, 
    {path:'/instrumentos', name: "instrumentos", component:InstrumentosComponent},
    

];


//Creando ruta
const router = createRouter({
    history: createWebHashHistory(),
    routes

});

//Exportando ruta
export default router;