import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://images.pexels.com/photos/15784891/pexels-photo-15784891.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
            </div>
            <label>Username</label>
          <input type="text" placeholder="Roy" name="name" />
          <label>Email</label>
          <input type="email" placeholder="roy28@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          </form>
        </div>  
        <Sidebar/>
    </div>
  )
}
