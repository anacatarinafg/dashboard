import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="menu__item" key={item.id}>
          <span className="menu__title">{item.title}</span>
          {item.listItems.map((element) => (
            <Link to={element.url} className="menu__link" key={element.id}>
              <img src={element.icon} alt="" />
              <span className="menu__listItemTitle">{element.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
