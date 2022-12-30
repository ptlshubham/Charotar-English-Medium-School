import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusComponent } from './campus/campus.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoreRoutes } from './more.routing';
import { SearchComponent } from './search/search.component';
import { EvalutionComponent } from './evalution/evalution.component';
import { NewsComponent } from './news/news.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MagazineComponent } from './magazine/magazine.component';



@NgModule({
  declarations: [
    CampusComponent,
    SearchComponent,
    EvalutionComponent,
    NewsComponent,
    SyllabusComponent,
    MagazineComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MoreRoutes),
    NgbModule,
    NgxPaginationModule
  ]
})
export class MoreModule { }
