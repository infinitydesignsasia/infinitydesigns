const GTM_ID = 'G-ZZRSF3BWDH'; // Replace this with your actual GTM ID

export const initGTM = () => {
  if (typeof window !== 'undefined' && GTM_ID) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GTM_ID);
  }
};
