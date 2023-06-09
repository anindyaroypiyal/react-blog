import axios from "axios";
import { useEffect, useState } from "react"
import "./sidebar.css"

export default function 
Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() =>{
    const getCats = async () =>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
          src="https://myfirstwebsites.neocities.org/abdalla/abme.jpg"
          alt=""
        />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, doloremque aperiam. Magnam deleniti provident reprehenderit perspiciatis sapiente exercitationem distinctio incidunt praesentium modi harum.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">{c.name}</li>
          ))}           
        </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
        </div>
    </div>
  )
}
