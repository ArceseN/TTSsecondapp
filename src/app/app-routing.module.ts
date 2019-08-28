import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycomponentComponent} from './mycomponent/mycomponent.component';
import { RedComponent} from './red/red.component';


const routes: Routes = [
  {path: 'poodles', component: MycomponentComponent},
  {path: 'red', component: RedComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
