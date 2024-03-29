import {CsvFilter} from "../csvFilter";

describe('CSV filter',() => {
    const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    const emptyField = '';

    it('allows for correct lines only', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving();
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const result = csvFilter.filteredLines;

        expect(result).toEqual([header, invoiceLine]);
    });

    it('excludes lines with both tax fields populated as they are exclusive', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving('21', '7');
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const result = csvFilter.filteredLines;

        expect(result).toEqual([header]);
    });

    it('excludes lines with both tax fields empty as one is required', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving('', '');
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const result = csvFilter.filteredLines;

        expect(result).toEqual([header]);
    });

    it('excludes lines with non decimal tax fields', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving('XYZ', '');
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const result = csvFilter.filteredLines;

        expect(result).toEqual([header]);
    });

    it('excludes lines with both tax fields populated even if non decimal', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving('XYZ', '7');
        const csvFilter = CsvFilter.create([header, invoiceLine]);

        const result = csvFilter.filteredLines;

        expect(result).toEqual([header]);
    });

    function fileWithOneInvoiceLineHaving(ivaTax: string = '21', igicTax: string = emptyField) {
        const invoiceId = '1';
        const invoiceDate = '02/05/2019';
        const grossAmount = '1000';
        const netAmount = '790';
        const concept = 'ACER Laptop';
        const cif = 'B76430134';
        const nif = emptyField;
        return [invoiceId, invoiceDate, grossAmount, netAmount, ivaTax, igicTax, concept, cif, nif].join(',');
    }
});
