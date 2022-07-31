import { useAppSelector } from "../../app/hooks";
import Avatar from "../../components/Avatar/Avatar";
import "./Profile.css";

const Profile = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="profile">
      <div className="profile__box">
        <div className="profile__avatar">
          <Avatar sizePx={100} />
        </div>
        <button className="profile__btn">Edit Profile</button>
        <div className="profile__info">
          <h1>{user?.email}</h1>
          <p>404 bio not found</p>
          <p>Joined on 30 2022</p>
        </div>
      </div>
      <div className="profile__minibox"></div>
    </div>
  );
};

export default Profile;
