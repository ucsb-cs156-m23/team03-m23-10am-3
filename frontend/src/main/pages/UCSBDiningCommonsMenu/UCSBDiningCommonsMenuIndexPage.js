import React from 'react'
import { useBackend } from 'main/utils/useBackend';

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import UCSBDiningCommonsMenuTable from 'main/components/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuTable';
import { useCurrentUser , hasRole} from 'main/utils/currentUser'
import { Button } from 'react-bootstrap';

export default function UCSBDiningCommonsMenuIndexPage() {

    const currentUser = useCurrentUser();

    const { data: ucsbdiningcommonsmenu, error: _error, status: _status } =
        useBackend(
            // Stryker disable next-line all : don't test internal caching of React Query
            ["/api/ucsbdiningcommonsmenu/all"],
            { method: "GET", url: "/api/ucsbdiningcommonsmenu/all" },
            // Stryker disable next-line all : don't test default value of empty list
            []
        );

    const createButton = () => {
        if (hasRole(currentUser, "ROLE_ADMIN")) {
            return (
                <Button
                    variant="primary"
                    href="/ucsbdiningcommonsmenu/create"
                    style={{ float: "right" }}
                >
                    Create UCSBDiningCommonsMenu
                </Button>
            )
        } 
    }

    return (
        <BasicLayout>
            <div className="pt-2">
                {createButton()}
                <h1>UCSBDiningCommonsMenu</h1>
                <UCSBDiningCommonsMenuTable ucsbdiningcommonsmenu={ucsbdiningcommonsmenu} currentUser={currentUser} />
            </div>
        </BasicLayout>
    );
}