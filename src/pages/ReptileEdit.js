import { React, useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const ReptileEdit = ( { reptiles, updateReptile} ) => {

  const {id} = useParams()
  let currentReptile = reptiles?.find(reptile => reptile.id === +id)
  console.log(currentReptile);
  const navigate = useNavigate()
  const [editReptile, setEditReptile] = useState({
    name: currentReptile.name,
    age: currentReptile.age,
    enjoys: currentReptile.enjoys,
    image: currentReptile.image
  })
  
  const handleChange = (e) => {
    setEditReptile({...editReptile, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    updateReptile(editReptile, currentReptile.id)
    navigate(`/reptileshow/${currentReptile.id}`)
  }
  return(
    <>
      <h2>Edit this profile</h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder={currentReptile.name}
            type="text" 
            onChange={handleChange} 
            value={editReptile.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            id="age"
            name="age"
            placeholder={currentReptile.age}
            type="text" 
            onChange={handleChange} 
            value={editReptile.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder={currentReptile.age}
            type="text" 
            onChange={handleChange} 
            value={editReptile.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            placeholder={currentReptile.image}
            type="text" 
            onChange={handleChange} 
            value={editReptile.image}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit} name="submit" role="button">Edit Reptile</Button>
    </>
  )
}
export default ReptileEdit;