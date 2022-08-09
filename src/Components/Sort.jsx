import React from 'react';

function Sort(){
    const [data,setData] = React.useState([])
    const [order,setOrder] = React.useState("ASC")
    const [search,setSearch] = React.useState("")
    const [value,setValue] = React.useState([])
    console.log(data)
    const Sorting = (col) =>{
        if(order === 'ASC'){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase()?1 : -1
            );
            setData(sorted);
            setOrder('DEC')
        }

        if(order === 'DEC'){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase()< b[col].toLowerCase()?1 : -1
            )
            setData(sorted)
            setOrder('ASC')
        }
    }

    React.useEffect(()=>{
     getData()
    },[])

    const getData=()=>{
        fetch('https://fakestoreapi.com/products')
       .then((res)=>res.json())
       .then((json)=>setData(json))
    }
    return(
        <>
        <p>filter method</p>
        <div>
            <input type = "text"
            placeholder = "something add"
            onChange = {(e)=>setSearch(e.target,value)}/>
            
           <table>
            <thead>
                   <th onClick={()=>Sorting('title')}>
                    <button>sorting</button>
                    </th>
                    <th onClick = {()=>Sorting('price')}>                     <button >DEC</button>
                    </th>
           </thead>
           <tbody>
            {/* filter here */}

       



            {/* map here */}
            
                {data.map((item)=>(
                                       
                <div key = {item.id} className="table">
                <td>{item.title}</td>
                <div><td>{item.price}</td></div>
                </div>
))}


            </tbody>
            </table>
        </div>
        </>
    )

}

export { Sort }