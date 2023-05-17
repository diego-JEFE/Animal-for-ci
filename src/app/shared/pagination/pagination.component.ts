import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() currentPage = 0
  @Input() totalPages = 0

  @Output() changedPage = new EventEmitter<number>()

  onNextPage(){
    this.currentPage += 1
    this.changedPage.emit(this.currentPage)
  }

  onPreviusPage(){
    this.currentPage -= 1
    this.changedPage.emit(this.currentPage)
  }

  onFirstPage(){
    this.currentPage = 1
    this.changedPage.emit(this.currentPage)
  }

  onLastPage(){
    this.currentPage = this.totalPages
    this.changedPage.emit(this.currentPage)
  }
}
