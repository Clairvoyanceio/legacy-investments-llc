import { Component, Input } from '@angular/core'

export interface SimpleCard {
  title?: string
  subTitle?: string
  bgColorClass?: string
  path?: string
}

@Component({
  selector: 'ui-simple-card',
  template: `
    <div class="flex shadow-sm rounded-md">
      <div
        class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
        [ngClass]="bgColorClass"
      >
        {{ firstLetterOfTitle }}
      </div>
      <div
        class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-r-md truncate"
      >
        <div class="flex-1 px-4 py-2 text-sm truncate">
          <a
            [routerLink]="card.path"
            class="text-gray-900 dark:text-gray-100 font-medium hover:text-gray-600 dark:hover:text-gray-300"
            >{{ card.title }}</a
          >
          <p class="text-gray-500 dark:text-gray-400">{{ card.subTitle }}</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <ui-menu-button></ui-menu-button>
        </div>
      </div>
    </div>
  `,
})
export class WebUiSimpleCardComponent {
  @Input() card: SimpleCard

  get firstLetterOfTitle(): string {
    const title = this.card?.title
    const firstChar = title.slice(0, 1).toUpperCase()
    return firstChar || ''
  }

  get bgColorClass(): string {
    const bgColorClass = this.card?.bgColorClass
    return bgColorClass || 'bg-gray-700'
  }
}
