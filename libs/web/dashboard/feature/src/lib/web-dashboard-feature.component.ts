import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { WebCoreDataAccessService } from '@nxpm-latest/web/core/data-access'
import { SimpleCard } from '@nxpm-latest/web/ui/simple-card-grid'
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
    <ng-template #PageControls>
      <div class="space-x-3">
        <ui-button [label]="'Share'" [variant]="'secondary'"></ui-button>
        <ui-button [label]="'Create'" [variant]="'primary'"></ui-button>
      </div>
    </ng-template>

    <ui-page headerTitle="Dashboard" [headerControls]="PageControls">
      <div #FeaturedInvestments class="w-full py-6 bg-white dark:bg-gray-900 md:py-6 lg:py-6">
        <ui-container>
          <ui-simple-card-grid [headerText]="'Pinned Investments'" [cards]="cards"></ui-simple-card-grid>
        </ui-container>
      </div>
      <div [style.height]="computedTableHeight">
        <ui-dashboard-table></ui-dashboard-table>
      </div>
    </ui-page>
  `,
})
export class WebDashboardFeatureComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('FeaturedInvestments') featuredInvestmentsSection: ElementRef<HTMLDivElement>

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
