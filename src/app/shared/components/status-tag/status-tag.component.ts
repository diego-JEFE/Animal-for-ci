import { Component, Input } from '@angular/core';
import { Data } from 'src/app/shared/interfaces/global.interfaces';

@Component({
  selector: 'shared-status-tag',
  templateUrl: './status-tag.component.html',
  styles: [
  ]
})
export class StatusTagComponent {
  @Input() item!: Data
}
