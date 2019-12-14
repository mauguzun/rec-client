import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatGridListModule, MatPaginatorModule,
  MatCheckboxModule, MatSidenavModule, MatIconModule,
  MatCardModule, MatToolbarModule, MatSelectModule,
  MatSnackBarModule, MatTableModule, MatFormFieldModule,
  MatInputModule, MatSortModule,MatChipsModule,
  MatTabsModule,MatExpansionModule, MatTooltipModule,MatMenuModule
} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { LoaderComponent } from './loader/loader.component';
import { GoolgeComponent } from './goolge/goolge.component';
import { LayotComponent } from './layot/layot.component';
import { TimePipe } from './time.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';








@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    MenuComponent,
    LoaderComponent,
    GoolgeComponent,
    LayotComponent,
    TimePipe,
    SafeHtmlPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,MatChipsModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    NgxChartsModule,
    MatTableModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTooltipModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
