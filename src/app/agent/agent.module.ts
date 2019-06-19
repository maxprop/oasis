import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource/resource.component';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
    FormioResource,
    FormioResourceConfig,
    FormioResourceService,
    FormioResourceCreateComponent,
    FormioResourceEditComponent,
    FormioResourceDeleteComponent,
} from 'angular-formio/resource';
import { IndexComponent } from './index/index.component';
import { FormioGrid } from 'angular-formio/grid';
import { ViewComponent } from './view/view.component';

@NgModule({
    imports: [
        CommonModule,
        FormioModule,
        FormioGrid,
        FormioResource,
        RouterModule.forChild([
            {
                path: '',
                component: IndexComponent
            },
            {
                path: 'new',
                component: FormioResourceCreateComponent
            },
            {
                path: ':id',
                component: ResourceComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'view',
                        pathMatch: 'full'
                    },
                    {
                        path: 'view',
                        component: ViewComponent
                    },
                    {
                        path: 'edit',
                        component: FormioResourceEditComponent
                    },
                    {
                        path: 'delete',
                        component: FormioResourceDeleteComponent
                    }
                   
        ]
    },
        ])
    ],
    declarations: [ResourceComponent, IndexComponent, ViewComponent],
    providers: [
        FormioResourceService,
        {
            provide: FormioResourceConfig,
            useValue: {
                name: 'agent',
                form: 'agent'
            }
        }
    ]
})
export class AgentModule { }