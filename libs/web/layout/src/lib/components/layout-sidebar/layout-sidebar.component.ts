import { Component, Input } from '@angular/core'
import { User } from '@nxpm-latest/web/core/data-access'

@Component({
  selector: 'layout-sidebar',
  template: `
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="w-64 flex bg-gray-100 flex-col border-r border-gray-200 h-screen pt-5 pb-4">
        <div class="flex items-center flex-shrink-0 px-6">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
            alt="Workflow"
          />
        </div>
        <div class="h-0 flex-1 flex flex-col overflow-y-auto">
          <div class="px-3 mt-6">
            <ui-user-account-dropdown [user]="user"></ui-user-account-dropdown>
          </div>
        </div>
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
