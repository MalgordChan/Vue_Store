//Importando librerías
import { createRouter, createWebHashHistory } from 'vue-router';


//Importando componentes
import InicioComponent from '..//components/InicioComponent.vue';
import QuienesSomosComponent from "..//components/QuienesSomosComponent"
import ContactoComponent from '..//components/ContactoComponent.vue';
import InstrumentosComponent from '..//components/InstrumentosComponent.vue';



//Rutas (dirección en el navegador, componente que se ejecuta)
const routes = [
    {path:'/',component:InicioComponent},
    {path:'/quienessomos', name:"quienessomos",component:QuienesSomosComponent},
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