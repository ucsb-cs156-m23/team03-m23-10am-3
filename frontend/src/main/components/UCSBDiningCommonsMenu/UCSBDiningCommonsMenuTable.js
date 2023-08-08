import React from "react";
import OurTable, { ButtonColumn } from "main/components/OurTable";

import { useBackendMutation } from "main/utils/useBackend";
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDiningCommonsMenuUtils"
import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export default function UCSBDiningCommonsMenuTable({
    ucsbdiningcommonsmenu,
    currentUser,
    testIdPrefix = "UCSBDiningCommonsMenuTable"}) {

    const navigate = useNavigate();

    const editCallback = (cell) => {
        navigate(`/ucsbdiningcommonsmenu/edit/${cell.row.values.diningCommonsCode}`)
    }

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(
        cellToAxiosParamsDelete,
        { onSuccess: onDeleteSuccess },
        ["/api/ucsbdiningcommonsmenu/all"]
    );
    // Stryker restore all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    /*
    "id": 2,
    "diningCommonsCode": "Portola",
    "name": "Pad Thai",
    "station": "Entree"
    */

    const columns = [
        {
            Header: 'id',
            accessor: 'id', // accessor is the "key" in the data
        },

        {
            Header: 'DiningCommonsCode',
            accessor: 'diningCommonsCode',
        },

        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Station',
            accessor: 'station',
        }
    ];

    if (hasRole(currentUser, "ROLE_ADMIN")) {
        columns.push(ButtonColumn("Edit", "primary", editCallback, testIdPrefix));
        columns.push(ButtonColumn("Delete", "danger", deleteCallback, testIdPrefix));
    } 

    return <OurTable
        data={ucsbdiningcommonsmenu}
        columns={columns}
        testid={testIdPrefix}
    />;
};

