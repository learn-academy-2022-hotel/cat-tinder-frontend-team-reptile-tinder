import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import ReptileEdit from "./ReptileEdit"

describe("<ReptileEdit />", () => {
    
    const testReptile = {
        id: 1,
        name: 'Shakespeare',
        age: 7,
        enjoys: 'Eating crickets, a lot. Being pet on his little head. Adventuring',
        image: 'https://images.unsplash.com/photo-1619153832248-6458a856d91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80'
    }

    render(
        <BrowserRouter>
            <ReptileEdit testReptile={testReptile}/>
        </BrowserRouter>
    )

    it("indicates you can edit the profile", () => {
        screen.debug()
        const element = screen.getByText(/profile/i)
        expect(element).toBeInTheDocument()
    })

})