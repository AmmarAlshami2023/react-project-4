import { Fragment } from "react";
import classes from "../Layout/Header.module.css";
import mealsImg from "/Users/admin/Desktop/react project 4/src/assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="a table full of delishious food!" />
      </div>
    </Fragment>
  );
}
export default Header;
