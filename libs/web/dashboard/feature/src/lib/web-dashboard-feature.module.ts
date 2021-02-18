import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebCoreDataAccessModule } from '@nxpm-latest/web/core/data-access'
import { WebUiPageModule } from '@nxpm-latest/web/ui/page'
import { WebDashboardFeatureComponent } from './web-dashboard-feature.component'
import { WebUiSimpleCardGridModule } from '@nxpm-latest/web/ui/simple-card-grid'
import { WebUiButtonModule } from '@nxpm-latest/web/ui/button'
import { WebUiDashboardTableModule } from '@nxpm-latest/web/ui/dashboard-table'
import { WebUiContainerModule } from '@nxpm-latest/web/ui/container'
import { WebUiStatsSimpleModule } from '@nxpm-latest/web/ui/stats-simple'

@NgModule({
  declarations: [WebDashboardFeatureComponent],
  imports: [
    CommonModule,
    WebCoreDataAccessModule,
    WebUiStatsSimpleModule,
    WebUiButtonModule,
    WebUiContainerModule,
    WebUiSimpleCardGridModule,
    WebUiDashboardTableModule,
    WebUiPageModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebDashboardFeatureComponent }]),
  ],
})
export class WebDashboardFeatureModule {}
