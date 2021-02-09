import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiDashboardTable } from './web-ui-dashboard-table.component'
import { WebUiMenuButtonModule } from '@nxpm-latest/web/ui/menu-button'

@NgModule({
  declarations: [WebUiDashboardTable],
  exports: [WebUiDashboardTable],
  imports: [
    CommonModule,
    WebUiMenuButtonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class WebUiDashboardTableModule {}
