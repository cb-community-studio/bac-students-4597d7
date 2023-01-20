import React from "react";
import { render, screen } from "@testing-library/react";

import PayrollsPage from "../PayrollsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders payrolls page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PayrollsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("payrolls-datatable")).toBeInTheDocument();
    expect(screen.getByRole("payrolls-add-button")).toBeInTheDocument();
});
