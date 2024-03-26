import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './pdfdocument.css';

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {DueContext} from "../duepayment/duepayment";
import {Button} from "primereact/button";
import jsPDF from "jspdf";
import "jspdf-autotable";
const Pdfdocument = () => {
    const customers=useContext(DueContext)
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download"  text  onClick={() => exportPDF(customers)}/>;

   return (
        <div className="pdfdocument">
            {/*<Document>*/}
            {/*    <Page size="A4" style={styles.page}>*/}
            {/*        <View style={styles.section}>*/}
                        <DataTable value={customers}  paginator rows={3}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                                   currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowsPerPageOptions={[3, 6, 9, 12]}  sortField="_id" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="_id" header="Customer Id" sortable style={{ width: '20%' }}></Column>
                            <Column field="firstName" header="First Name" sortable style={{ width: '20%' }}></Column>
                            <Column field="lastName" header="Last Name" sortable style={{ width: '20%' }}></Column>
                            <Column field="email" header="Email" sortable style={{ width: '20%' }}></Column>
                            <Column field="phone" header="Phone" sortable style={{ width: '20%' }}></Column>
                        </DataTable>
            {/*        </View>*/}

            {/*    </Page>*/}
            {/*</Document>*/}
        </div>
    );
}

Pdfdocument.propTypes = {};

Pdfdocument.defaultProps = {};

const exportPDF = (customers) => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);

    const title = "Due Payment Report";
    const headers = [["FIRST NAME", "LAST NAME","EMAIL", "MOBILE NO"]];
    doc.setFontSize(15);
    const data = customers.map(elt=> [elt.firstName, elt.lastName,elt.email,elt.phone]);
    let content = {
        startY: 50,
        head: headers,
        body: data
    };
    doc.autoTable(content);
    doc.save("report.pdf")
}

export default Pdfdocument;
