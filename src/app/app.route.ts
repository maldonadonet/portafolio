import { RouterModule, Routes } from '@angular/router';
// Paginas
import {
    AboutComponent,
    PortafolioComponent,
    ItemComponent
} from "./components/index.paginas";


const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
