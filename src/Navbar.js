const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The DoJo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{color:"blue"}}>New blog</a>
            </div>
        </nav>
    );
}

export default Navbar;