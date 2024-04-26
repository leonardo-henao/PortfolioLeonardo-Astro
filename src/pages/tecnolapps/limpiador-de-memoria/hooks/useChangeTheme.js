import { useEffect, useState } from 'react';

const lightTheme = 'body_light';
const darkTheme = 'body_dark';

/**
 * Cambia el fondo de la sección de compañías que confían en nosotros
 * @param {string} themeToSet Tema asignado
 */
const changeBackgroundCompaniesThatTrust = (themeToSet) => {
  const parentList = document.getElementById('list-brands-trust');

  if (parentList != null) {
    const themeDarkList = 'list-brands-trust-dark';

    themeToSet == lightTheme
      ? parentList.classList.remove(themeDarkList)
      : parentList.classList.add(themeDarkList);
  }
};

/**
 * Cambia la captura de pantalla de la primera sección de la pagina
 * @param {string} themeToSet Tema asignado
 */
const setImageScreenshot = (themeToSet) => {
  const imgFromDocument = document.getElementById('screenshot-app');

  if (imgFromDocument != null) {
    themeToSet == lightTheme
      ? (imgFromDocument.src = '/limpiador-de-memoria/assets/limpiador_de_memoria_screenshot-light.png')
      : (imgFromDocument.src = '/limpiador-de-memoria/assets/limpiador_de_memoria_screenshot-dark.png');
  }
};

/**
 * Cambia la clase del body al tema seleccionado
 * @param {string} themeToSet Tema asignado
 */
const setThemeRoot = (themeToSet) => {
  const root = document.getElementById('root');
  if (themeToSet == lightTheme) {
    root.classList.add(lightTheme);
    root.classList.remove(darkTheme);
  } else {
    root.classList.add(darkTheme);
    root.classList.remove(lightTheme);
  }
};

/**
 * Hook para controlar el tema de la página
 * @returns @param {string} theme Tema actual @param {function} changeTheme Función para cambiar el tema
 */
export function useChangeTheme() {
  const [theme, setTheme] = useState(lightTheme);

  /**
   * Ejecuta todas las funciones para actualizar el dom con el nuevo tema asignado
   * @param {string} themeToSet
   */
  const setGlobalTheme = (themeToSet) => {
    setThemeRoot(themeToSet);
    setImageScreenshot(themeToSet);
    setTheme(themeToSet);
    changeBackgroundCompaniesThatTrust(themeToSet);
  };

  const changeTheme = () => {
    if (theme == lightTheme) {
      localStorage.setItem('theme', darkTheme);
      setGlobalTheme(darkTheme);
    } else {
      localStorage.setItem('theme', lightTheme);
      setGlobalTheme(lightTheme);
    }
  };

  useEffect(() => {
    const valueThemeLocalStorage = localStorage.getItem('theme');

    if (theme != null) setGlobalTheme(valueThemeLocalStorage);
    else {
      localStorage.setItem('theme', lightTheme);
      setGlobalTheme(lightTheme);
    }
  }, []);

  return [theme, changeTheme];
}
