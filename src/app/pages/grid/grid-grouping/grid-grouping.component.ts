import {Component, Injectable, OnInit, OnDestroy, HostListener} from '@angular/core';
import {
    AngularGridInstance,
    Aggregators,
    Column,
    FieldType,
    Filters,
    Formatters,
    GridOption,
    Grouping,
    GroupTotalFormatters,
    SortDirectionNumber,
    Sorters
} from 'angular-slickgrid';
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";

@Injectable()
@Component({
    templateUrl: './grid-grouping.component.html',
    styleUrls: ['./grid-grouping.component.scss']
})
export class GridGroupingComponent implements OnInit, OnDestroy {
    angularGrid: AngularGridInstance;
    columnDefinitions: Column[];
    gridOptions: GridOption;
    dataset: any[];
    gridObj: any;
    dataviewObj: any;
    processing = false;
    exportBeforeSub: any;
    exportAfterSub: any;
    private translateSubscription: Subscription;
    private columnsTranslations: any;

    constructor(private translate: TranslateService) {
        this.translateSubscription = translate.get(['GRID_COLUMNS']).subscribe(data => {
            this.columnsTranslations = data['GRID_COLUMNS'];
        });
    }

    ngOnDestroy() {
        this.exportBeforeSub.unsubscribe();
        this.exportAfterSub.unsubscribe();
    }

    ngOnInit(): void {
        const {TITLE, DURATION, COMPLETE, START, FINISH, COST, EFFORT_DRIVEN, TOTAL, AVG} = this.columnsTranslations;
        this.columnDefinitions = [
            {
                id: 'sel', name: '#',
                field: 'num',
                width: 40,
                maxWidth: 70,
                resizable: true,
                filterable: true,
                selectable: false,
                focusable: false
            },
            {
                id: 'title', name: TITLE, field: 'title',
                width: 50,
                minWidth: 100,
                cssClass: 'cell-title',
                filterable: true,
                sortable: true
            },
            {
                id: 'duration',
                name: DURATION,
                field: 'duration',
                minWidth: 50, width: 60,
                filterable: true,
                filter: {model: Filters.slider, operator: '>='},
                sortable: true,
                type: FieldType.number,
                groupTotalsFormatter: GroupTotalFormatters.sumTotals,
                params: {groupFormatterPrefix: `${TOTAL}: `}
            },
            {
                id: '%',
                name: COMPLETE,
                field: 'percentComplete',
                minWidth: 70, width: 90,
                formatter: Formatters.percentCompleteBar,
                filterable: true,
                filter: {model: Filters.compoundSlider},
                sortable: true,
                groupTotalsFormatter: GroupTotalFormatters.avgTotalsPercentage,
                params: {groupFormatterPrefix: `<i>${AVG}</i>: `}
            },
            {
                id: 'start',
                name: START,
                field: 'start',
                minWidth: 60,
                filterable: true,
                filter: {model: Filters.compoundDate},
                sortable: true,
                type: FieldType.dateIso,
                formatter: Formatters.dateIso,
                exportWithFormatter: true
            },
            {
                id: 'finish',
                name: FINISH,
                field: 'finish',
                minWidth: 60,
                filterable: true,
                filter: {model: Filters.compoundDate},
                sortable: true,
                type: FieldType.dateIso,
                formatter: Formatters.dateIso,
                exportWithFormatter: true
            },
            {
                id: 'cost', name: COST, field: 'cost',
                minWidth: 70,
                width: 80,
                filterable: true,
                cssClass: 'text-right',
                filter: {model: Filters.compoundInput},
                type: FieldType.number,
                sortable: true,
                exportWithFormatter: true,
                formatter: Formatters.dollar,
                groupTotalsFormatter: GroupTotalFormatters.sumTotalsDollar,
                params: {groupFormatterPrefix: `<b>${TOTAL}</b>: ` /*, groupFormatterSuffix: ' USD'*/}
            },
            {
                id: 'effort-driven', name: EFFORT_DRIVEN,
                minWidth: 20, width: 110, maxWidth: 110,
                cssClass: 'cell-effort-driven text-center',
                field: 'effortDriven',
                formatter: Formatters.checkmark,
                sortable: true,
                filterable: true,
                filter: {
                    collection: [{value: '', label: ''}, {value: true, label: 'True'}, {value: false, label: 'False'}],
                    model: Filters.singleSelect,
                }
            }
        ];
        this.gridOptions = {
            autoResize: {
                containerId: 'grid-container',
                sidePadding: 15
            },
            i18n: this.translate,
            enableFiltering: true,
            enableGrouping: true,
            enableTranslate: true,
            exportOptions: {
                sanitizeDataExport: true
            }
        };

        this.loadData(500);
    }

    @HostListener('window:resize', ['$event'])
    onResize($event) {
        console.log('[window:resize]', $event.target.innerWidth);
        this.angularGrid.resizerService.attachAutoResizeDataGrid();
    }

    angularGridReady(angularGrid: AngularGridInstance) {
        this.angularGrid = angularGrid;
        this.gridObj = angularGrid.slickGrid;
        this.dataviewObj = angularGrid.dataView;

        // display a spinner while downloading
        this.exportBeforeSub = this.angularGrid.exportService.onGridBeforeExportToFile.subscribe(() => this.processing = true);
        this.exportAfterSub = this.angularGrid.exportService.onGridAfterExportToFile.subscribe(() => this.processing = false);
    }

    loadData(rowCount: number) {
        // mock a dataset
        this.dataset = [];
        for (let i = 0; i < rowCount; i++) {
            const randomYear = 2000 + Math.floor(Math.random() * 10);
            const randomMonth = Math.floor(Math.random() * 11);
            const randomDay = Math.floor((Math.random() * 29));
            const randomPercent = Math.round(Math.random() * 100);

            this.dataset[i] = {
                id: 'id_' + i,
                num: i,
                title: 'Task ' + i,
                duration: Math.round(Math.random() * 100) + '',
                percentComplete: randomPercent,
                percentCompleteNumber: randomPercent,
                start: new Date(randomYear, randomMonth, randomDay),
                finish: new Date(randomYear, (randomMonth + 1), randomDay),
                cost: (i % 33 === 0) ? null : Math.round(Math.random() * 10000) / 100,
                effortDriven: (i % 5 === 0)
            };
        }
    }

    clearGrouping() {
        this.dataviewObj.setGrouping([]);
    }

    collapseAllGroups() {
        this.dataviewObj.collapseAllGroups();
    }

    expandAllGroups() {
        this.dataviewObj.expandAllGroups();
    }

    groupByDuration() {
        const {DURATION} = this.columnsTranslations;
        this.dataviewObj.setGrouping({
            getter: 'duration',
            formatter: (g) => {
                return `${DURATION}:  ${g.value} <span style="color:green">(${g.count} items)</span>`;
            },
            aggregators: [
                new Aggregators.Avg('percentComplete'),
                new Aggregators.Sum('cost')
            ],
            comparer: (a, b) => Sorters.numeric(a.value, b.value, SortDirectionNumber.asc),
            aggregateCollapsed: false,
            lazyTotalsCalculation: true
        } as Grouping);
    }

    groupByDurationOrderByCount(aggregateCollapsed) {
        const {DURATION} = this.columnsTranslations;
        this.dataviewObj.setGrouping({
            getter: 'duration',
            formatter: (g) => {
                return `${DURATION}:  ${g.value} <span style="color:green">(${g.count} items)</span>`;
            },
            comparer: (a, b) => {
                return a.count - b.count;
            },
            aggregators: [
                new Aggregators.Avg('percentComplete'),
                new Aggregators.Sum('cost')
            ],
            aggregateCollapsed,
            lazyTotalsCalculation: true
        } as Grouping);
    }

    groupByDurationEffortDriven() {
        const {DURATION, EFFORT_DRIVEN} = this.columnsTranslations;
        this.dataviewObj.setGrouping([
            {
                getter: 'duration',
                formatter: (g) => {
                    return `${DURATION}:  ${g.value}  <span style="color:green">(${g.count} items)</span>`;
                },
                aggregators: [
                    new Aggregators.Sum('duration'),
                    new Aggregators.Sum('cost')
                ],
                aggregateCollapsed: true,
                lazyTotalsCalculation: true
            },
            {
                getter: 'effortDriven',
                formatter: (g) => {
                    return `${EFFORT_DRIVEN}:  ${(g.value ? 'True' : 'False')} <span style="color:green">(${g.count} items)</span>`;
                },
                aggregators: [
                    new Aggregators.Avg('percentComplete'),
                    new Aggregators.Sum('cost')
                ],
                collapsed: true,
                lazyTotalsCalculation: true
            }
        ] as Grouping[]);
    }

    groupByDurationEffortDrivenPercent() {
        const {COMPLETE, EFFORT_DRIVEN, DURATION} = this.columnsTranslations;

        this.dataviewObj.setGrouping([
            {
                getter: 'duration',
                formatter: (g) => {
                    return `${DURATION}:  ${g.value}  <span style="color:green">(${g.count} items)</span>`;
                },
                aggregators: [
                    new Aggregators.Sum('duration'),
                    new Aggregators.Sum('cost')
                ],
                aggregateCollapsed: true,
                lazyTotalsCalculation: true
            },
            {
                getter: 'effortDriven',
                formatter: (g) => {
                    return `${EFFORT_DRIVEN}:  ${(g.value ? 'True' : 'False')}  <span style="color:green">(${g.count} items)</span>`;
                },
                aggregators: [
                    new Aggregators.Sum('duration'),
                    new Aggregators.Sum('cost')
                ],
                lazyTotalsCalculation: true
            },
            {
                getter: 'percentComplete',
                formatter: (g) => {
                    return `${COMPLETE}:  ${g.value}  <span style="color:green">(${g.count} items)</span>`;
                },
                aggregators: [
                    new Aggregators.Avg('percentComplete')
                ],
                aggregateCollapsed: true,
                collapsed: true,
                lazyTotalsCalculation: true
            }
        ] as Grouping[]);
    }
}
