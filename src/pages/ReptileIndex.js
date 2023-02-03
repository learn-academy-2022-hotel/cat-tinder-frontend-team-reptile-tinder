import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const ReptileIndex = ({reptiles}) => {
  return(
    <main className="reptile-index-cards">
      {reptiles?.map((reptile, index) => {
        return (
          <Card style={{width: '18rem'}} className="reptile-index-cards" key={index}>
            <img className="card-image" alt={`profile of a reptile named ${reptile.name}`} src={reptile.image}/>
            <CardBody>
              <CardTitle tag="h5">
                {reptile.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Age: {reptile.age}
              </CardSubtitle>
              <NavLink to={`/reptileshow/${reptile.id}`} className="nav-link">
                See more about me!
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}
export default ReptileIndex;