// import React from 'react';

import { useState } from "react";

const Body = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };

  const RemoveItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const FinishedItem = (index)=>{
    list.splice(index, 0,'updated');
    //setList([...list]);

  };

  return (
    <div className="bd">
      
      <div id="main-body">

      <div className="pb-2 write">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-center">
                    <input type="text" className="form-control form-control-lg" 
                    id="exampleFormControlInput1"
                      placeholder="Add new..."
                      onChange={(e) => setItem(e.target.value)} />
                      
                        {/* <input type="date" className="form-control" /> */}
                    <div>
                      <button type="button" className="btn btn-primary add" onClick={AddToList} >Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        <table className="tbl table mb-4">
        <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
          <tbody>
            {list.length !== 0 ? (
              list.map((element, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{i+1}</td>
                    <td>{element}</td>
                    <td>
                    <img className="ok" src="https://icon-library.com/images/waiting-icon-gif/waiting-icon-gif-1.jpg" alt="Daily To-Do List " />
                    </td>
                    <td>
                      {" "}
                      <button className="btn btn-danger"
                        onClick={() => {
                          RemoveItem(i);
                        }}>  Remove </button>{" "}
                    
                      <button type="submit" className="btn btn-success ms-1" onClick={FinishedItem} >Finished</button> </td>
                  </tr>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>

        <hr />
        
        <h3 className="total-task"> Your Total task is : <span>  {list.length} </span></h3>
      </div>
    
    {/* sample  */}
   
    {/* sample  */}
      
    </div>
  );
};

export default Body;
