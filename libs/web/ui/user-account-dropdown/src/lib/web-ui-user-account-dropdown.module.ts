import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiUserAccountDropdownComponent } from './web-ui-user-account-dropdown.component'

@NgModule({
  declarations: [WebUiUserAccountDropdownComponent],
  imports: [CommonModule, RouterModule],
  exports: [WebUiUserAccountDropdownComponent],
})
export class WebUiUserAccountDropdownModule {}
