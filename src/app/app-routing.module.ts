import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavsidebarComponent } from './navsidebar/navsidebar.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { RowDetailsComponent } from './row-details/row-details.component';
import { SignatureVerificationDataComponent } from './signature-verification-data/signature-verification-data.component';
import { ViewSignatureOnlyComponent } from './view-signature-only/view-signature-only.component';

const routes: Routes = [
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"row/:id", component: RowDetailsComponent},
  {path: "pdf-viewer", component: PdfViewerComponent },
  {path:"signature-view/:id", component:ViewSignatureOnlyComponent},
  {path: "navsidebar", component:NavsidebarComponent,
    children:[
      {path:"home", component:HomeComponent},
      {path:"signature-verification-data", component:SignatureVerificationDataComponent}
      
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
