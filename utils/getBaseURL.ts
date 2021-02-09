export function getBaseURL({ baseURL = '/' } = {}) {
  return typeof window === 'undefined' ? `https://live-countdown-picker.vercel.app/${baseURL}` : baseURL;
}