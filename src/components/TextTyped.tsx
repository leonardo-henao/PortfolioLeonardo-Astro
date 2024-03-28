import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const textPrincipal: string[] = [
  'full-stack',
  'de páginas web',
  'de apps web',
  'de apps para android',
  'de software',
];

const TextTyped = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [...textPrincipal],
      typeSpeed: 150,
      smartBackspace: true,
      backSpeed: 80,
      backDelay: 2000,
      startDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={textRef}>de software</span>;
};

export default TextTyped;
