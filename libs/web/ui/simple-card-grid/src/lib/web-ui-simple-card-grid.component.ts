import { Component, Input } from '@angular/core'
import { SimpleCard } from './web-ui-simple-card.component'

@Component({
  selector: 'ui-simple-card-grid',
  template: `
    <div>
      <h2 class="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide">{{ headerText }}</h2>
      <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ng-container *ngFor="let card of cards">
          <li [ngClass]="colSpanClass">
            <ui-simple-card [card]="card"></ui-simple-card>
          </li>
        </ng-container>
      </ul>
    </div>
  `,
})
export class WebUiSimpleCardGridComponent {
  @Input() headerText: string
  @Input() cards: SimpleCard[]
  @Input() colSpan: number = 2

  get colSpanClass(): string {
    return `col-span-${this.colSpan}`
  }
}
