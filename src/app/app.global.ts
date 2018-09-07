export const App: any = {
  store           : 'AndroidSrc',  // change this with your app name
  ContactEmail    : 'info@AndroidSrc.ir', // change this with your email contact
  url             : 'https://AndroidSrc.ir', // change this with your URL (please use https, recommended)
  OneSignalAppID  : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // change this with your onesignal api key
  GCM             : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Google Project Number for Google Cloud Messaging
  consumerKey     : 'ck_b47e3310d21c25f597864669ca77ab3ce6f4cf6d', // change this with your Consumer Key from WooCommerce
  consumerSecret  : 'cs_fbab66e8b8401c913c9f8f3a45650a1d65ef4e5e', // change this with your Consumer Secret from WooCommerce

  paypalSandboxClientID: 'AZjyISbp1zmOhZ0o_iAG3W2IGjlz2hvEC-8cGoQ7fXcMFN9afaRuW0X1B1PVSgkSuTQWOKqM9N4NTkOP',
  paypalLiveClientID: '', // get this from paypal developer dashboard
  paypalState: 'PayPalEnvironmentSandbox', // change this to 'PayPalEnvironmentProduction' if you wanna live

  languages: [
    {id: 'en', title: 'English'},
    {id: 'id', title: 'Indonesian'},
    {id: 'fr', title: 'French'},
    {id: 'in', title: 'Hindi'},
    {id: 'cn', title: 'Chinese'}
  ],

  defaultLang: 'en'
};