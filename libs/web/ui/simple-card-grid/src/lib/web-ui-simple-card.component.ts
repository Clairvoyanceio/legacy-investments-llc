import { Component, Input } from '@angular/core'

export interface SimpleCard {
  title?: string
  subTitle?: string
  bgColorClass?: string
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
            href="#"
            class="text-gray-900 dark:text-gray-100 font-medium hover:text-gray-600 dark:hover:text-gray-300"
            >{{ card.title }}</a
          >
          <p class="text-gray-500 dark:text-gray-400">{{ card.subTitle }}</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button
            class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Open options</span>
            <!-- Heroicon name: solid/dots-vertical -->
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
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
