import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {DataService} from "../../data/data.service";
import {ConfirmDialogComponent, DataTable, DataTableResource, DataTableRow, DialogAction} from "inet-ui";

@Component({
  selector: 'app-grid-basic',
  templateUrl: './grid-basic.component.html',
  styleUrls: ['./grid-basic.component.scss']
})
export class GridBasicComponent implements OnInit, AfterViewInit {
  dataResource = new DataTableResource([]);
  items = [];
  itemCount = 0;
  pageNumber = 1;
  @ViewChild(DataTable) demoTable;
  @ViewChild(ConfirmDialogComponent) confirmDialog: ConfirmDialogComponent;
  expandedAdvSearch = false;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    console.log('[GridBasicComponent]--ngOnInit--');
  }

  ngAfterViewInit(): void {
    const modalDeleteActions = [
      new DialogAction("Xóa", "btn-danger", "fa fa-check", () => {
        this.confirmDelete();
      }),
      new DialogAction("Bỏ qua", "btn-cancel", "fa fa-times", () => {
        this.confirmDialog.hide();
      })
    ];
    this.confirmDialog.setActions(modalDeleteActions);
  }

  load(params) {
    this.clearSelected();
    this.dataResource.query(params).then(() => {
      this.dataService.getPeople().subscribe((items: any) => {
        this.items = items.slice(params.page * params.limit, (params.page + 1) * params.limit);
        this.itemCount = items.length;
      });
    });
  }

  clearSelected() {
    this.demoTable.selectedRows = [];
  }

  rowClick($event) {
    const row = $event.row as DataTableRow;
    console.log('[GridBasicComponent]--rowClick--', row);
  }

  private findRowsById(id: string): Array<DataTableRow> {
    return this.demoTable.rows.toArray().filter(row => row.item.id === id);
  }

  deleteItem(item: any, event: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const rows = this.findRowsById(item.id);
    this.confirmDialog.setData(rows);
    this.confirmDialog.show();
  }

  private confirmDelete() {
    const selectedRows: Array<DataTableRow> = this.confirmDialog.getData() || [];
    this.confirmDialog.hide();
    console.log('[GridBasicComponent]--delete--', selectedRows);
  }

  onToggleSearch(expanded: boolean) {
    this.expandedAdvSearch = expanded;
  }

}
