import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/share/model/product.model';
import { SelectItem } from 'primeng';


interface City {
    name: string,
    code: string
}

@Component({
    selector:"product-view",
    templateUrl: "./product-view.component.html",
    styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

    sortOptions: SelectItem[];
    sortKey: string;
    sortField: string;
    sortOrder: number;
    responsiveOptions;
    cities: City[];
    selectedCity: City;

    @Input() 
    products: Product[];
    @Output() 
    filter = new EventEmitter<String>();
    wordFilter: string;

    constructor() {
        this.filter = new EventEmitter();
        
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    onFilter() {
        this.filter.emit(this.wordFilter);
    }

}