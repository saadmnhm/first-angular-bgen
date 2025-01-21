import { Routes } from '@angular/router';
import { TestCliniqueComponent } from './test-clinique/test-clinique.component';
import { HomeComponent } from './home/home.component';
import { TestHereditairesComponent } from './test-hereditaires/test-hereditaires.component';
import { CommandComponent } from './command/command.component';
import { EndometreComponent } from './endometre/endometre.component';
import { PoumonComponent } from './poumon/poumon.component';

export const routes: Routes = [
    {path: '' , redirectTo:'home', pathMatch: 'full'},
    { path: 'home' , component: HomeComponent},
    { path: 'test_clinique' , component: TestCliniqueComponent},
    { path: 'test_hereditaires' , component: TestHereditairesComponent},
    { path: 'command' , component: CommandComponent},
    { path: 'endometre' , component: EndometreComponent},
    { path: 'poumon' , component: PoumonComponent}

];
