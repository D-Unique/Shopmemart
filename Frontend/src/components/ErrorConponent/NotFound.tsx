
function NotFound() {
  return (
    <div className="container-fluid text-center mt-5 pt-5 mb-5 pb-5 bg-light">
            <h1>404 Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <button onClick={() => window.location.href = "/"}>Go back to Home</button>
      
    </div>
  )
}

export default NotFound

