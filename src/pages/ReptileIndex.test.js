import React from "react"
import {render, screen} from "@testing-library/react"
import ReptileIndex from "./ReptileIndex"
import mockReptiles from "../mockReptiles"
import { BrowserRouter } from "react-router-dom" 

describe("<ReptileIndex />", () => {
    it("renders reptile cards", () => {
        render(
            <BrowserRouter>
                <ReptileIndex reptiles={mockReptiles} />
            </BrowserRouter>
        )
        mockReptiles.forEach((reptile) =>{
            const reptileName = screen.getByText(`${reptile.name}`)
            expect(reptileName).toBeInTheDocument()
        })
    })
}) 