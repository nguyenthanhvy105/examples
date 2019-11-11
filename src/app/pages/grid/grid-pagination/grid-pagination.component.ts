import {Component, OnInit, ViewChild} from '@angular/core';
import {
    AngularGridInstance, AngularSlickgridComponent, BackendServiceOption,
    Column,
    FieldType,
    FilterChangedArgs,
    Formatter,
    Formatters,
    GridOption, Pagination,
    PaginationChangedArgs,
    SelectedRange,
    SortChangedArgs
} from 'angular-slickgrid';
import {BackendService} from "angular-slickgrid";
import {Logger} from "inet-ui";

// create my custom Formatter with the Formatter type
const myCustomCheckmarkFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    // you can return a string of a object (of type FormatterResultObject), the 2 types are shown below
    return value ? `<i class="fa fa-fire red" aria-hidden="true"></i>` : {
        text: '<i class="fa fa-snowflake-o" aria-hidden="true"></i>',
        addClasses: 'lightblue',
        toolTip: 'Freezing'
    };
};

const customEnableButtonFormatter: Formatter = (row: number, cell: number, value: any, columnDef: Column, dataContext: any, grid: any) => {
    return `<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default">
        <i class="fa ${value ? 'fa-check-circle' : 'fa-circle-thin'} fa-lg" style="color: ${value ? 'black' : 'lavender'}"></i>
      </button>
    </span>`;
};

@Component({
    selector: 'app-grid-pagination',
    templateUrl: './grid-pagination.component.html',
    styleUrls: ['./grid-pagination.component.scss']
})

export class GridPaginationComponent implements OnInit {
    title = 'Example 2: Grid with Formatters';

    columnDefinitions: Column[];
    gridOptions: GridOption;
    dataset: any[];
    angularGrid: AngularGridInstance;
    @ViewChild('angularSlickGrid') angularSlickGrid: AngularSlickgridComponent;

    resizerPaused = false;

    constructor() {

    }

    angularGridReady(angularGrid: AngularGridInstance) {
        this.angularGrid = angularGrid;
    }

    ngOnInit(): void {
        this.columnDefinitions = [
            {id: 'title', name: 'Title', field: 'title', sortable: true, type: FieldType.string, width: 70},
            {
                id: 'phone',
                name: 'Phone Number using mask',
                field: 'phone',
                sortable: true,
                type: FieldType.number,
                minWidth: 100,
                formatter: Formatters.mask,
                params: {mask: '(000) 000-0000'}
            },
            {
                id: 'duration',
                name: 'Duration (days)',
                field: 'duration',
                formatter: Formatters.decimal,
                params: {minDecimalPlaces: 1, maxDecimalPlaces: 2},
                sortable: true,
                type: FieldType.number,
                minWidth: 90,
                exportWithFormatter: true
            },
            {id: 'complete', name: '% Complete', field: 'percentComplete', formatter: Formatters.percentCompleteBar, type: FieldType.number, sortable: true, minWidth: 100},
            {id: 'percent2', name: '% Complete', field: 'percentComplete2', formatter: Formatters.progressBar, type: FieldType.number, sortable: true, minWidth: 100},
            {id: 'start', name: 'Start', field: 'start', formatter: Formatters.dateIso, sortable: true, type: FieldType.date, minWidth: 90, exportWithFormatter: true},
            {id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso, sortable: true, type: FieldType.date, minWidth: 90, exportWithFormatter: true},
            {id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: myCustomCheckmarkFormatter, type: FieldType.number, sortable: true, minWidth: 100},
            {
                id: 'completed', name: 'Completed', field: 'completed', type: FieldType.number, sortable: true, minWidth: 100,
                formatter: customEnableButtonFormatter,
                onCellClick: (e, args) => {
                    this.toggleCompletedProperty(args && args.dataContext);
                }
            }
        ];

        this.gridOptions = {
            autoResize: {
                containerId: 'grid-container',
                sidePadding: 15
            },
            enableAutoResize: true,
            enableCellNavigation: true,

            // you customize the date separator through "formatterOptions"
            /*
            formatterOptions: {
              dateSeparator: '.'
            },
            */

            // when using the ExcelCopyBuffer, you can see what the selection range is
            enableExcelCopyBuffer: true,
            excelCopyBufferOptions: {
                onCopyCells: (e, args: { ranges: SelectedRange[] }) => console.log('onCopyCells', args.ranges),
                onPasteCells: (e, args: { ranges: SelectedRange[] }) => console.log('onPasteCells', args.ranges),
                onCopyCancelled: (e, args: { ranges: SelectedRange[] }) => console.log('onCopyCancelled', args.ranges),
            },
            /*
            enablePagination: false,
            backendServiceApi: {
                service: this,
                preProcess: () => {},
                process: (query) => {
                    return null;
                },
                postProcess: (response) => {}
            }

             */

        };
        console.log(this.angularSlickGrid);
        this.angularSlickGrid.showPagination = false;


        // mock a dataset
        this.dataset = [];
        for (let i = 0; i < 500; i++) {
            const randomYear = 2000 + Math.floor(Math.random() * 10);
            const randomMonth = Math.floor(Math.random() * 11);
            const randomDay = Math.floor((Math.random() * 29));
            const randomPercent = Math.round(Math.random() * 100);

            this.dataset[i] = {
                id: i,
                title: 'Task ' + i,
                phone: this.generatePhoneNumber(),
                duration: (i % 33 === 0) ? null : Math.random() * 100 + '',
                percentComplete: randomPercent,
                percentComplete2: randomPercent,
                percentCompleteNumber: randomPercent,
                start: new Date(randomYear, randomMonth, randomDay),
                finish: new Date(randomYear, (randomMonth + 1), randomDay),
                effortDriven: (i % 5 === 0)
            };
        }


    }

    generatePhoneNumber(): string {
        let phone = '';
        for (let i = 0; i < 10; i++) {
            phone += Math.round(Math.random() * 9) + '';
        }
        return phone;
    }

    togglePauseResizer() {
        this.resizerPaused = !this.resizerPaused;
        this.angularGrid.resizerService.pauseResizer(this.resizerPaused);
    }

    toggleCompletedProperty(item) {
        // toggle property
        if (typeof item === 'object') {
            item.completed = !item.completed;

            // simulate a backend http call and refresh the grid row after delay
            setTimeout(() => {
                this.angularGrid.gridService.updateItemById(item.id, item, {highlightRow: false});
            }, 250);
        }
    }

}
