//Importando librerías
import { createRouter, createWebHashHistory } from 'vue-router';


//Importando componentes
import InicioComponent from '..//components/InicioComponent.vue';
import ServiciosComponent from'..//components/ServiciosComponent.vue';
import ContactoComponent from '..//components/ContactoComponent.vue';
import InstrumentosComponent from '..//components/InstrumentosComponent.vue';
import RegistroComponent from '..//components/RegistroComponent.vue';
import LoginComponent from '..//components/LoginComponent.vue';
import AdministradorProductosComponent from '..//components/AdministradorProductosComponent.vue';



//Rutas (dirección en el navegador, componente que se ejecuta)
const routes = [
    {path:'/',component:InicioComponent},
    {path:'/servicios', name:"servicios",component:ServiciosComponent},
    {path:'/contacto', name:'contacto', component:ContactoComponent}, 
    {path:'/instrumentos', name: "instrumentos", component:InstrumentosComponent},
    {path:'/registro', name: "registro", component:RegistroComponent},
    {path:'/login', name: "login", component:LoginComponent},
    {path:'/administrador', name: "administrador", component:AdministradorProductosComponent},
    

];


//Creando ruta
const router = createRouter({
    history: createWebHashHistory(),
    routes

});

//Exportando ruta
export default router;