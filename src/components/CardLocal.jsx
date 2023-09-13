

const CardsLocal = ({photoUrl, handleDelete, followers }) => {

    return (
        <>
      
        {
        
        <div className="card-container">
                
        {
            followers.length === 0 ? <div className="no-follower-h1"> <h1>NO FOLLOWER FOUND.</h1> </div> : 
        
            followers.map((user, index)=> {
               return (

               <div key={index}>
                   <div className="card" title={user.name} >
                       <img src={photoUrl+user.name+'?set=set2'} alt="user-pic" className="user-img"/>
                       <div className="name-card">
                        <p key={index}>{index+1}. Name: {user.name} </p>
                        <p>Description: {user.description} </p>
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
        
        </>
        
    )
}

export default CardsLocal