import { Component, ElementRef, Input } from '@angular/core'
@Component({
  selector: 'ui-page',
  template: `
    <div class="h-full flex flex-col justify-between">
      <ui-page-header [title]="headerTitle" [controls]="headerControls"></ui-page-header>
      <div class="flex-grow h-full overflow-auto">
        <div class="h-full overflow-auto">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPageComponent {
  @Input() headerTitle?: string
  @Input() headerControls?: ElementRef
}
