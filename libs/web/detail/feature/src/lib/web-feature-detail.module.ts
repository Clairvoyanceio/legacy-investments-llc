import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebDetailFeatureComponent } from './web-feature-detail.component'
import { WebUiPageModule } from '@nxpm-latest/web/ui/page'
import { WebUiStatsSimpleModule } from '@nxpm-latest/web/ui/stats-simple'
import { WebUiDashboardTableModule } from '@nxpm-latest/web/ui/dashboard-table'
import { WebUiContainerModule } from '@nxpm-latest/web/ui/container'

@NgModule({
  declarations: [WebDetailFeatureComponent],
  exports: [WebDetailFeatureComponent],
  imports: [
    CommonModule,
    WebUiPageModule,
    WebUiDashboardTableModule,
    WebUiContainerModule,
    WebUiStatsSimpleModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebDetailFeatureComponent }]),
  ],
})
export class WebFeatureDetailModule {}
