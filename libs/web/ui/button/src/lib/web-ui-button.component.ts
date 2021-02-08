import { Component, EventEmitter, Input } from '@angular/core'

const variantClasses = {
  primary: 'text-indigo-50 bg-indigo-700 border-indigo-600 hover:bg-indigo-800 focus:ring-indigo-500',
  secondary: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500',
}

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="routerLink">
      <a [routerLink]="routerLink" [class]="classes">
        {{ label }}
      </a>
    </ng-container>
    <ng-container *ngIf="!routerLink">
      <button (click)="click.emit($event)" [class]="classes" [disabled]="disabled" [type]="type">
        {{ label }}
      </button>
    </ng-container>
  `,
})
export class WebUiButtonComponent {
  @Input() routerLink?: string
  @Input() disabled?: boolean
  @Input() label: string
  @Input() type = 'button'
  @Input() variant: 'primary' | 'secondary' = 'primary'
  @Input() click = new EventEmitter()

  get classes(): string {
    return `${
      variantClasses[this.variant]
    } inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium  disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2`
  }
}
