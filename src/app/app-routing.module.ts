import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { LayotComponent } from './layot/layot.component';


const routes: Routes = [
  {
    path: '', component: LayotComponent, children: [
    
      { path: '', component: MainComponent },
      { path: ':id', component: MainComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
