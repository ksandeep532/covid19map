import React from 'react'

 const Loading =()=> {
  return (
    <>
      <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",}}>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
    </>
  );
}

export default Loading;