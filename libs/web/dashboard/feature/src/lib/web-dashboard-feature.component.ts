import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@nxpm-latest/web/core/data-access'
import { SimpleCard } from '@nxpm-latest/web/ui/simple-card-grid'

const mockCards: SimpleCard[] = [
  { title: 'Example Card 1', path: '/investment/1', subTitle: 'Example Subtitle', bgColorClass: 'bg-blue-600' },
  { title: 'Example Card 2', path: '/investment/1', subTitle: 'Example Subtitle', bgColorClass: 'bg-green-600' },
  { title: 'Example Card 3', path: '/investment/1', subTitle: 'Example Subtitle', bgColorClass: 'bg-pink-600' },
  { title: 'Example Card 4', path: '/investment/1', subTitle: 'Example Subtitle', bgColorClass: 'bg-yellow-600' },
]

// Row menu: Pin, View

@Component({
  template: `
    <ui-page headerTitle="Dashboard">
      <div #FeaturedInvestments class="w-full py-6 bg-white dark:bg-gray-900 md:py-6 lg:py-6">
        <ui-container>
          <ui-simple-card-grid [headerText]="'Pinned Investments'" [cards]="cards"></ui-simple-card-grid>
        </ui-container>
      </div>
      <div [style.max-width]="'calc(100vw - 264px)'">
        <table class="min-w-full">
          <thead>
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th
                class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                <span class="lg:pl-2">Investments</span>
              </th>
              <th
                class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Investors
              </th>
              <th
                class="hidden md:table-cell px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-right text-xs font-medium text-gray-500 dark:text-gray-400  uppercase tracking-wider"
              >
                Last updated
              </th>
              <th
                class="pr-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              ></th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                <div class="flex items-center space-x-3 lg:pl-2">
                  <div class="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" aria-hidden="true"></div>
                  <a
                    [routerLink]="'/investment/1'"
                    class="truncate hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                  >
                    <span>
                      GraphQL API
                      <span class="text-gray-500 dark:text-gray-400 font-normal">in Engineering</span>
                    </span>
                  </a>
                </div>
              </td>
              <td class="px-6 py-3 text-sm text-gray-500 font-medium">
                <div class="flex items-center space-x-2">
                  <div class="flex flex-shrink-0 -space-x-1">
                    <img
                      class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <span class="flex-shrink-0 text-xs leading-5 font-medium">+8</span>
                </div>
              </td>
              <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                March 17, 2020
              </td>
              <td class="pr-6">
                <ui-menu-button></ui-menu-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ui-page>
  `,
})
export class WebDashboardFeatureComponent {
  uptime$ = this.data.uptimeWatch()
  me$ = this.data.me()
  cards = mockCards // TODO: For Dev Purposes

  constructor(private readonly data: WebCoreDataAccessService) {}
}
