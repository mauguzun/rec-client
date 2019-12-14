import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.interface';
import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { id } from '@swimlane/ngx-charts/release/utils';
import { isObject } from 'util';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { SecurityContext } from '@angular/compiler/src/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {


  rec: Recipe = null;
  popular: Recipe[] = [];
  constructor(public recipe: RecipeService, private active: ActivatedRoute,private meta: Meta,
    private titleService: Title) { }

  ngOnInit() {

    this.active.params.subscribe(params => {

      this.rec = null;
      this.recipe.getRecipe(params.id).subscribe((data: Recipe) => {
      this.rec = data;
      this.setMeta();
    }
      
      );
      this.recipe.getPopular().subscribe((data: any[]) => this.popular = data);


    })


  }
  setMeta(){
    
    this.meta.addTag({ name: 'title', content: this.rec.Name });
    this.meta.addTag({ name: 'description', content: this.rec.Name });
    this.meta.addTag({ name: 'keyword', content: this.rec.Name });
    this.titleService.setTitle( this.rec.Name  );
  }
}
