// plugins/global.js
export default {
  install(app) {
    // Add global service to Vue app
		console.log('app log')
    app.config.globalProperties.$service = {
      myServiceMethod() {
        console.log('Service is working!');
      }
    };

    // Add i18n helper to Vue app (assuming you are using Vue I18n)
    app.config.globalProperties.$t = (key) => {
      const translations = {
        'greeting': 'Hello World!',
        'serviceMessage': 'This is a service message'
      };
      return translations[key] || key;
    };
  }
};
