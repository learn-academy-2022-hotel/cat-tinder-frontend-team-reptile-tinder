import {React, useState} from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const ReptileNew = ( {createReptile} ) => {
  
  const navigate = useNavigate()
  const [newReptile, setNewReptile] = useState({
    name: '',
    age: '',
    enjoys: '',
    image: ''
  })
  
  const handleChange = (e) => {
    setNewReptile({...newReptile, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createReptile(newReptile)
    navigate("/reptileindex")
  }
  return(
    <>
      <h2>Make a profile</h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your reptile's name"
            type="text" 
            onChange={handleChange} 
            value={newReptile.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="Enter your reptile's age"
            type="text" 
            onChange={handleChange} 
            value={newReptile.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="What does your reptile enjoy?"
            type="text" 
            onChange={handleChange} 
            value={newReptile.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="Place your reptile image url here"
            type="text" 
            onChange={handleChange} 
            value={newReptile.image}
          />
        </FormGroup>
      </Form>
      <Button outline color="success" onClick={handleSubmit} name="submit" role="button">Create Reptile</Button>
    </>
  )
}
export default ReptileNew;