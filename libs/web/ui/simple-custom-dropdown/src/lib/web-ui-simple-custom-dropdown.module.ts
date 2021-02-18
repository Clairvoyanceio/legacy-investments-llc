import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebUiSimpleCustomDropdownComponent } from './web-ui-simple-custom-dropdown.component'

@NgModule({
  declarations: [WebUiSimpleCustomDropdownComponent],
  exports: [WebUiSimpleCustomDropdownComponent],
  imports: [CommonModule],
})
export class WebUiSimpleCustomDropdownModule {}
