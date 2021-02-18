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
      </ui-container>
      <div class="h-full w-full">
        <router-outlet></router-outlet>
      </div>

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
    { label: 'Distribution', path: `distributions` },
  ]
}
