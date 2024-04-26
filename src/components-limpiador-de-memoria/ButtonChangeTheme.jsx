import { useChangeTheme } from '.';

export const ButtonChangeTheme = () => {
  const [theme, changeTheme] = useChangeTheme(null);

  return (
    <button className={`button-change-theme ${theme}`} onClick={() => changeTheme()}>
      <img
        style={{ width: 1.25 + 'rem', height: 1.25 + 'rem' }}
        className={`size-5 ${theme != 'body_light' && 'hidden'}`}
        src="/limpiador-de-memoria/icons/night-moon.svg"
        alt="icono de la luna"
      />
      <img
        style={{ width: 1.25 + 'rem', height: 1.25 + 'rem' }}
        className={`size-5 ${theme == 'body_light' && 'hidden'}`}
        src="/limpiador-de-memoria/icons/day-sun.svg"
        alt="icono del sol"
      />
    </button>
  );
};

export default ButtonChangeTheme;
