import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page',
  template: `
    <div class="h-full flex flex-col justify-between">
      <ui-page-header [title]="headerTitle"></ui-page-header>
      <div class="flex-grow h-full  overflow-auto">
        <div class="max-w-7xl mx-auto py-3 md:py-6 lg:py-12 px-3 md:px-6 lg:px-8 h-full overflow-auto">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPageComponent {
  @Input() headerTitle?: string
}
