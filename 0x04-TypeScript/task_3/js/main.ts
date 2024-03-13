/// <reference path = "./crud.d.ts" />

import {RowID, RowElement} from "./interface.ts";
import * as CRUD from "./crud.js";

const row: RowElement {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowId: RowID = newRowId = CRUD.insertRow();

const updateRow: RowElement;
row.age = 23;

CRUD.updateRow(newRowId, updateRow);

CRUD.deleteRow(newRowId);
