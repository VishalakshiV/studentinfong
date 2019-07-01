import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'student'},
    {path: 'student', component: StudentListComponent, children: [
            {path: ':id', component: StudentDetailsComponent},
            {path: 'summary', component: SummaryComponent}
        ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
