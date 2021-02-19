import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebDetailFeatureComponent } from './web-feature-detail.component'
import { WebUiPageModule } from '@nxpm-latest/web/ui/page'
import { WebUiStatsSimpleModule } from '@nxpm-latest/web/ui/stats-simple'
import { WebUiDashboardTableModule } from '@nxpm-latest/web/ui/dashboard-table'
import { WebUiContainerModule } from '@nxpm-latest/web/ui/container'
import { WebUiTabBarWithUnderlineModule } from '@nxpm-latest/web/ui/tab-bar-with-underline'
import { WebUiSimpleCustomDropdownModule } from '@nxpm-latest/web/ui/simple-custom-dropdown'

import { WebOverviewTabFeatureComponent } from './components/web-feature-overview-tab.component'
import { WebDistributionsTabFeatureComponent } from './components/web-feature-distributions-tab.component'
import { WebPerformanceTabFeatureComponent } from './components/web-feature-performance-tab.component'
import { AgGridModule } from 'ag-grid-angular'

@NgModule({
  declarations: [
    WebDetailFeatureComponent,
    WebOverviewTabFeatureComponent,
    WebPerformanceTabFeatureComponent,
    WebDistributionsTabFeatureComponent,
  ],
  exports: [WebDetailFeatureComponent],
  imports: [
    CommonModule,
    WebUiPageModule,
    WebUiDashboardTableModule,
    WebUiTabBarWithUnderlineModule,
    WebUiSimpleCustomDropdownModule,
    WebUiContainerModule,
    WebUiStatsSimpleModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild([
      {
        path: '',
        component: WebDetailFeatureComponent,
        children: [
          {
            path: 'overview',
            component: WebOverviewTabFeatureComponent,
          },
          {
            path: 'performance',
            component: WebPerformanceTabFeatureComponent,
          },
          {
            path: 'distributions',
            component: WebDistributionsTabFeatureComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'overview',
          },
        ],
      },
    ]),
  ],
})
export class WebFeatureDetailModule {}
