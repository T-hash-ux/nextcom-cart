import logo from "./assets/logo.jpg"

// I set up the header component with a logo and project name on the React front end.
export default function Header() {
    return (
        <nav className='nav bg-light mb-4 p-0'>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className='d-flex'>
                        <img src={logo} alt="logo" className='mr-2' />

                        <div>Project Xcel</div>
                    </div>
                </a>
            </div>

        </nav>
    )
}