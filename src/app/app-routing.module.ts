import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideogamesComponent} from "./videogames/videogames.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {EditComponent} from "./videogames/edit/edit.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'videogames', component: VideogamesComponent,children:[

      {path:'edit/:id',component:EditComponent},
    ]
  },
  {path:'edit/:id',component:EditComponent},
  {path:"add", component: AddComponent},

  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
