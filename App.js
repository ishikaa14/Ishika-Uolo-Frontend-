import React, { useEffect , useState } from 
"react";
function App(){
    const [users , setUsers ] = useState([]);
    const [skip ,setskip]    = useState(0);

    const fetchUsers =async() =>{
        const res = await 
        fetch('https://dummyjson.com/users?skip=0&limit=10');
        const data = await res.join();
        setUsers(data.users);

    };
    useEffect(()=>{
        fetchUsers();
   [skip] });
}

const deleteUser =(id) => {
    setUser(users.filter((user0=>
        user.id !== id))
    )
} ;
return(
    <div style ={{padding:"20px"},
fontFamily:"Arial"})>
<h1> User List </h1>
{/* User Cards */}
<div style={{ display : "grid,
    gridTemplateColumns:"repeat(3, 1 fr)" , gap:
"20px "}}><</div>
{users.map((user) =>(
   <div
   key={user.id}
   style={{
    border:"1px solid #ccc",
    padding: "20px",
    borderRadius : :"10px",
    boxShadow: "0px 2px 6px"
    rgba(0, 0, 0, 0.1),
    textAlign "center"
   }} 
   >
   <img
   src = {user.image}
   alt = "profile"
   style={{
    width:"80px",
    height:"80px",
    borderRadius:"50%",
    objectFit:"cover",
   }}
   />
   <h3>{user.firstName}</h3>
   <p>{user.email}</p>
   <button
   onClick={()=>
    deleteUser(user.id)}
    style = {{
        background: "red",
        color : "white",
        padding : "8px 15px",
        border:"none",
        boaderRadius:"5px",
        cursor : "pointer",
        marginTop:"10px",
    }}
    >
    Delete
    </button>
    </div>
))}
</div>
{/* Pagination */}
<div style ={{ marginTop:"20px",
    display:"flex", gap: "10px" }}>
        <button
        onClick={() =>  setskip (skip -10)}
        disabled={skip === 0}
        style ={{
            padding : "10px 20px ",
            border: "none",
            background: "#2d7ff9",
            color:"White",
            borderRadius:"5px",
            cursor : "pointer",
    
        }}

        >Previous
        </button>
        <button
        onClick={()=> setSkip(skip+ 10)}
        style={{
            padding : "10px 20px ",
            border: "none",
            background: "#2d7ff9",
            color:"White",
            borderRadius:"5px",
            cursor : "pointer",
        }}
        >
            Next
        </button>
        </div>
        </div>
    );
}
export default App;

