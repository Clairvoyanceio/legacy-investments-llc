import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-stats-simple',
  template: `
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">{{ header }}</h3>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Total Subscribers</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">71,897</dd>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Avg. Open Rate</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">58.16%</dd>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Avg. Click Rate</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">24.57%</dd>
          </div>
        </div>
      </dl>
    </div>
  `,
})
export class WebUiStatsSimpleComponent {
  @Input() header: string
}
