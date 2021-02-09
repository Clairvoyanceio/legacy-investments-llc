import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiSimpleCardGridComponent } from './web-ui-simple-card-grid.component'
import { WebUiSimpleCardComponent } from './web-ui-simple-card.component'
import { WebUiMenuButtonModule } from '@nxpm-latest/web/ui/menu-button'
@NgModule({
  declarations: [WebUiSimpleCardGridComponent, WebUiSimpleCardComponent],
  exports: [WebUiSimpleCardGridComponent],
  imports: [
    CommonModule,
    WebUiMenuButtonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class WebUiSimpleCardGridModule {}
