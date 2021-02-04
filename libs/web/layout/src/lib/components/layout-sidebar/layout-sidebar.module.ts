import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LayoutSidebarComponent } from './layout-sidebar.component'
import { WebUiUserAccountDropdownModule } from '@nxpm-latest/web/ui/user-account-dropdown'

@NgModule({
  declarations: [LayoutSidebarComponent],
  imports: [CommonModule, RouterModule, WebUiUserAccountDropdownModule],
  exports: [LayoutSidebarComponent],
})
export class LayoutSidebarModule {}
