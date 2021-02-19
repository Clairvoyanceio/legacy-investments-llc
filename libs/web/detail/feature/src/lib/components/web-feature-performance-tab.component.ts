import { Component } from '@angular/core'

@Component({
  template: `
    <div class="h-full w-full">
      <ui-container>
        <div class="flex flex-col w-full">
          <div class=" items-center grid grid-cols-4 gap-4 w-full">
            <ui-simple-custom-dropdown label="Transaction Type"></ui-simple-custom-dropdown>
            <ui-simple-custom-dropdown label="Fulfillment Type"></ui-simple-custom-dropdown>
            <ui-simple-custom-dropdown label="Zip Code"></ui-simple-custom-dropdown>
            <ui-simple-custom-dropdown label="Transaction Date Time"></ui-simple-custom-dropdown>
          </div>
          <ui-stats-simple></ui-stats-simple>
        </div>
      </ui-container>
      <div class="h-full w-full mt-6" [style.max-width]="'calc(100vw - 256px)'">
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
