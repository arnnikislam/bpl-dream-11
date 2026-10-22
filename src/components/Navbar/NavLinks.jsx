const NavLinks = ({ link }) => {
  const { label, path } = link;
  return (
    <li>
      <a href={path}>{label}</a>
    </li>
  );
};

export default NavLinks;
