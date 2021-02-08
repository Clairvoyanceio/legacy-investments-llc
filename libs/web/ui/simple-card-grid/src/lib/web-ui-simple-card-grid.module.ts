import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiSimpleCardGridComponent } from './web-ui-simple-card-grid.component'
import { WebUiSimpleCardComponent } from './web-ui-simple-card.component'

@NgModule({
  declarations: [WebUiSimpleCardGridComponent, WebUiSimpleCardComponent],
  exports: [WebUiSimpleCardGridComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class WebUiSimpleCardGridModule {}
