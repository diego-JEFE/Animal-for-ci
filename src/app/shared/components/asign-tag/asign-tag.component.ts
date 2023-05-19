import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-asign-tag',
  templateUrl: './asign-tag.component.html',
  styles: [
  ]
})
export class AsignTagComponent implements OnInit {
  @Input() key!: string | number | null
  @Input() value!: string | number | null

  ngOnInit(): void {
    if(!this.key)throw Error('La propiedad "key" es obligatoria')
    if(!this.value)throw Error('La propiedad "value" es obligatoria')
  }
}
