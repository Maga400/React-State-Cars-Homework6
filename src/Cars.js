import React, { useRef, useState } from 'react'
import Item from './Item';

export default function Cars() {

    const [cars,setCars] = useState([]);
    const [model,setModel] = useState("");
    const [vendor,setVendor] = useState("");
    const [price,setPrice] = useState("");
    const [url,setUrl] = useState("");
    const [carId,setCarId] = useState("");
    const [check,setCheck] = useState(false);
    const [text,setText] = useState("Higher To Lower");
    const [text2,setText2] = useState("A-Z");



    const count = useRef(0);


    function handleSubmit(e)
    {
        e.preventDefault();

        if(model !== "" && vendor !== "" && price !== "" && url !== "" && check==false)
        {
            count.current+=1;
            setCars([
                ...cars,
                {
                    id:count.current,
                    model:model,
                    vendor:vendor,
                    price:price,
                    imageUrl:url
                }
            ]);
            setModel("");
            setVendor("");
            setPrice("");
            setUrl("");
        }
        else
        {
            if(check==true)
            {
                alert("You can update this item because this item has already been added");
            }
            else
            {
                alert("The information is not complete");

            }
        }
    }

    function handleClick(c)
    {
        setModel(c.model);
        setVendor(c.vendor);
        setPrice(c.price);
        setUrl(c.imageUrl);
        setCarId(c.id);
        setCheck(true);
    }

    function UpdateCar(id)
    {
        setCars(cars.map((f) =>
        {
            if(f.id == id && model !== "" && vendor !== "" && price !== "" && url !== "")
            {
                
                f.id = id;
                f.model =model;
                f.vendor = vendor;
                f.price =price;
                f.imageUrl = url;
                setCheck(false);
                setModel("");
                setVendor("");
                setPrice("");
                setUrl("");
            }
            
            return f;
            
        }))
    }

    function SortCars()
    {
        if(text == "Higher To Lower")
        {
            const sortedCars = [...cars].sort((a, b) => b.price - a.price);
            setCars(sortedCars);
            setText("Lower To Higher");
        }
        if(text == "Lower To Higher")
        {
            const sortedCars = [...cars].sort((a, b) => a.price - b.price);
            setCars(sortedCars);
            setText("Higher To Lower");
        }
    }

    function SortCarsAZ()
    {
        if(text2 == "A-Z")
        {
            const sortedCars = [...cars].sort((a, b) => a.model.localeCompare(b.model));
            setCars(sortedCars);
            setText2("Z-A");
        }
        if(text2 == "Z-A")
        {
            const sortedCars = [...cars].sort((a, b) => b.model.localeCompare(a.model));
            setCars(sortedCars);
            setText2("A-Z");
        }
    }

  return (
    <section style={{display:"flex",justifyContent:"center",width:"50%",margin:"auto",marginTop:"3%"}}>

        <section style={{display:"block",width:"50%",border:"5px solid black",borderRadius:"10px",padding:"20px",backgroundColor:"red"}}>
            <button style={{display:"block",backgroundColor:"blue",color:"white",width:"50%",padding:"10px",fontSize:"1.5em",borderRadius:"10px",border:"3px solid black"}} type='button' onClick={() => SortCars()}>{text}</button>
            <button style={{display:"block",backgroundColor:"blue",color:"white",width:"50%",padding:"10px",fontSize:"1.5em",borderRadius:"10px",border:"3px solid black",marginTop:"20px"}} type='button' onClick={() => SortCarsAZ()}>{text2}</button>
            {
                
                cars.map((c) =>
                (
                    <Item handleClick={handleClick} c={c}></Item>

                ))
            }
        </section>

        <section style={{display:"block",width:"50%",height:"30vh",border:"5px solid black",borderRadius:"10px",padding:"20px",backgroundColor:"green",marginLeft:"50px",paddingBottom:"50px"}}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input style={{display:"block",width:"95%",padding:"10px",borderRadius:"10px",border:"3px solid black"}} value={model} placeholder='Model' onChange={(e) => setModel(e.target.value)}></input>
                <input style={{display:"block",width:"95%",padding:"10px",marginTop:"20px",borderRadius:"10px",border:"3px solid black"}} value={vendor} placeholder='Vendor' onChange={(e) => setVendor(e.target.value)}></input>
                <input style={{display:"block",width:"95%",padding:"10px",marginTop:"20px",borderRadius:"10px",border:"3px solid black"}} value={price} placeholder='Price' onChange={(e) => setPrice(e.target.value)}></input>
                <input style={{display:"block",width:"95%",padding:"10px",marginTop:"20px",borderRadius:"10px",border:"3px solid black"}} value={url} placeholder='URL' onChange={(e) => setUrl(e.target.value)}></input>
                <button style={{width:"40%",fontSize:"1.5em",padding:"10px",border:"3px solid black",borderRadius:"10px",float:"left",marginTop:"20px",backgroundColor:"blue",color:"white"}} type='submit'>Add</button>
                <button style={{width:"40%",fontSize:"1.5em",padding:"10px",border:"3px solid black",borderRadius:"10px",marginLeft:"70px",float:"left",marginTop:"20px",backgroundColor:"blue",color:"white"}} type="button" onClick={() => UpdateCar(carId)}>UPDATE</button>
            </form>

        </section>
    </section>
  )
}
