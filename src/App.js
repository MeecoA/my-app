// react imports
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

// import for fetching
import axios from "axios";

// styles
import "./css/style.css";

// components
import NavBar from "./components/Navbar";
import Followers from "./pages/Followers";
import AddFollower from "./pages/AddFollower";
import Home from "./components/Home";
import CardsLocal from "./components/CardLocal";

const App = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  const photoUrl = "https://robohash.org/";
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [nameLocal, setNameLocal] = useState("");
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [followers, setFollowers] = useState([]);

  const [isValidName, setIsValidName] = useState(false);
  const [isValidUserName, setIsValidUserName] = useState(false);
  const [isValidDescription, setIsValiDescription] = useState(false);
  const [isValidNameLocal, SetIsValidNameLocal] = useState(false);

  useEffect(() => {
    axios({ method: "GET", url: baseUrl })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  useEffect(() => {
    name.length > 0 ? setIsValidName(true) : setIsValidName(false);
    description.length > 0 ? setIsValiDescription(true) : setIsValiDescription(false);
    nameLocal.length > 0 ? SetIsValidNameLocal(true) : SetIsValidNameLocal(false);
    username.length > 0 ? setIsValidUserName(true) : setIsValidUserName(false);
  }, [name, nameLocal, description, username]);

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    const newFilteredUsers = filteredUsers.filter((user) => user.id !== userId);
    const newFollowers = followers.filter((user) => user.id !== userId);
    setFollowers(newFollowers);
    setUsers(newUsers);
    setFilteredUsers(newFilteredUsers);
  };

  const handleAdd = (name, userName) => {
    let random = Math.random() * 1000;

    setFilteredUsers([...filteredUsers, { id: Math.round(random), name: name, username: userName }]);
    setUsers([...users, { id: Math.round(random), name: name, username: userName }]);
    alert("User Added!: " + name);
    setName("");
    setUserName("");
  };

  const handleAddLocal = (name, description) => {
    let random = Math.random() * 1000;

    setFollowers([...followers, { id: Math.round(random), name: name, description: description }]);
    alert("User Added!: " + name);
    setNameLocal("");
    setDescription("");
  };

  const handleReset = () => {
    setName("");
    setUserName("");
  };
  const handleResetLocal = () => {
    setNameLocal("");
    setDescription("");
  };

  // const handleUpdate = (userId, name, description) =>{
  //   const newUsers = users.map((user) => {

  //     if(user.id === userId){
  //       user.name = name
  //       user.description = description
  //     }
  //     return user
  //   })

  //   setUsers(newUsers)
  // }

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<NavBar></NavBar>}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="followers"
            element={
              <Followers
                islocal={false}
                filteredUsers={filteredUsers}
                photoUrl={photoUrl}
                handleDelete={handleDelete}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          ></Route>
          <Route
            path="followers"
            element={
              <Followers
                islocal={true}
                filteredUsers={filteredUsers}
                photoUrl={photoUrl}
                handleDelete={handleDelete}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          ></Route>
          <Route
            path="add-follower"
            element={
              <AddFollower
                name={name}
                nameLocal={nameLocal}
                description={description}
                setDescription={setDescription}
                setNameLocal={setNameLocal}
                username={username}
                setName={setName}
                setUserName={setUserName}
                handleAdd={handleAdd}
                handleAddLocal={handleAddLocal}
                handleResetLocal={handleResetLocal}
                handleReset={handleReset}
                isValidUserName={isValidUserName}
                isValidName={isValidName}
                isValidDescription={isValidDescription}
                isValidNameLocal={isValidNameLocal}
              />
            }
          ></Route>
          <Route
            path="cards-local"
            element={<CardsLocal followers={followers} photoUrl={photoUrl} handleDelete={handleDelete}></CardsLocal>}
          ></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
