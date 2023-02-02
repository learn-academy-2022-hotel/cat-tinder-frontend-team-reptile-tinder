import React from "react"
import { render, screen } from "@testing-library/react"
import {MemoryRouter, Routes, Route} from "react-router-dom"
import ReptileShow from "./ReptileShow"
import mockReptiles from "../mockReptiles"

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/reptileshow/1"]}>
            <Routes>
                <Route path="reptileshow/:id" element={<ReptileShow reptiles={mockReptiles}/>} />
            </Routes> 
        </MemoryRouter>
    )
}

describe("<ReptileShow />", () => {
    it("renders reptile cards with enjoys", () => {
        renderShow()

        expect(screen.getByText(`${mockReptiles[0].enjoys}`)).toBeInTheDocument()
    })
})