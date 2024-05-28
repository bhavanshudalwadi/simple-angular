import { Routes } from '@angular/router';
import { CalcComponent } from './components/calc/calc.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "calc",
        component: CalcComponent
    },
    {
        path: "user-registration",
        component: UserRegistrationComponent
    },
];
