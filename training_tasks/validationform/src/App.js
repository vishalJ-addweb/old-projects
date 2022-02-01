
import React, {useState} from 'react';
import './App.css';

function App() {
    const [show,setshow] = useState(false);
    const [data, setdata] = useState({
        name:"",
        email: ""
    });

    function handledatachange(e){
        const name = e.target.name;
        const value = e.target.value;

        setdata({...data, [name]: value})
    }

    const [records,setrecords] = useState([]);
    const names = [];
    const emails = [];


    for(let i=0;i<records.length;i++){
    names.push(records[i].name);
  }

    
    for(let i=0;i<records.length;i++){
    emails.push(records[i].email);
  }


    function handlesubmit(e){
        e.preventDefault();
        // console.log({name});
        const newrecord = {...data, id: new Date().getTime.toString()};
        // console.log(newrecord.id)
        // console.log(newrecord.name)
        var newName = newrecord.name;
        var newEmail = newrecord.email;
        
        // console.log(records)

        for(let i = 0; i<records.length;i++){        
            if (names[i] === newName){
              alert("Name Already Exists")
              return 
             
            }
            else if (emails[i] === newEmail){
              alert("Email Already Exists!")
              return
            
            }
        }
        setshow(true)
        return setrecords([...records, newrecord]);
    }
   
    return (
    
        <>
    <div className="wrapper">
      <h1>Your Details here</h1>
      <form onSubmit={handlesubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input type="text" name="name" id="name" value={data.name} onChange={handledatachange} 
          //  onBlur={handleBlur}
          />
         </label>
         {/* {touched.name && error.name ? <span style={{color:'red'}}>{error.name}</span>:null} */}
       </fieldset>
       {/* <c maxWidth="xs">
            <h3> your DetailsNames</h3>
            <TextField 
            label="Name"
              name="name"
               
               onChange={handlename}
               margin="normal" 
               variant="outlined"
            autoComplete="off"
             fullWidth  />
             </c */}
             <br/>
       <fieldset>
         <label>
           <p>Email</p>
           <input type="email" name="email" id="email" value={data.email} onChange={handledatachange} />
         </label>
       </fieldset>
       <button type="submit" 
        style={{marginTop:"1rem"}}
        // onClick={handlesubmit}
         >Submit</button>
      </form>
    </div>
<div>
   
</div>
        {show?
            <p className="container">{records.map((itemval)=>{
              return <>
            <b>your enteres details :</b>
            <p>Name : {itemval.name}
            <br />
            Email : {itemval.email}</p>
                        </>})}</p>:null}
                        
                        </>);
}

export default App;
