import { Component } from '@angular/core'

// NOTE: Temp interface for development purposes
interface Investment {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  type: any // Investment Type
  investmentAmount: number
  investedOn: Date
  percentOwnership: number
  investingIn: any // Organization
  investingPerson: any // User
  investmentDocument: any[] // Investment Document[]
}

@Component({
  template: `
    <div class="min-h-screen">
      <ui-container>
        <main class="pt-3 pb-10">
          <!-- Page header -->
          <div class="max-w-3xl mx-auto md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl">
            <div class="flex items-center space-x-5">
              <div>
                <h1 class="text-2xl font-bold text-gray-900">{{ investment.name }}</h1>
                <p class="text-sm font-medium text-gray-500">
                  Invested in <a href="#" class="text-gray-900">{{ investment.investingIn }}</a> on
                  <time datetime="2020-08-25">{{ investment.investedOn }}</time>
                </p>
              </div>
            </div>
            <div
              class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
            >
              <button
                type="button"
                class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                Disqualify
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                Advance to offer
              </button>
            </div>
          </div>

          <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div class="space-y-6 lg:col-start-1 lg:col-span-2">
              <!-- Description list-->
              <section aria-labelledby="applicant-information-title">
                <div class="bg-white shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">
                      Investment Information
                    </h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Investment details and application.</p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Name</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ investment.name }}</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Investing In</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ investment.investingIn }}</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Type</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ investment.type }}</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Percent Ownership</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ investment.percentOwnership }}%</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Investment Amount</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ investment.investmentAmount | currency }}</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Investing Person</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ investment.investingPerson }}</dd>
                      </div>

                      <!-- <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">About</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                          Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                          proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                      </div> -->
                      <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">Documents</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
                            <li
                              *ngFor="let doc of investment.investmentDocument"
                              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                            >
                              <div class="w-0 flex-1 flex items-center">
                                <!-- Heroicon name: solid/paper-clip -->
                                <svg
                                  class="flex-shrink-0 h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <span class="ml-2 flex-1 w-0 truncate"> {{ doc.title }}.pdf </span>
                              </div>
                              <div class="ml-4 flex-shrink-0">
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500"> Download </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div *ngIf="false">
                    <a
                      href="#"
                      class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
                      >Read full application</a
                    >
                  </div>
                </div>
              </section>
            </div>

            <section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
              <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 id="timeline-title" class="text-lg font-medium text-gray-900">Tasks</h2>

                <!-- Activity Feed -->
                <div class="mt-6 flow-root">
                  <!-- This example requires Tailwind CSS v2.0+ -->
                  <div>
                    <ul class="divide-y divide-gray-200">
                      <li class="py-4">
                        <div class="flex space-x-3">
                          <div class="flex-1 space-y-1">
                            <div class="flex items-center justify-between">
                              <h3 class="text-sm font-medium">Example Task 1</h3>
                              <p class="text-sm text-gray-500">1h</p>
                            </div>
                            <p class="text-sm text-gray-500">An example task to showcase the task feature.</p>
                          </div>
                        </div>
                      </li>
                      <li class="py-4">
                        <div class="flex space-x-3">
                          <div class="flex-1 space-y-1">
                            <div class="flex items-center justify-between">
                              <h3 class="text-sm font-medium">Example Task 1</h3>
                              <p class="text-sm text-gray-500">1h</p>
                            </div>
                            <p class="text-sm text-gray-500">An example task to showcase the task feature.</p>
                          </div>
                        </div>
                      </li>
                      <li class="py-4">
                        <div class="flex space-x-3">
                          <div class="flex-1 space-y-1">
                            <div class="flex items-center justify-between">
                              <h3 class="text-sm font-medium">Example Task 1</h3>
                              <p class="text-sm text-gray-500">1h</p>
                            </div>
                            <p class="text-sm text-gray-500">An example task to showcase the task feature.</p>
                          </div>
                        </div>
                      </li>
                      <li class="py-4">
                        <div class="flex space-x-3">
                          <div class="flex-1 space-y-1">
                            <div class="flex items-center justify-between">
                              <h3 class="text-sm font-medium">Example Task 1</h3>
                              <p class="text-sm text-gray-500">1h</p>
                            </div>
                            <p class="text-sm text-gray-500">An example task to showcase the task feature.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mt-6 flex flex-col justify-stretch">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    See all tasks
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </ui-container>
    </div>
  `,
})
export class WebOverviewTabFeatureComponent {
  investment: Investment = {
    createdAt: new Date(),
    id: '0',
    investedOn: new Date(),
    investingIn: 'John Doe Corp',
    investingPerson: 'Mary Sue',
    investmentAmount: 23345234.0,
    investmentDocument: [
      { title: 'example_docuemnt_1.pdf' },
      { title: 'example_docuemnt_2.pdf' },
      { title: 'example_docuemnt_3.pdf' },
    ],
    name: 'Example Investment 1',
    percentOwnership: 67,
    type: 'E-Commerce',
    updatedAt: new Date(),
  }

  // id                     String                   @id @default(cuid())
  // createdAt              DateTime                 @default(now())
  // updatedAt              DateTime                 @default(now()) @updatedAt
  // name                   String?
  // type                   InvestmentType
  // investmentAmount       Float?
  // investedOn             DateTime?
  // percentOwnership       Float?
  // investingIn            Organization?            @relation(name: "Organization_InvestingIn", fields: [investingInId], references: [id])
  // investingInId          String?
  // investingPerson        User?                    @relation(fields: [investingPersonId], references: [id])
  // investingPersonId      String?
  // // investingOrganization Organization? @relation(name: "CorporateInvestments", fields: [investingOrganizationId], references: [id])
  // // investingOrganizationId String?
  // InvestmentDocument     InvestmentDocument[]
  // InvestmentDistribution InvestmentDistribution[]
}
