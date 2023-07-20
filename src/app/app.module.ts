import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'; 
import { JwtModule } from "@auth0/angular-jwt";
import { RestapiService } from './services/restapi.service';
import { NavsidebarComponent } from './navsidebar/navsidebar.component';
import { RowDetailsComponent } from './row-details/row-details.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';


import { SignatureVerificationDataComponent } from './signature-verification-data/signature-verification-data.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ViewSignatureOnlyComponent } from './view-signature-only/view-signature-only.component';

export function tokenGetter() {
  return localStorage.getItem("jwt_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavsidebarComponent,
    RowDetailsComponent,
    PdfViewerComponent,
    SignatureVerificationDataComponent,
    ViewSignatureOnlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
    // PdfViewerModule
    
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["login"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  
    NgxExtendedPdfViewerModule,
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
