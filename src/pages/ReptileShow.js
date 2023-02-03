import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"

const ReptileShow = ({reptiles}) => {
  const {id} = useParams()
  let currentReptile = reptiles?.find(reptile => reptile.id === +id)

  return(
    <main className="reptile-show-cards">
      {currentReptile && (
        <>
          <img
          alt={`profile of a reptile named ${currentReptile.name}`}
          src={currentReptile.image}
          className="reptile-show-image"
          />
          <p>{currentReptile.name}</p>
          <p>{currentReptile.enjoys}</p>
        </>
      )}
      <NavLink to={`/reptileedit/${currentReptile.id}`} className="nav-link">
        Edit Reptile Profile
      </NavLink>
    </main>
  )
}
export default ReptileShow;