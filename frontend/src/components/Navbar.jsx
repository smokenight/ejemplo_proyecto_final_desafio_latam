import '../assets/css/nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav">
        <img src="/assets/img/dark-logo.png" className="brand-logo" alt="" />
          <div className="nav-items">
            <div className="search">
              <input type="text" className="search-box" placeholder="search brand, product" spellCheck="false" data-ms-editor="true" />
                <button className="search-btn">search</button>
            </div>
            <a href="#"><img src="/assets/img/user.png" alt="" /></a>
            <a href="#"><img src="/assets/img/cart.png" alt="" /></a>
          </div>
      </div>
      <ul className="links-container">
        <li className="link-item"><a href="#" className="link">home</a></li>
        <li className="link-item"><a href="#" className="link">women</a></li>
        <li className="link-item"><a href="#" className="link">men</a></li>
        <li className="link-item"><a href="#" className="link">kids</a></li>
        <li className="link-item"><a href="#" className="link">accessories</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;