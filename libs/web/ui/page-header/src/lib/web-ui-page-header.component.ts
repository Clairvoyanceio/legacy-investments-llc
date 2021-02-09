import { Component, ElementRef, Input } from '@angular/core'
@Component({
  selector: 'ui-page-header',
  template: `
    <!-- <div class="flex justify-between items-center px-6 py-3 mb-3 md:mb-6 bg-white dark:bg-gray-800 text-gray-300 shadow rounded-md">
      <div class="text-lg font-semibold">
        {{ title }}
      </div>
      <ui-button [label]="linkTitle" [routerLink]="linkPath"></ui-button>
    </div> -->
    <header class="bg-white dark:bg-gray-800 text-gray-300 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 sm:truncate">
          {{ title }}
        </h1>
        <div class="mt-0">
          <ng-container *ngTemplateOutlet="controls"></ng-container>
          <!-- <ng-content select="ui-page-header"></ng-content> -->
        </div>
      </div>
    </header>
  `,
})
export class WebUiPageHeaderComponent {
  @Input() title?: string
  @Input() controls?: ElementRef
  @Input() linkPath?: string
  @Input() linkTitle?: string
}
