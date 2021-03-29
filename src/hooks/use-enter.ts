import { useEffect, useState } from 'react';

const useEnter = () => {
  const [keyPressed, setKeyPressed] = useState(false);
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        setKeyPressed(true);
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return [keyPressed, setKeyPressed] as const;
};

export default useEnter;
