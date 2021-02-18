import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { CdkTableModule } from '@angular/cdk/table'
import { WebUiTableComponent } from './web-ui-table.component'

@NgModule({
  declarations: [WebUiTableComponent],
  exports: [WebUiTableComponent],
  imports: [
    CommonModule,
    CdkTableModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class WebUiTableModule {}
