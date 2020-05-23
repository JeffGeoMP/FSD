import { Error } from '../modelos/Error';

export class ReporteErrores {
    private errores: any;
    private listaErrores: Array<Error>;

    constructor(errores: any) {
        this.errores = errores;
        this.listaErrores = [];

        this.updateList();
    }

    public updateList(): void {
        this.errores['error'].forEach((element: any) => {
            this.listaErrores.push(new Error(element['idError'], element['tipo'],
                element['linea'], element['columna'], element['descripcion']));
        });
    }

    public getErrorList(): string {
        let errorListData: string = '<table class="table">';
        errorListData += '<thead><tr><th scope="col">Id</th><th scope="col">Tipo</th><th scope="col">Descripcion</th><th scope="col">Fila</th><th scope="col">Columna</th></tr></thead><tbody>';
        this.listaErrores.forEach(element => {
            errorListData += '<tr scope="row">';
            errorListData += '<th>' + element.getIdError() + '</th>';
            errorListData += '<th>' + element.getTipo() + '</th>';
            errorListData += '<th>' + element.getDescripcion() + '</th>';
            errorListData += '<th>' + element.getLinea() + '</th>';
            errorListData += '<th>' + element.getColumna() + '</th>';
            errorListData += '</tr>';
        });
        errorListData += '</tbody></table>';
        return errorListData;
    }
};
