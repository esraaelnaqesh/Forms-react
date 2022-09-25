import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({

    supportedLngs: ["ar", "en"],
    backend:{
        //translation file path
        loadPath:"/assets/locales/{{lng}}.json",
    },
    fallbackLng:"en",
    //disabled in production
    debug:false,
    // can have multiple namespaces to divide translation into smaller pieces
    //ns:["common","home","signin","signup"]
    interpolation:{
        escapeValue:false,
        formatSeparator:","
    },
    react:{
        wait:true,
    },

});
export default i18n;