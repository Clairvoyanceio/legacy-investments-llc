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
    <ui-page headerTitle="Dashboard">
      <div class="w-full pb-12">
        <ui-simple-card-grid [headerText]="'Pinned Investments'" [cards]="cards"></ui-simple-card-grid>
      </div>
      <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <pre>{{ me$ | async | json }}</pre>
        </div>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
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
