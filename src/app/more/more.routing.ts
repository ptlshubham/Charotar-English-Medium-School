import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { EvalutionComponent } from './evalution/evalution.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
export const MoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'campus',
            component: CampusComponent
        },
        {
            path: 'search/:id',
            component: SearchComponent
        },
        {
            path: 'evalution',
            component: EvalutionComponent
        },
        {
            path: 'news',
            component: NewsComponent
        },
        {
            path: 'links/:id',
            component: SyllabusComponent
        },
        {
            path: 'magazine',
            component: MagazineComponent
        }
    ]
}];
