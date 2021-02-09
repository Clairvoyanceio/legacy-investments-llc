import { Component, Input } from '@angular/core'
import { User } from '@nxpm-latest/web/core/data-access'

@Component({
  selector: 'layout-sidebar',
  template: `
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div
        class="w-64 flex bg-gray-100 dark:bg-gray-800 flex-col border-r border-gray-200 dark:border-gray-700 h-screen pt-5 pb-4"
      >
        <div class="flex items-center flex-shrink-0 px-6">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
            alt="Workflow"
          />
        </div>
        <div class="flex flex-col overflow-y-auto">
          <div class="px-3 mt-6">
            <ui-user-account-dropdown [user]="user"></ui-user-account-dropdown>
          </div>
        </div>

        <nav class="px-3 mt-6">
          <div class="space-y-1">
            <ng-container *ngFor="let link of links">
              <a
                [routerLink]="link.route"
                routerLinkActive="text-gray-900 bg-gray-200 dark:text-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
                class="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 group flex pl-4 items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <!-- Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" -->
                <!-- Heroicon name: outline/home -->
                <!-- <svg
                  class="text-gray-500 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg> -->
                {{ link.label }}
              </a>
            </ng-container>
          </div>
        </nav>
      </div>
    </div>
  `,
})
export class LayoutSidebarComponent {
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string
}
