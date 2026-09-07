/* Google Consent Mode v2. The actual consent interface is managed through
   Google AdSense > Privacy & messaging (Google CMP). */
(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
  window.gtag('js', new Date());

  function addScript(src, attributes) {
    var script = document.createElement('script');
    script.async = true;
    script.src = src;
    Object.keys(attributes || {}).forEach(function (key) { script.setAttribute(key, attributes[key]); });
    document.head.appendChild(script);
  }

  /* Publisher verification / ads. Ad serving and preferences are controlled
     by the Google CMP configuration, not by this file. */
  addScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3812036376533672', {
    crossorigin: 'anonymous'
  });
  addScript('https://www.googletagmanager.com/gtag/js?id=G-HKRNRW40Z0');
  window.gtag('config', 'G-HKRNRW40Z0');
}());
