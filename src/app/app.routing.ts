import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const appRoutes: Routes = [
    { path: '',   redirectTo: 'home/login', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
