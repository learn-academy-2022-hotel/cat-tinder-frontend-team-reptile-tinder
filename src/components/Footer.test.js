import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer"

import "@testing-library/jest-dom"

describe("<Footer /", () => {
    it("includes the creators' names", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const creators = screen.getByText(/quillen/i && /cantrell/i)
        expect(creators).toBeInTheDocument()
    })
})