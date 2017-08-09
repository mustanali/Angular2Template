import { Component } from '@angular/core';

@Component({
  selector: 'sample-component',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
    calc2Cols = '2 2 calc(10em + 10px);';
    /** 10px is the missing margin of the missing box */
    calc3Cols = '3 3 calc(15em + 20px)';
    /** 20px is the missing margin of the two missing boxes */
}
