import {NgModule} from "@angular/core";
import {CrudRequest} from "@crud/core";

const $crud = new CrudRequest();

@NgModule({
    providers: [
        {
            provide: CrudRequest,
            useValue: $crud
        }
    ]
})
export class CrudModule {

}
