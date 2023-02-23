import List from "./components/list/List";
import { Users } from "./data/Users";



export default function App() {
  const newUser = Users.map (item =>
    <List key={item.id} name={item.name} description={item.description} img={item.img}/>
  )
  return <div className="wrapper"> {newUser} </div>
  
}

