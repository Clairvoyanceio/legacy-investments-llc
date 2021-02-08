import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebCoreDataAccessModule } from '@nxpm-latest/web/core/data-access'
import { WebUiPageModule } from '@nxpm-latest/web/ui/page'
import { WebDashboardFeatureComponent } from './web-dashboard-feature.component'
import { WebUiSimpleCardGridModule } from '@nxpm-latest/web/ui/simple-card-grid'
import { WebUiButtonModule } from '@nxpm-latest/web/ui/button'

@NgModule({
  declarations: [WebDashboardFeatureComponent],
  imports: [
    CommonModule,
    WebCoreDataAccessModule,
    WebUiButtonModule,
    WebUiSimpleCardGridModule,
    WebUiPageModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebDashboardFeatureComponent }]),
  ],
})
export class WebDashboardFeatureModule {}
