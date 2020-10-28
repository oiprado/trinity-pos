import { NgModule } from '@angular/core';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { CommonModule } from '@angular/common';

import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product/prouct-list/product-list.component copy 2';

@NgModule({
    imports: [
        CommonModule,
        DataViewModule,
        CarouselModule,
        DropdownModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
    ],
    exports: [
        ProductViewComponent,
        ProductListComponent
    ],
    declarations: [
        ProductViewComponent,
        ProductListComponent
    ]
})
export class ComponentsModule {}