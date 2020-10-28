import { Component } from "@angular/core";

@Component({
    selector:    'product-list',
    styleUrls:   ['./product-list.component.css'],
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {

    products: any = [
        {
            name: "Head & Shouders 2",
            price: 15000,
            quantity: 2
        },
        {
            name: "Head & Shouders 3",
            price: 15000,
            quantity: 2
        },
        {
            name: "Head & Shouders 2",
            price: 15000,
            quantity: 2
        },
        {
            name: "Coco Saurio",
            price: 15000,
            quantity: 2
        }
    ];

}