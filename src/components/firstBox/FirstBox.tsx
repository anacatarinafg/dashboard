import "./firstBox.scss";
import { topDealUsers } from "../../data";

const FirstBox = () => {
  return (
    <div className="firstBox">
      <h1>Top deals</h1>
      <ul className="firstBox__list">
        {topDealUsers.map((user) => (
          <li className="firstBox__item" key={user.id}>
            <div className="firstBox__user">
              <img src={user.img} alt={user.username} />
              <div className="firstBox__info">
                <span className="firstBox__username">{user.username}</span>
                <span className="firstBox__email">{user.email}</span>
              </div>
            </div>
            <span className="firstBox__amount">${user.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstBox;
