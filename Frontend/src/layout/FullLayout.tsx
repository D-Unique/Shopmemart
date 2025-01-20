import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"


function FullLayout() {
  return (
      <div>
          <header>
              <Header />
            </header>
          <main>
                <Outlet />
          </main>
          <footer>
              <Footer />
            </footer>
      
    </div>
  )
}

export default FullLayout

