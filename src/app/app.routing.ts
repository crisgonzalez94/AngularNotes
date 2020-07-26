import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router'

/*Importar Componentes*/
import { NotesComponent } from './notes/notes.component';

/*Array de rutas*/
const appRoutes: Routes = [
                            /*Este es el componente principal*/
                            {path: '', component: NotesComponent,},
                            /*Esta es la ruta 404 y siempre debe estar al final de este array*/
                            {path: '**', component: NotesComponent}
                          ];

/*Exportar el modulo*/
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);