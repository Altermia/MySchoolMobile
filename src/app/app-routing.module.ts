import { NgModule  						} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard 						} from './shared/auth-guard.service';

import { LoginPage						} from './login/login';
import { HomePage 						} from './home/home';
import { StudentsPage					} from './students/students';
const appRoutes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'students',
    component: StudentsPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }

