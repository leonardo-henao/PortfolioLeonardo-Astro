import { useGetUrlDownloadApp } from '.';

export const ButtonDownloadApp = ({ message, className }) => {
  const [urlDownload] = useGetUrlDownloadApp();

  return (
    <button className={className} onClick={() => window.open(urlDownload, '_blank')}>
      {message}
    </button>
  );
};

export default ButtonDownloadApp;
