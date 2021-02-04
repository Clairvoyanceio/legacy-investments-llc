import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageComponent } from './web-ui-page.component'
import { WebUiPageHeaderModule } from '@nxpm-latest/web/ui/page-header'

@NgModule({
  declarations: [WebUiPageComponent],
  exports: [WebUiPageComponent],
  imports: [CommonModule, RouterModule, WebUiPageHeaderModule],
})
export class WebUiPageModule {}
