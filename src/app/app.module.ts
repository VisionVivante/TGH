import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './home/slider/slider.component';
import { PropertyListingAtHomeComponent } from './home/property-listing-at-home/property-listing-at-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAngularModule } from './_modules/custom-angular.module';
import { SearchByCatComponent } from './home/search-by-cat/search-by-cat.component';
import { WhyPeopleChooseComponent } from './home/why-people-choose/why-people-choose.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    SliderComponent,
    PropertyListingAtHomeComponent,
    SearchByCatComponent,
    WhyPeopleChooseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CustomAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
