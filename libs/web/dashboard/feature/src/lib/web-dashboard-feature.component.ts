import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { WebCoreDataAccessService } from '@nxpm-latest/web/core/data-access'
import { SimpleCard } from '@nxpm-latest/web/ui/simple-card-grid'
import { ColDef } from 'ag-grid-community'
import { fromEvent, Subject } from 'rxjs'
import { distinctUntilChanged, takeUntil } from 'rxjs/operators'

const mockCards: SimpleCard[] = [
  { title: 'Example Card 1', path: '/investment/1', subTitle: 'Example Subtitle', bgColorClass: 'bg-blue-600' },
  { title: 'Example Card 2', path: '/investment/1', subTitle: 'Example Subtitle', bgColorClass: 'bg-green-600' },
  { title: 'Example Card 3', path: '/investment/1', subTitle: 'Example Subtitle', bgColorClass: 'bg-pink-600' },
  { title: 'Example Card 4', path: '/investment/1', subTitle: 'Example Subtitle', bgColorClass: 'bg-yellow-600' },
]

@Component({
  template: `
    <!-- <ng-template #PageControls>
      <div class="space-x-3">
        <ui-button [label]="'Share'" [variant]="'secondary'"></ui-button>
        <ui-button [label]="'Create'" [variant]="'primary'"></ui-button>
      </div>
    </ng-template> -->

    <ui-page headerTitle="Dashboard">
      <div #FeaturedInvestments class="w-full py-6 bg-white dark:bg-gray-900 md:py-6 lg:py-6">
        <ui-container>
          <ui-simple-card-grid [headerText]="'Pinned Investments'" [cards]="cards"></ui-simple-card-grid>
          <!-- <ui-stats-simple></ui-stats-simple> -->
        </ui-container>
      </div>
      <div [style.height]="computedTableHeight" [style.max-width]="'calc(100vw - 264px)'">
        <ui-dashboard-table [columnDefs]="columnDefs"></ui-dashboard-table>
      </div>
    </ui-page>
  `,
})
export class WebDashboardFeatureComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('FeaturedInvestments') featuredInvestmentsSection: ElementRef<HTMLDivElement>

  columnDefs: ColDef[] = [
    { field: 'make', headerName: 'Contract Category' },
    { field: 'model', headerName: 'Total Tender To/From Customer' },
    { field: 'price', headerName: 'Payable To Partner Of Sale' },
    { field: 'a', headerName: 'Legacy Profit' },
    { field: 'b', headerName: 'Management Profit' },
    { field: 'c', headerName: 'Walmart Profit' },
    { field: 'd', headerName: 'Gross Sales Revenue' },
    { field: 'e', headerName: 'Gross Shipping Revenue' },
    { field: 'f', headerName: 'Refunded Retail Sales' },
    { field: 'g', headerName: 'Total Collected' },
  ]

  destroyed$ = new Subject<void>()
  featuredInvestmentsSectionHeight: number
  windowResized$: Observable<any>

  uptime$ = this.data.uptimeWatch()
  me$ = this.data.me()
  cards = mockCards // TODO: For Dev Purposes

  get computedTableHeight() {
    return `calc(100% - ${this.featuredInvestmentsSectionHeight}px)`
  }

  constructor(private readonly data: WebCoreDataAccessService) {}

  ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(distinctUntilChanged(), takeUntil(this.destroyed$))
      .subscribe(this.measureFeaturedInvestmentsHeight)
  }

  ngAfterViewInit() {
    this.measureFeaturedInvestmentsHeight()
  }

  ngOnDestroy() {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  measureFeaturedInvestmentsHeight() {
    const { height } = this.featuredInvestmentsSection?.nativeElement?.getBoundingClientRect()
    this.featuredInvestmentsSectionHeight = height
  }
}
