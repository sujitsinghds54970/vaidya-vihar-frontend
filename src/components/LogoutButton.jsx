function LogoutButton() {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return <button>Logout</button>;
}

export default LogoutButton;sujitsingh