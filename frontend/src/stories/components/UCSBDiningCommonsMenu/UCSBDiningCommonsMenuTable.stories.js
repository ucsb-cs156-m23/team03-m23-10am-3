import React from 'react';
import UCSBDiningCommonsMenuTable from 'main/components/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuTable';
import { UCSBDiningCommonsMenuFixtures } from 'fixtures/UCSBDiningCommonsMenuFixtures';
import { currentUserFixtures } from 'fixtures/currentUserFixtures';
import { rest } from "msw";

export default {
    title: 'components/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuTable',
    component: UCSBDiningCommonsMenuTable
};

const Template = (args) => {
    return (
        <UCSBDiningCommonsMenuTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    UCSBDiningCommonsMenu: []
};

export const ThreeItemsOrdinaryUser = Template.bind({});

ThreeItemsOrdinaryUser.args = {
    UCSBDiningCommonsMenu: UCSBDiningCommonsMenuFixtures.threeMenuItems,
    currentUser: currentUserFixtures.userOnly,
};

export const ThreeItemsAdminUser = Template.bind({});
ThreeItemsAdminUser.args = {
    UCSBDiningCommonsMenu: UCSBDiningCommonsMenuFixtures.threeMenuItems,
    currentUser: currentUserFixtures.adminUser,
}

ThreeItemsAdminUser.parameters = {
    msw: [
        rest.delete('/api/ucsbdiningcommonsmenu', (req, res, ctx) => {
            window.alert("DELETE: " + JSON.stringify(req.url));
            return res(ctx.status(200),ctx.json({}));
        }),
    ]
};
