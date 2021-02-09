import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@nxpm-latest/web/core/data-access'
import { SimpleCard } from '@nxpm-latest/web/ui/simple-card-grid'

const mockCards: SimpleCard[] = [
  { title: 'Example Card 1', subTitle: 'Example Subtitle', bgColorClass: 'bg-blue-600' },
  { title: 'Example Card 2', subTitle: 'Example Subtitle', bgColorClass: 'bg-green-600' },
  { title: 'Example Card 3', subTitle: 'Example Subtitle', bgColorClass: 'bg-pink-600' },
  { title: 'Example Card 4', subTitle: 'Example Subtitle', bgColorClass: 'bg-yellow-600' },
]

@Component({
  template: `
    <ng-template #PageControls>
      <div class="space-x-3">
        <ui-button [label]="'Share'" [variant]="'secondary'"></ui-button>
        <ui-button [label]="'Create'" [variant]="'primary'"></ui-button>
      </div>
    </ng-template>

    <ui-page headerTitle="Dashboard" [headerControls]="PageControls">
      <div class="w-full py-6 bg-white dark:bg-gray-900 md:py-6 lg:py-6">
        <ui-container>
          <ui-simple-card-grid [headerText]="'Pinned Investments'" [cards]="cards"></ui-simple-card-grid>
        </ui-container>
      </div>
      <div>
        <ui-dashboard-table></ui-dashboard-table>
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
