import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyBook from "./Action"

function BookContainer(){
  const numberOfBook=useSelector(state=>state.NumberOfBooks);
  const dispatch=useDispatch();
  return (
    <>
    <div style={{textAlign:"center"}}>
        <h1>Book Store</h1>
        <h2>total book {numberOfBook}</h2>
        <button onClick={()=>{dispatch(buyBook())}}>Bay</button>
      </div>
    </>
  )
}

export default BookContainer