import '../styles/pages/UserProfile.css';

function UserProfile() {
  return (
    <div >
      <h2 className='mb-5'>User Profile</h2>
      <div className="UserProfile">
        <div className="UserProfile-Header">
          <h2>Profile</h2>
          
        </div>
        <div className="UserProfile-Content">
          <div className="UserProfile-Content-Item">
            <label>Name:</label>
            <p>John Doe</p>
          </div>
          <div className="UserProfile-Content-Item">
            <label>Email:</label>
            <p>emmunigwe@gmail.com</p>
          </div>
    </div>
      
      </div>
    </div>
  )
}

export default UserProfile

