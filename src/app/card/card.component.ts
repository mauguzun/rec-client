import { Component, OnInit, Input } from '@angular/core';
import { ShortRecipe } from '../recipe.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input('inRecipe') recipe: ShortRecipe;

  constructor() {
    console.log(this.recipe)
  }

  ngOnInit() {
  }
  goto(id) {
    alert(id)
  }
}
