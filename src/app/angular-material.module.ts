import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdGridListModule, MdCardModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdCardModule],
    exports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdCardModule],
})
export class AngularMaterialModule {}
