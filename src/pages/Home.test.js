import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Home from "./Home"

import "@testing-library/jest-dom"

describe("<Home /", () => {
    it("includes a catchy catch phrase", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        // screen.logTestingPlaygroundURL()
        const catchPhrase = screen.getByRole("catchphrase")
        expect(catchPhrase).toHaveAttribute("role", "catchphrase")
    })
})