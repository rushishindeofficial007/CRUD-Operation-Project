import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link,useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name,setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  
  const onSubmit = () =>{
    // e.preventDefault();
  const newUser  = {
    id : uuid(),
    name 
  } 
    addUser(newUser);
    navigate('/');

  } 
  const onChange = (e) =>{
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text"  value={name} onChange={onChange}
         placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}