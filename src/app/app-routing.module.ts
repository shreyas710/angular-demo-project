import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: LoginComponent }, // default
  // OR
  // Redirect
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'reg', component: RegistrationComponent },
  {
    path: 'users', component: UserlistComponent, children: /* add child routes */[
      { path: 'userdetails/:id', component: UserdetailsComponent }
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // primary routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
