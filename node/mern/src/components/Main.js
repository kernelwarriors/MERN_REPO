import Axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

export function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    /*HTTP Request which should be placed inside a lifecycle methods but as we use function component instead of using lifecycle methods we are using useEffect method*/
    Axios.get("https://dummyjson.com/products")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.products);
        //   console.log(typeof data)
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  const ListCards=()=>{
    return data.map((val)=>{
        return <Cards obj={val} />;
    })
  }
  return (
    <div>
      <h1>Home</h1>
      {console.log(`Data is ${data}`)};
      <div className="row">
        {ListCards()}
      </div>
      {console.log(data)};
    </div>
  );
}

export function Contact() {
  return <h1>Contact components</h1>;
}

export function Blog() {
  return <h1>Blog components</h1>;
}

export function Projects() {
  return <h1>Projects components</h1>;
}
