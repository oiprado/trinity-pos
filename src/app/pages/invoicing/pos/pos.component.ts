import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng';
import { Product } from 'src/app/share/model/product.model';
import { ProductService } from 'src/app/share/services/product.service';
import { ProductResponse } from 'src/app/share/model/product-request.model';
import { ProductViewComponent } from 'src/app/share/components/product/product-view/product-view.component';


@Component({
    templateUrl: './pos.component.html',
    styleUrls:  ['./pos.component.css'],
    providers:[ ProductService ]
})
export class PosComponent implements OnInit {

    products: Product[];
    sortOptions: SelectItem[];
    sortKey: string;
    sortField: string;
    sortOrder: number;
    responsiveOptions;


    constructor(private productService: ProductService) {
        
    }

    ngOnInit(): void {
        this.productService.products({page: 0, size: 2}).subscribe( (data: ProductResponse) =>{
            this.products = data.content;
        });
    }

    onProductFilter(wordFilter: string){
        this.productService.products({ page: 0, size: 2, name: wordFilter, description: wordFilter  }).subscribe( (data: ProductResponse) =>{
            console.log(data);
            this.products = data.content;
        });
    }

}