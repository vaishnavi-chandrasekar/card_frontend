import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect, } from 'react';
import Create from './Create';
import Modal from 'react-modal';
import Card from './Card';

function App() {
  const [userid, setUsersid] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let items = await fetch(
          "http://localhost:3001/user/:id"
        );  
        let userdata = await items.json();
        setUsersid(userdata);

      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  }, []);
  

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
  return (
    <>
    <div className="App">
     
        
      <div className='buttons' >
      <button type='submit' className='todo' onClick={userid}>Todo</button>
      <button type='submit' className='doing' onClick={userid}>Processing</button>
      <button type="submit" className='done' onClick={userid}>Done</button>
      </div>
      
      <div className='modal'>
      <button type='submit' className='user'onClick={setModalIsOpenToTrue}>Create User</button>
      <Modal isOpen={modalIsOpen}  className="modalstyle">
      <button onClick={setModalIsOpenToFalse} className="cancelbtn">x</button>

      <Create/>
                <button onClick={setModalIsOpenToFalse} className="cancel">Cancel</button>

                
            </Modal>
      </div>
      
    </div>
    <div className='cards'>
     <Card/>
    </div>
   
    </>
  );
}

export default App;
