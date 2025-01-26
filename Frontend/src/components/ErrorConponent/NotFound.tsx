
function NotFound() {
  return (
      <div>
            <h1>404 Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <button onClick={() => window.location.href = "/"}>Go back to Home</button>
      
    </div>
  )
}

export default NotFound

