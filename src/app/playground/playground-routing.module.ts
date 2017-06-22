import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlaygroundComponent} from './playground.component';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './one/three/three.component';

const routes: Routes = [
    {path:'', 
    component:PlaygroundComponent,
    children: [
        {
            path:'one',
            component: OneComponent, 
            children:[{
                path:'three',
                component: ThreeComponent,
            }]
        },
        {
            path:'two',
            component: TwoComponent,
        }

    ]
},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PlaygroundRoutingModule{}