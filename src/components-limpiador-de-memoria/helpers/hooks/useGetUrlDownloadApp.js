import { useEffect, useState } from 'react';
import { GetDataToDownload } from '../..';

/**
 * Obtiene la url para descargar la app desde la play store
 * @returns {[string]} URL para descargar la app
 */
export function useGetUrlDownloadApp() {
  const [urlDownload, setURLDownload] = useState();

  useEffect(() => {
    const getURLDownload = async () => setURLDownload(await GetDataToDownload());

    getURLDownload();
  }, []);

  return [`https://${urlDownload}`];
}
