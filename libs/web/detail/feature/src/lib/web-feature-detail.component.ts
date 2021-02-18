import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { fromEvent, Observable, Subject } from 'rxjs'
import { takeUntil, distinctUntilChanged } from 'rxjs/operators'

@Component({
  template: `
    <ui-page headerTitle="Investment">
      <ui-container>
        <div class="py-4">
          <ui-tab-bar-with-underline [tabDefs]="tabDefs"></ui-tab-bar-with-underline>
        </div>
        <div>
          <router-outlet></router-outlet>
        </div>
      </ui-container>

      <!-- <div #StatsSection class="w-full py-6 bg-white dark:bg-gray-900 md:py-6 lg:py-6">
        <ui-container>
          <ui-stats-simple></ui-stats-simple>
        </ui-container>
      </div>
      <h2 class="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide py-2 bg-white">
        <ui-container>Store Performance</ui-container>
      </h2>

      <div [style.height]="computedTableHeight" [style.max-width]="'calc(100vw - 264px)'">
        <ui-dashboard-table [columnDefs]="columnDefs"></ui-dashboard-table>
      </div> -->
    </ui-page>
  `,
})
export class WebDetailFeatureComponent {
  tabDefs = [
    { label: 'Overview', path: `overview` },
    { label: 'Performance', path: `performance` },
    { label: 'Distribution', path: `distribution` },
  ]

  columnDefs = [
    { field: 'make', headerName: 'Contract Category' },
    { field: 'model', headerName: 'Total Tender To/From Customer' },
    { field: 'price', headerName: 'Payable To Partner Of Sale' },
    { field: 'legacyProfit', headerName: 'Legacy Profit' },
    { field: 'managementProfit', headerName: 'Management Profit' },
    { field: 'walmartProfit', headerName: 'Walmart Profit' },
    { field: 'grossSalesRevenue', headerName: 'Gross Sales Revenue' },
    { field: 'grossShippingRevenue', headerName: 'Gross Shipping Revenue' },
    { field: 'refundedRetailsSales', headerName: 'Refunded Retail Sales' },
    { field: 'totalCollected', headerName: 'Total Collected' },
  ]
}
