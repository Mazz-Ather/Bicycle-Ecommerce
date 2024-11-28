import Link from "next/link";
const Header = () => {
  return (
    <header>
    
      <Link href="#" className="logo">
        <h1
          style={{ fontSize: "3rem", fontWeight: "900", letterSpacing: "2px" }}
        >
          <span className="bike">Mazz</span>|Bikes
        </h1>
      </Link>
      <div className="main-menu-wrapper">
        <ul className="main-menu">
          <li>
            <Link href="#" className="active">
              home
            </Link>
          </li>
          <li>
            <Link href="#">shop</Link>
          </li>
          <li>
            <Link href="#">dealer</Link>
          </li>
          <li>
            <Link href="#">about</Link>
          </li>
          <li>
            <Link href="#">contact</Link>
          </li>
        </ul>
      </div>
      <ul className="user-menu">
        <li>
          <Link href="#">
            <i className="bx bx-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="bx bx-user"></i>
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="bx bx-search"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
