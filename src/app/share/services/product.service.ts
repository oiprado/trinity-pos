import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ProductResponse } from '../model/product-request.model';
import { SimpleRest, Resource, Method } from 'ngx-simple-rest'

@Resource({
    host: "http://localhost:7083",
    basePath: "/api"
})
@Injectable()
export class ProductService extends SimpleRest<any> {

    @Method({
        name: "/products",
        type:"get"
    })
    public products(body): Observable<any> {
        return this.invokeResource(this, body);
        
    }

}