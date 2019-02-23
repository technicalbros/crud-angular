import {NgModule} from "@angular/core";
import {CrudRequest} from "@crud/core";
import {MatSnackBar} from "@angular/material";
import {CrudModule} from "./CrudModule";

@NgModule({
    imports: [
        CrudModule
    ]
})
export class CrudMaterialToastModule {

    constructor($crud: CrudRequest, snackBar: MatSnackBar) {

        $crud.config(config => {

            config.callbacks.notify = ({message, type}) => new Promise(resolve => {
                snackBar.open(message, "Hide", {
                    panelClass: `${type}-snackbar`,
                    duration: 3000
                })
            })

            return config;
        })

    }

}
