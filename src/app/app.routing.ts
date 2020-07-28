import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

/*Importar Componentes*/
import { NotesComponent } from './notes/notes.component';
import { AboutComponent } from './about/about.component';

/*Array de rutas*/
const appRoutes: Routes = [
                            /*This is main document*/
                            {path: '', component: NotesComponent, },
                            {path: 'about', component: AboutComponent,},
                            /*This is for 404 error */
                            {path: '**', component: NotesComponent}
                          ];

/*Exportar el modulo*/
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);