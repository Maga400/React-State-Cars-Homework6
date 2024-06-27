import React from 'react'

export default function Item({c,handleClick}) {
  return (
    <ul style={{padding:"20px",borderRadius:"10px",border:"5px solid black",display:"flex",justifyContent:"start",marginTop:"20px"}} key={c.id} onClick={() => handleClick(c)}>
                        <section>
                            <img style={{width:"150px",height:"150px",borderRadius:"10px",border:"3px solid black"}} src={c.imageUrl}></img>
                        </section>
                        <section >
                            <h1 style={{fontSize:"1.5em",marginLeft:"30px",color:"white",textAlign:"start",marginTop:"5px"}}> {c.id} </h1>
                            <h1 style={{fontSize:"1.5em",marginLeft:"30px",color:"white",textAlign:"start",marginTop:"5px"}}> {c.model} </h1>
                            <h1 style={{fontSize:"1.5em",marginLeft:"30px",color:"white",textAlign:"start",marginTop:"5px"}}> {c.vendor} </h1>
                            <h1 style={{fontSize:"1.5em",marginLeft:"30px",color:"white",textAlign:"start",marginTop:"5px"}}> {c.price} </h1>

                        </section>


                    </ul>
  )
}
