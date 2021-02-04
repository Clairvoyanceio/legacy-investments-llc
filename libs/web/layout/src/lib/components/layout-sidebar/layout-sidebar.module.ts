import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LayoutSidebarComponent } from './layout-sidebar.component'

@NgModule({
  declarations: [LayoutSidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutSidebarComponent],
})
export class LayoutSidebarModule {}
