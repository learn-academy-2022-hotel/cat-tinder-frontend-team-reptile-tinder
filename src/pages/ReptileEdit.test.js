import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import ReptileEdit from "./ReptileEdit"
import mockReptiles from "../mockReptiles";

describe("<ReptileEdit />", () => {
    
    render(
        <BrowserRouter>
            <ReptileEdit />
        </BrowserRouter>
    )

    it("indicates you can edit the profile", () => {
        const element = screen.getByText(/profile/i)
        expect(element).toBeInTheDocument()
    })

})