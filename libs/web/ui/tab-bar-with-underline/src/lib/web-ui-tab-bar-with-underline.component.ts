import { Component, Input } from '@angular/core'

export interface TabDef {
  label: string
  path: string
}

@Component({
  selector: 'ui-tab-bar-with-underline',
  template: `
    <div>
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select
          id="tabs"
          name="tabs"
          class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        >
          <ng-container *ngFor="let tab of tabDefs">
            <option>{{ tab.label }}</option>
          </ng-container>
          <!-- <option selected>My Account</option>
          <option>Team Members</option>
          <option>Billing</option> -->
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          <ng-container *ngFor="let tab of tabDefs; let first = first; let last = last">
            <a
              href="#"
              aria-current="page"
              [class.rounded-l-lg]="first"
              [class.rounded-r-lg]="last"
              class="text-gray-900  group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
            >
              {{ tab.label }}
            </a>
          </ng-container>
          <!-- <a
            href="#"
            aria-current="page"
            class="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>My Account</span>
            <span aria-hidden="true" class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"></span>
          </a> -->

          <!-- <a
            href="#"
            aria-current="false"
            class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Company</span>
            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
          </a> -->

          <!-- <a
            href="#"
            aria-current="false"
            class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Team Members</span>
            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
          </a>

          <a
            href="#"
            aria-current="false"
            class="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Billing</span>
            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
          </a> -->
        </nav>
      </div>
    </div>
  `,
})
export class WebUiTabBarWithUnderlineComponent {
  @Input() tabDefs: TabDef[]
}
