import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AddFollower = ({name,username,
    description,setName,setUserName,
    setDescription,handleAdd ,
    handleAddLocal, nameLocal, 
    setNameLocal, handleResetLocal,handleReset,
    isValidUserName, isValidName, isValidDescription,
    isValidNameLocal
}) => {
    return(
        <Box
        component="form"
        noValidate
        
        autoComplete="off"
      >
       
        <div className='add-follow-container'>
            <div className='add-follow-card'>
                <h1 className="title" >ADD A FOLLOWER (API) </h1>
                <TextField placeholder=" Enter Name" 
                    onChange={(e)=> {setName(e.target.value)}}
                    value={name}
                    helperText={!isValidName ? 'This field is required': ''}
                    className="input"
                    label=" Enter Name"
                    variant="outlined"
                ></TextField>
                <TextField placeholder=" Enter Username"
                    onChange={(e)=> {setUserName(e.target.value)}}
                    value={username}
                    helperText={!isValidUserName ? 'This field is required': ''}
                    className="input username"
                    label=" Enter Username"
                    variant="outlined"
                ></TextField>
                {/* <button onClick={()=> {handleAdd(name,username)}} 
                disabled={name.length === 0 || username.length === 0}
                variant="contained" 
                ></button> */}
                <Button  variant="contained" onClick={handleReset}
                >Reset</Button>
                <Button 
                    onClick={()=> {handleAdd(name,username)}} 
                    disabled={name.length === 0 || username.length === 0}
                    variant="contained" 
                    className='btn-add-follwer'
                    >Add
                </Button>
            </div>


            <div className='add-follow-card'>
                <h1 className="title" >ADD A FOLLOWER (LOCAL) </h1>
                <TextField placeholder=" Enter Name" 
                    onChange={(e)=> {setNameLocal(e.target.value)}}
                    value={nameLocal}
                    className="input"
                    label=" Enter Name"
                    variant="outlined"
                    helperText={!isValidNameLocal ? 'This field is required': ''}

                ></TextField>
                <TextField placeholder=" Enter description"
                    onChange={(e)=> {setDescription(e.target.value)}}
                    value={description}
                    className="input description"
                    label=" Enter description"
                    variant="outlined"
                    required
                    helperText={!isValidDescription ? 'This field is required': ''}

                ></TextField>
                {/* <button onClick={()=> {handleAdd(name,username)}} 
                disabled={name.length === 0 || username.length === 0}
                variant="contained" 
                ></button> */}
                <Button  variant="contained" onClick={handleResetLocal}>Reset</Button>
                <Button 
                    onClick={()=> {handleAddLocal(nameLocal,description)}} 
                    disabled={nameLocal.length === 0 || description.length === 0}
                    variant="contained" 
                    className='btn-add-follwer'
                    >Add
                </Button>
                
            </div>
    </div>

    </Box>
    ) 
}


export default AddFollower