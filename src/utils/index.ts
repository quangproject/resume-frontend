export function getMediaFromCms(mediaUrl: string | undefined) {
  return mediaUrl ? `${import.meta.env.VITE_CMS_URL}${mediaUrl}` : "";
}

export function getFileFromCms(fileUrl: string | undefined) {
  return fileUrl ? `${import.meta.env.VITE_CMS_URL}${fileUrl}` : "";
}

export function formatMonthYear(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric",
  });
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
