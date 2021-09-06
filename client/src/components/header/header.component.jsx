import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useSelector, useDispatch } from "react-redux";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import "./header.scss";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();
  const signOutHandler = () => dispatch(signOutStart());

  return (
    <div className="header">
      <Link className="logo-contaner" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOutHandler}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            SIGN IN{" "}
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//     signOutStart: () => dispatch(signOutStart())
// })

// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
//     hidden: selectCartHidden
// });

export default Header;
