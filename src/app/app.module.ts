import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule,routingmodules } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
;

@NgModule({
  declarations: [
    AppComponent,
    routingmodules,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
