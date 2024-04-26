export const GetDataToDownload = async () => {
  const url =
    "https://raw.githubusercontent.com/Leonardo-Henao/info-apps/main/memory-cleaner.json";
  const request = await fetch(url);
  const response = await request.json();
  const { urlDownload } = response;

  return urlDownload;
};
