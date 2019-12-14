import { Component } from '@angular/core';
import { Recipe } from './recipe.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  recipe :Recipe = null;
  title = 'recipe';


  load(event:Recipe ) {
   this.recipe  = event;
   this.title = this.recipe.Name;
  }
}


