
function Unauthorised({ error }: { error: any }) {
  return (
      <div>
        <h1>401 Unauthorised</h1>
          <h1>{ error}</h1>
      <p>Please try again later.</p>
    </div>
  )
}

export default Unauthorised
