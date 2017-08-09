import { Component, Input } from '@angular/core';

@Component({
  selector: 'postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent {
  private _imgSrc: string;
  @Input() country = 'defaultCountry';
  @Input() city = 'defaultCity';
  @Input() desc = 'defaultDesc';
  // @Input() imgSrc = require('../../assets/images/australiam.jpg');
  @Input()
  set imgSrc(src: string) {
      this._imgSrc = src;
  }
  get imgSrc(): string {
    return this._imgSrc;
  }
}
