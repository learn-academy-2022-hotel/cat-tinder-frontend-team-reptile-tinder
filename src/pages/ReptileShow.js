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
          <p><strong>Name:</strong> {currentReptile.name}</p>
          <p><strong>Age:</strong>  {currentReptile.age}</p>
          <p><strong>Enjoys:</strong>  {currentReptile.enjoys}</p>
        </>
      )}
      <div className="display-flex">
        <NavLink to={`/reptileedit/${currentReptile?.id}`} className="nav-link">
          <Button style={{margin: "10px"}} outline color="success">Edit Reptile Profile</Button>
        </NavLink>
        <NavLink to="/reptileindex">
          <Button outline color="success" style={{margin: "10px"}} onClick={() => { deleteReptile(id)}}>Delete Reptile Profile</Button>
        </NavLink>
      </div>
    </main>
  )
}
export default ReptileShow;