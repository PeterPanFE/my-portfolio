import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
	.use(HttpApi)
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
		},
		fallbackLng: "en",
		lng:"en",
		debug: true,

		interpolation: {
			escapeValue: false, // not needed for React as it escapes by default
		},
	});

export default i18n;
