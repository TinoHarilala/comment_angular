import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'social-media' , loadChildren : ()=> import('./social-media/social-media.module').then( m => m.SocialMediaModule) },
  { path : 'shop', loadChildren : ()=> import('./shop/shop.module').then( m=> m.ShopModule) },
  { path : 'complex-form', loadChildren : ()=>import('./complex-form/complex-form.module').then(m=>m.ComplexFormModule)},
  { path : '**', redirectTo :  'shop' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
