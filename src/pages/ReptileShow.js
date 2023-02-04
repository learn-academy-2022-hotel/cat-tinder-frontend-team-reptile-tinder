import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const ReptileShow = ({reptiles, deleteReptile}) => {
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
        <Button>Edit Reptile Profile</Button>
      </NavLink>
      <NavLink to="/reptileindex">
        <Button onClick={() => { deleteReptile(id)}}>Delete Reptile Profile</Button>
      </NavLink>
    </main>
  )
}
export default ReptileShow;