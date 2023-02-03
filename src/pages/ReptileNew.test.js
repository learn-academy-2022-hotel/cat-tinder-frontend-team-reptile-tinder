import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import ReptileNew from "./ReptileNew"

describe("<ReptileNew /", () => {
    
    render(
        <BrowserRouter>
            <ReptileNew />
        </BrowserRouter>
    )

    it("can see the title of the page", () => {
        const element = screen.getByText(/make/i)
        expect(element).toBeInTheDocument()
    })

})