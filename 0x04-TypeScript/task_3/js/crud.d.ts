import {RowId, RowElement} from "../interface.ts";

declare module crudInsert {
    export function insertRow(row: RowElement): number;
}

declare module crudDelete {
    export function deleteRow(rowId: RowId): void;
}

declare module crudUpdate {
    export function updateRow(rowId: RowId, row: RowElement): number;
}
