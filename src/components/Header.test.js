import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Header from "./Header"

import "@testing-library/jest-dom"

describe("<Header /", () => {
    it("makes sure the header welcomes the user", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const greeting = screen.getByText(/welcome/i)
        expect(greeting).toBeInTheDocument()
    })
})