import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound"

import "@testing-library/jest-dom"

describe("<NotFound /", () => {
    it("displays the '404' error", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const error = screen.getByText(/404/)
        expect(error).toBeInTheDocument()
    })
})