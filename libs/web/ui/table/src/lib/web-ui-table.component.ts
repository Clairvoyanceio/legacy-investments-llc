import { Component, Input } from '@angular/core'
import { DataSource } from '@angular/cdk/collections'
import { BehaviorSubject, Observable } from 'rxjs'

export interface PeriodicElement {
  name: string
  position: number
  weight: number
  symbol: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
]

export interface Col {
  label: string
  field: string
}

@Component({
  selector: 'ui-table',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table cdk-table [dataSource]="dataSource" class="min-w-full divide-y divide-gray-200">
              <ng-container *ngFor="let col of displayedColumns">
                <ng-container [cdkColumnDef]="col.field">
                  <th
                    cdk-header-cell
                    *cdkHeaderCellDef
                    scope="col"
                    class="px-6 bg-gray-50 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {{ col.label }}
                  </th>
                  <td
                    cdk-cell
                    *cdkCellDef="let row"
                    class="px-6 bg-white border-b border-gray-200 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ row[col.field] }}
                  </td>
                </ng-container>
              </ng-container>

              <tr cdk-header-row *cdkHeaderRowDef="displayedColumns"></tr>
              <tr cdk-row *cdkRowDef="let row; columns: displayedColumns"></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiTableComponent {
  @Input() displayedColumns: Col[]
  @Input() dataSource: DataSource<any>
}
