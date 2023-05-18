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
    if(this.currentPage == this.totalPages ) return
    this.currentPage += 1
    this.changedPage.emit(this.currentPage)
  }

  onPreviusPage(){
    if(this.currentPage == 1 ) return
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
