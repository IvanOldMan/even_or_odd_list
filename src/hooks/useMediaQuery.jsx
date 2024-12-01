import {useEffect, useState} from "react";
import throttle from '../utils/throttle.js';

const currentType = () => {
  const clientWidth = document.body.clientWidth;
  return clientWidth > 580 ? 'desktop' : 'mobile';
}

function useMediaQuery() {
  const initValue = currentType();
  const [mediaQuery, setMediaQuery] = useState(initValue);

  useEffect(() => {
    const handleResize = () => {
      const query = currentType();
      setMediaQuery(query);
    }
    const throttleHandler = throttle(handleResize, 250);

    window.addEventListener('resize', throttleHandler);

    return () => {
      window.removeEventListener('resize', throttleHandler);
    }
  }, [mediaQuery]);

  return mediaQuery;
}

export default useMediaQuery;

