import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
  const makeActiveLink = useActiveLink();
  const navItems = getNavItems();
  const homeNav = makeActiveLink(navItems[0]);
  const pagesNav = makeActiveLink(navItems[1]);
  const contactNav = makeActiveLink(navItems[5]); // Contact is still there

  return (
    <div className="menu-area d-none d-lg-inline-flex align-items-center">
      <nav id="mobile-menu" className="mainmenu">
        <ul>
          <style jsx>{`
            .mainmenu ul li a {
              color: #1B3A6B;
            }
            .mainmenu ul li a:hover,
            .mainmenu ul li.current-menu-ancestor > a {
              color: #29B6D8;
            }
            /* Dropdown menu styles for My Account */
            .mainmenu ul li .sub-menu {
              background: white;
              border-radius: 12px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.1);
              padding: 8px 0;
              min-width: 160px;
            }
            .mainmenu ul li .sub-menu li {
              padding: 0;
            }
            .mainmenu ul li .sub-menu li a {
              padding: 8px 20px;
              display: block;
            }
            .cart-icon-square {
              background-color: #1B3A6B;
              display: inline-block;
              width: 40px;
              height: 40px;
              border-radius: 8px;
              text-align: center;
              line-height: 40px;
              margin-left: 15px;
              transition: background-color 0.3s;
            }
            .cart-icon-square:hover {
              background-color: #29B6D8;
            }
            .cart-icon-square i {
              color: white;
              font-size: 20px;
            }
          `}</style>

          {/* Home – default landing page */}
          <li>
            <Link href="/home-02">Home</Link>
          </li>

          {/* About */}
          <li>
            <Link href="/about">About</Link>
          </li>

          {/* Shop */}
          <li>
            <Link className="text-red-300" href="/shop">Shop</Link>
          </li>

          {/* My Account dropdown (Cart + Wishlist) */}
          <li className="has-dropdown">
            <Link href="#">My Account</Link>
            <ul className="sub-menu">
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Cart icon square – direct shortcut */}
      <div className="cart-icon-square">
        <i className="tji-shopping-cart"></i>
      </div>
    </div>
  );
};

export default Navbar;