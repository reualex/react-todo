import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  en: {
    links: {
      home: "Home",
      about: "About",
      login: "Login",
      signUp: "Sign uo",
      profile: "Profile",
      logout: "Logout",
      privacyPolicy: "Privacy Policy",
      userAgreement: "User Agreement",
      personalData: "Consent to the processing of personal data",
    },
    addNewCol: "add new column",
    addNewTask: "add new task",
  },
  ru: {
    links: {
      home: "Главная",
      about: "О проекте",
      login: "Войти",
      signUp: "Регистрация",
      profile: "Профиль",
      logout: "Выйти",
      privacyPolicy: "Политика конфиденциальности",
      userAgreement: "Пользовательское соглашение",
      personalData: "Согласие на обработку персональных данных",
    },
    addNewCol: "новая колонка",
    addNewTask: "новая задача",
  },
});

export default strings;
