
const Followers = ({filteredUsers, photoUrl, handleDelete, 
    searchTerm, setSearchTerm}) => {
    return (
        <>
            
         <div className="search-box search-container">
         <h1 className="title">MOONBOOK FOLLOWERS</h1>
             <input 
             className="input"
             type="text" placeholder=" Search a follower" value={searchTerm} onChange={ (e)=> {setSearchTerm(e.target.value)}} />
           </div>
        {

        
        <div className="card-container">
                
        {
            filteredUsers.length === 0 ? <div className="no-follower-h1"> <h1>NO FOLLOWER FOUND.</h1> </div> : 
        
           filteredUsers.map((user, index)=> {
               return (

               <div key={index}>
                   <div className="card" title={user.name} >
                       <img src={photoUrl+user.name+'?set=set2'} alt="user-pic" className="user-img"/>
                       <div className="name-card">
                        <p key={index}>{index+1}. Name: {user.name} </p>
                        <p>Username:  {user.username} </p>
                       </div>
                       <button onClick={()=>{handleDelete(user.id)}} className="btn-unfollow">UNFOLLOW</button> 
                   </div>
               </div>
               )
           }
           )
        }
     

        </div>
        
        }

        {
        }
        
        </>
        
    )
}


export default Followers