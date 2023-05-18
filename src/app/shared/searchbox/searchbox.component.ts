import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent {

  @ViewChild('searhBox') searchBox! : ElementRef<HTMLInputElement> 
  @Input() placeholder = ''
  @Output() onValue = new EventEmitter<string>()


  valueEmmiter(value: string){
    this.onValue.emit(value)
    this.searchBox.nativeElement.value = ''
  }

}
