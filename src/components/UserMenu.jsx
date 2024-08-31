import { HiUser } from "react-icons/hi";

function UserMenu({ name }) {
  return (
    <div>
      <p>
        <HiUser size="24" /> {name}
      </p>
    </div>
  );
}

export default UserMenu;
