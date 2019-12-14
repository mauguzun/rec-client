import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  main = "http://localhost/appstarter/public/";


  constructor(private http: HttpClient) { }


  getRecipe(id ) {
    return this.http.get(this.main + 'recipe' + '/' +id );
  }


  getPopular() {
    return this.http.get(this.main + 'recipe/popular');
  }

}
