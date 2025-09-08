import LogoutButton from './LogoutButton';
import './Header.css';

function Header() {
  return (
    <div className="header-bar">
      <h1>VaidyaVihar Diagnostic</h1>
      <LogoutButton />
    </div>
  );
}

export default Header;