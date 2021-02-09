import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiDashboardTable } from './web-ui-dashboard-table.component'

@NgModule({
  declarations: [WebUiDashboardTable],
  exports: [WebUiDashboardTable],
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class WebUiDashboardTableModule {}
