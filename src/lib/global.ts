globalThis.cdnUrl = (path: string) => {
  return `https://${process.env.NEXT_PUBLIC_CDN_URL}/${path}`.replace(/\/{2,}/g, '/').replace(':/', '://');
};
