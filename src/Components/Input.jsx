// import React from 'react'
// function Input(){
//     // const [input,setTitle] = React.useState("");
//     const [input,setTitle] = React.useState({
//         title:""
//     });
// const [entry,setEntry] = React.useState([]);
// // console.log(entry)


// React.useEffect(()=>{
    
//     fetch(`http://localhost:3000/input`)
//     .then((res)=>res.json())
//     .then((res)=>setEntry(res))
//     .catch((err)=>console.log(err))
//     // console.log(entry)

// }, []);

//  const HandleInput=(e)=>{
//     const {name,value} = e.target
//     setTitle({...input,[name]:value})
   
//  }
// //  const HandleInput = (e)=>{
// //     setTitle(e.target.value)
    
// //  }
 
    
// const HandleSubmit=(e)=>{
//     e.preventDefault();
//     // return await axios
    
//     fetch(`http://localhost:3000/input`,{
//         method:"POST",
//         body:JSON.stringify(input),
//         headers:{
//             "Content-type":"application/json"
//         }
//     })
//     .then((res)=>res.json())  
//     // .then((res)=>setEntry(res))
//     //data is stored on the page
//     .catch((res)=>console.log(res))
//     // .catch((err)=>console.log(err))
//     // console.log(entry)
// }
// console.log(entry)


// const handleDelete=(id)=>{
//     const updateData = entry.filter((item)=>item.id!==id);

//     setEntry(updateData)
//  }

// const { title } = input

//     return(
//         <>
        
//             <form onSubmit = {HandleSubmit}>
//             <input type = "text" 
//             placeholder='something to add'
//             value = {title}
//             name = "title"
//             onChange={HandleInput}/>

//             {/* <input type = "text"
//             placeholder= 'name'
//             value = {input}
//             onChange = {HandleInput}/> */}
//             {/* <input type = "submit" value = "Submit"/> */}
//             <button value = "Submit">Submit</button>
//             </form>

//             {/* console.log(entry) */}
            
//               <div>
               
//                 {entry.map((item)=>(
//                 //  <div> key={item.id}
//                    <div key = {item.id}> 
                   
                    
//                     <h1>{item.title}</h1>
//                      <button onClick = {handleDelete}>handleDelete</button>
//                      {/* <button onChange={()=>handleDelete(id)}>Delete</button> */}
//                        {/* <button>del</button> */}

//                     {/* </div> */}
//                </div>

//     ))};
//             </div>
        
//         </>
//     )
// }
// export { Input }




import React from "react";
import {v4 as uuid} from "uuid"
function Details(){
    const [Product,setProduct] = React.useState({
    title : "",
    gender :"",
     price:"",
     category:"",
     image:"",
    //  uuid:"",
     id:uuid()
})
const [Todo,setTodos] = React.useState([])
React.useEffect(()=>{
    fetch(`http://localhost:3000/data`)
    .then((res)=>res.json())
    .then((res)=>{
    setTodos(res)
});
    // .catch((err)=>console.log(err));
    

  },[])
//   const handleDelete = (id)=> {
//     const updateData = Todo.filter((item)=>item.id!==id);
//     setTodos(updateData)


// }

    
    const setProduct1 = (e) =>{
        const {name,value} = e.target;
    //   setProduct(e.target.value)
    setProduct({...Product, [name]:value})

    }

    const handleChange=(e)=>{
        e.preventDefault()
        // console.log(Product)
      fetch(`http://localhost:3000/data`,{
         method:"POST",
         body:JSON.stringify(Product),
         headers:{
             "Content-type":"application/json"
         }
     })
     .then((res)=>res.json())        //data is stored on the page
     .then((res)=>console.log(res));
     }
console.log(Todo)
//    Todo.sort(function(a,b){
//     a.title.lowercase()
//    })    


   
const {title,price,category,gender,image,id} = Product;

return(
    <>
    {/* <h1>hello my dear</h1> */}
    <div className="Style">
    <form onSubmit = {handleChange}>
        <input type = "text" 
        placeholder="enter the title" 
        onChange = {setProduct1}
        name = "title"
        value = {title}/>
        <br/>

        <input type = "text" 
        placeholder="enter the price" 
        onChange = {setProduct1}
        name = "price"
        value = {price}/>
        <br/>

        <select gender onChange = {setProduct1} value = {gender} name = "gender">
            <option>select the gender</option>
            <option>male</option>
            <option>female</option>
        </select>
        <br/>

        <input type = "text" 
        placeholder="enter the category" 
        onChange = {setProduct1}
        name = "category"
        value = {category}/>
        <br/>

        <input type = "image"
        onChange = {setProduct1}
        name = "image"
        value = {image}
        alt= ""/>

        <input type = "submit"
        value = "Submit"/>
        <br/>
    </form>
    </div>
    
    {Todo.map((item)=>(
      <div><h1>title:{item.title}</h1>
     {/* <img src = {item.image}/> */}
      <h1>Price:{item.price}</h1>
      <h1>Gender:{item.gender}</h1>
      <h1>Category:{item.category}</h1>
      {/* <button onChange={()=>handleDelete(id)}>Delete</button> */}
      {/* <img src = {item.image}/> */}
      </div>
      ))}
      
    </>
)
}
export { Details }