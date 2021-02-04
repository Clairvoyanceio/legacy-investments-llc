import { Component, Input } from '@angular/core'
import { User } from '@nxpm-latest/web/core/data-access'

@Component({
  selector: 'ui-user-account-dropdown',
  template: `
    <div class="relative inline-block text-left w-full">
      <div>
        <button
          (click)="toggleDropdownVisibility()"
          type="button"
          class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span class="flex w-full justify-between items-center">
            <span class="flex min-w-0 items-center justify-between space-x-3">
              <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" [attr.src]="user.avatarUrl" alt="" />
              <span class="flex-1 min-w-0 text-left">
                <span class="text-gray-900 text-sm font-medium truncate">{{ user.firstName }} {{ user.lastName }}</span
                ><br />
                <span class="text-gray-500 text-sm truncate">@{{ user.username }}</span>
              </span>
            </span>
            <!-- Heroicon name: selector -->
            <svg
              class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
      <!--
        Dropdown panel, show/hide based on dropdown state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      -->
      <div
        *ngIf="dropdownVisible"
        class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >View profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Notifications</a
          >
        </div>
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Get desktop app</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Support</a
          >
        </div>
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Logout</a
          >
        </div>
      </div>
    </div>
  `,
})
export class WebUiUserAccountDropdownComponent {
  @Input() user: User

  dropdownVisible: boolean = false

  showDropdown() {
    this.dropdownVisible = true
  }

  hideDropdown() {
    this.dropdownVisible = false
  }

  toggleDropdownVisibility() {
    this.dropdownVisible ? this.hideDropdown() : this.showDropdown()
  }
}
