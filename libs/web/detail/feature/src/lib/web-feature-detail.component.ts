import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { ColDef } from 'ag-grid-community'
import { fromEvent, Observable, Subject } from 'rxjs'
import { takeUntil, distinctUntilChanged } from 'rxjs/operators'

@Component({
  template: `
    <ui-page headerTitle="Investment">
      <div #StatsSection class="w-full py-6 bg-white dark:bg-gray-900 md:py-6 lg:py-6">
        <ui-container>
          <ui-stats-simple></ui-stats-simple>
        </ui-container>
      </div>
      <ui-container>
        <h2 class="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide py-2 bg-white">
          Store Performance
        </h2>
      </ui-container>

      <div [style.height]="computedTableHeight" [style.max-width]="'calc(100vw - 264px)'">
        <ui-dashboard-table [columnDefs]="columnDefs"></ui-dashboard-table>
      </div>
    </ui-page>
  `,
})
export class WebDetailFeatureComponent implements OnDestroy, AfterViewInit, OnInit {
  @ViewChild('StatsSection') statsSection: ElementRef<HTMLDivElement>

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

  displayedColumns = [
    { field: 'make', label: 'Contract Category' },
    { field: 'model', label: 'Total Tender To/From Customer' },
    { field: 'price', label: 'Payable To Partner Of Sale' },
    { field: 'legacyProfit', label: 'Legacy Profit' },
    { field: 'managementProfit', label: 'Management Profit' },
    { field: 'walmartProfit', label: 'Walmart Profit' },
    { field: 'grossSalesRevenue', label: 'Gross Sales Revenue' },
    { field: 'grossShippingRevenue', label: 'Gross Shipping Revenue' },
    { field: 'refundedRetailsSales', label: 'Refunded Retail Sales' },
    { field: 'totalCollected', label: 'Total Collected' },
  ]

  destroyed$ = new Subject<void>()
  statsSectionHeight: number
  windowResized$: Observable<any>

  get computedTableHeight() {
    return `calc(100% - ${this.statsSectionHeight}px)`
  }

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
    const { height } = this.statsSection?.nativeElement?.getBoundingClientRect()
    this.statsSectionHeight = height
  }
}
