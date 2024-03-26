import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './pdfdocument.css';

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {DueContext} from "../duepayment/duepayment";
import {Button} from "primereact/button";
/*
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});*/
const Pdfdocument = () => {
    const customers=useContext(DueContext)
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;
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

export default Pdfdocument;
