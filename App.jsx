import Footer from "./Comp/Footer";
import Greeting from "./Comp/Greeting";
import Header from "./Comp/Header";
import ListTraverse from "./Comp/ListTraverse";
import Main from "./Comp/Main";
import Product from "./Comp/Product";
import Props from "./Comp/Props";
import Propstd from "./Comp/Propstd";



const App = () => {
  const Users=[{id:1,name:'ashish',year:34},
    {id:2,name:'bhaskar',year:21},
    {id:3,name:'rani',year:32}
 ];
 const student=[{id:1,class:'1st',rank:'4th'},
  {id:2,class:'2st',rank:'3th'},{id:3,class:'2st',rank:'2th'}
 ]
  return (
    <div>
      <Header/>
      <Main/>
      <Greeting/>
      <Product/>
      <ListTraverse/>
      <h1>userList</h1>
      {
        Users.map((user)=>(
          <Props key={user.id} name={user.name} year={user.year} />
        ))
      }

      {
        student.map((std)=>(
          <Propstd key={std.id} id={std.id} clas={std.class} rank={std.rank}  />
        ))
      }
      <Footer/>
      
    </div>
  )
}

export default App