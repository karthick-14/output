import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlComponent } from './access-control/access-control.component'

const routes: Routes = [
  {
    path: '',
    component: AccessControlComponent,
    data: {
      title: "Access Control"
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
