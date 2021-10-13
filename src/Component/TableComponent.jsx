
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,

    headerStyle: () => {
        return { width: "6%" };
    },
}, {
    dataField: 'nama',
    text: 'Nama',
    sort: true

}, {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true
},
{
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faInfo} /> detail
                </Button>

                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faEdit} /> Edit
                </Button>

                <Button color="danger" className="mr-2">
                    <FontAwesomeIcon icon={faTrash} /> Hapus
                </Button>

            </div>
        )
    }
}, 




];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const TableComponent = (props) => {
    return (
        <Container>
            <ToolkitProvider bootstrap4 keyField="id" data={props.user} columns={columns} defaultSorted={defaultSorted} search>
                {(props) => (
                    <div>
                        <div>
                        <SearchBar {...props.searchProps} placeholder="Search.."/>
                        </div>
                        <BootstrapTable
                        {...props.baseProps}  pagination={ paginationFactory() } />
                    </div>
                ) }
            </ToolkitProvider>

        </Container>
    );
};

export default TableComponent
