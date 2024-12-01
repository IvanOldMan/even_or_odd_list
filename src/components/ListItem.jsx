import { useEffect, useState } from 'react';
import './LiItem.css'

const ListItem = ({ item, isActive }) => {
  const [active, setActive] = useState(isActive);

  useEffect(() => {
    setActive(isActive);
  }, [isActive])

  const handleOnClick = () => {
    setActive(!active);
  };

  const numberTypeClass = item % 2 === 0 ? 'even' : 'odd';

  return (
  <li
    id={item}
    onClick={handleOnClick}
    className={active ? numberTypeClass : ''}
  >
    <h1>{item}</h1>
    <h2>Start editing to see some magic happen!</h2>
  </li>
  );
};

export default ListItem;
