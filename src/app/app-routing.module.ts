import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadosComponent } from './components/estados/estados.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component'; // Importa el componente DetalleComponent

const routes: Routes = [
  { path: '', redirectTo: '/estados', pathMatch: 'full' }, // Ruta por defecto
  { path: 'estados', component: EstadosComponent },
  { path: 'listado/:departamento', component: ListadoComponent }, // Ruta con parámetro de departamento
  // Rutas para cada departamento de Colombia
  { path: 'listado/Amazonas', component: ListadoComponent },
  { path: 'listado/Antioquia', component: ListadoComponent },
  { path: 'listado/Arauca', component: ListadoComponent },
  { path: 'listado/Atlantico', component: ListadoComponent },
  { path: 'listado/Bolivar', component: ListadoComponent },
  { path: 'listado/Boyaca', component: ListadoComponent },
  { path: 'listado/Caldas', component: ListadoComponent },
  { path: 'listado/Caqueta', component: ListadoComponent },
  { path: 'listado/Casanare', component: ListadoComponent },
  { path: 'listado/Cauca', component: ListadoComponent },
  { path: 'listado/Cesar', component: ListadoComponent },
  { path: 'listado/Choco', component: ListadoComponent },
  { path: 'listado/Cordoba', component: ListadoComponent },
  { path: 'listado/Cundinamarca', component: ListadoComponent },
  { path: 'listado/Guainia', component: ListadoComponent },
  { path: 'listado/Guaviare', component: ListadoComponent },
  { path: 'listado/Huila', component: ListadoComponent },
  { path: 'listado/LaGuajira', component: ListadoComponent },
  { path: 'listado/Magdalena', component: ListadoComponent },
  { path: 'listado/Meta', component: ListadoComponent },
  { path: 'listado/Narino', component: ListadoComponent },
  { path: 'listado/NorteDeSantander', component: ListadoComponent },
  { path: 'listado/Putumayo', component: ListadoComponent },
  { path: 'listado/Quindio', component: ListadoComponent },
  { path: 'listado/Risaralda', component: ListadoComponent },
  { path: 'listado/SanAndresYProvidencia', component: ListadoComponent },
  { path: 'listado/Santander', component: ListadoComponent },
  { path: 'listado/Sucre', component: ListadoComponent },
  { path: 'listado/Tolima', component: ListadoComponent },
  { path: 'listado/ValleDelCauca', component: ListadoComponent },
  { path: 'listado/Vaupes', component: ListadoComponent },
  { path: 'listado/Vichada', component: ListadoComponent },
  // Ruta para Venezuela
  { path: 'listado/Venezuela', component: ListadoComponent },
  // Ruta para el componente DetalleComponent
  { path: 'detalle/:nombre/:departamento/:estatura/:ciudad', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

