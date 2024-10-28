export function getMediaFromCms(mediaUrl: string | undefined) {
  return mediaUrl ? `${import.meta.env.VITE_CMS_URL}${mediaUrl}` : "";
}
