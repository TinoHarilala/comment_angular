import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shader.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PannierComponent } from './components/pannier/pannier.component';
import { PannierService } from './services/pannier.services';
import { PannierItemComponent } from './components/pannier-item/pannier-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PannierComponent,
    PannierItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports : [
    HeaderComponent,
    PannierComponent
  ],
  providers : [
    PannierService
  ]
})
export class CoreModule { }
