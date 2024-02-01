import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

export const routes: Routes = [
    {
        path: 'first-component',
        component: FirstComponent,
        title: 'First Component',
        children: [{
            path: 'child-a',
            component: ChildAComponent,
            title: 'child-a'
        },
        {
            path: 'child-b',
            component: ChildBComponent,
            title: 'child-b'
        }]
    },
    {
        path: 'second-component'
        , component: SecondComponent,
        title: 'Second Component'
    },
    { path: '', redirectTo: 'first-component', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

// const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
