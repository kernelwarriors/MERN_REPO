
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Nav from './components/Nav';
import { HashRouter, Routes, Route} from "react-router-dom";
import { Home, Blog, Projects, Contact } from "./components/Main";
import{Cool} from './components/Header'// We are importing only one function change name and it wil give error
// If we use export default we can import the function using any name such as A b but
// if we are exporting a specific function then it will be in {} and the name can not change.

// function App() {
//   return (
//     <div>
//       <Header/>
//       <Nav/>
//       <Footer/>
//       {/* <Cool/> */} 
//       {/* THis will also work */}
//     </div>
//   );
// }

// export default App;


function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>


    </div>
  );
}


export default App;




// class C1 extends Component
// {
// 	constructor()
// 	{
// 		super();
// 		this.state = {name:”Shankar” }
// 	}
// 	handleClick = () => {
// 		this.setState({name:”Ravi”})
// 	}
// 	render()
// 	{
// 		return(
// 			<div>
// 				<h1>Name is {this.state.name}</h1>
// 				<button onClick={this.handleClick}>Click</button>
// 			</div>
// );
// }
// }
