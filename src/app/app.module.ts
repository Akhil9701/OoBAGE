import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProjectComponent} from './project/project.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectModule } from './project/project.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ProjectService } from './shared/services/project.service';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { LoaderComponent } from './loader/loader.component'
import { LoaderService } from './loader/loader.service';
// import { HttpService } from './shared/services/http.service';
// import { ModalModule } from 'ngb-modal';
// import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    LoginComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProjectModule,
    FormsModule,
    HttpClientModule,
    // ModalModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularMultiSelectModule
    // MatButtonModule
  ],
  exports:[
    LoaderComponent
  ],
  providers: [ProjectService, LoaderService,
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //     useClass: HttpService,
  //     multi: true,
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
