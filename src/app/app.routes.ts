import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ViewMoreComponent } from './Components/view-more/view-more.component';
import { HeadComponent } from './Components/head/head.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:'head',
        component:HeadComponent,
        children:[
            {
                path:'view-more',
                component:ViewMoreComponent
            },{
                path:'Home-page',
                component:HomePageComponent
            }
        ]
    }
];
