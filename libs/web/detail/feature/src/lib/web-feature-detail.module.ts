import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebDetailFeatureComponent } from './web-feature-detail.component'

@NgModule({
  declarations: [WebDetailFeatureComponent],
  exports: [WebDetailFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebDetailFeatureComponent }]),
  ],
})
export class WebFeatureDetailModule {}
