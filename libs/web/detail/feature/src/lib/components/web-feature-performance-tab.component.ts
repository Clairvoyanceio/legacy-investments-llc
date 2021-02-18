import { Component } from '@angular/core'

@Component({
  template: `
    <div class="h-full w-full">
      <ui-container>
        <ui-stats-simple></ui-stats-simple>
      </ui-container>
      <div class="h-full w-full mt-6">
        <ag-grid-angular
          style="width: 100%; height: 100%;"
          class="ag-theme-alpine"
          [columnDefs]="columnDefs"
        ></ag-grid-angular>
      </div>
    </div>
  `,
})
export class WebPerformanceTabFeatureComponent {
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
