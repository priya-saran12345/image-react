import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [photo, setphoto] = useState("")
  const [result, setresult] = useState([])

  const changePhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=GrJE2Ky6iDGWyjYKFO77u-4KsdAKimA46mfUvLikUg8`)
      .then((res) => {
        setresult(res.data.results);
      })
  }
  return (
    <>
      <div className='container text-center my-3'>
        <input type='text' className='form-control ' value={photo} onChange={(e) => {
          setphoto(e.target.value);
        }
        }>

        </input>
        <button type='submit' onClick={changePhoto}

          className='btn btn-primary my-3' >get photo</button>
      </div>
      <div className='container '>
        <div class='row text-center text-lg-start '>
         {result.map((value)=>
         {
          return(
            <div class='col-lg-3 col-md-4 col-6  '>
            <a href='#' class='d-block mb-4 h-100'>
              <img class='img-fluid img-thumbnail' src={value.urls.small}
              />
            </a>
          </div>
          )
         })} 

        </div>

      </div>


    </>
  );
}

export default App;
