import { Outlet, Link} from "react-router-dom"
import './UserDashBoardLayout.css'
import UserDashBoardHeader from '../components/UserDashboard/UserDashBoardHeader'

const UserDashBoardLayout = () => {
    return (
        <body className="UserDashBoardLayout"> 
            <main className="UserDashBoardLayout-Container">
                <div className="UserDashBoardLayout-Sidebar">
                   <header>
                        <Link to={'/'} id="UserDashBoard-logo"> <h1>ShopMeMart</h1>
                        </Link>
                    </header>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/user'}>Dashboard</Link>
                            </li>
                            <li>
                                <Link to={'/user/profile'}>Profile</Link>
                            </li>
                            <li>
                                <Link to={'/user/orders'}>Orders</Link>
                            </li>
                        </ul>
                    </nav>
                            
                </div>
                <section className="UserDashBoardLayout-Content">
                    <header className="UserDashBoard-Header">
                        <UserDashBoardHeader />
                    </header>
                    <Outlet />
                </section>
            </main>
    </body>
  )
}

export default UserDashBoardLayout

