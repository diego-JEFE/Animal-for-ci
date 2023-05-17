import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styles: [
  ]
})
export class LazyImageComponent {
  @Input() url: string = ''
  @Input() alt: string = ''
  @Input() width: number = 0
  public isLoading: boolean = true

  onLoaded():void {
    this.isLoading = false
  }
}
