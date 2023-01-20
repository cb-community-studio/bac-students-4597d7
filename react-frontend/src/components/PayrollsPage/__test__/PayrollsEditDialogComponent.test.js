import React from "react";
import { render, screen } from "@testing-library/react";

import PayrollsEditDialogComponent from "../PayrollsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders payrolls edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PayrollsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("payrolls-edit-dialog-component")).toBeInTheDocument();
});
