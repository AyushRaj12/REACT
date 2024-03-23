import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const[error,setError]=useState();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0||enteredAge.trim().length===0)
    { 
      setError({
        title:'Invalid input.',
        message:'please enter a valid user name and age (non-empty values).'
      })
      return;
    }
    if(+enteredAge<1)//+ convert string to number to compare with a number
    {
      setError({
        title:'Invalid age.',
        message:'please enter a valid age (>0).'
      })
      return;}
      props.onAddUser(enteredUsername,enteredAge)
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
    {error && <ErrorModal title={error.title} message ={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
}
export default AddUser;
