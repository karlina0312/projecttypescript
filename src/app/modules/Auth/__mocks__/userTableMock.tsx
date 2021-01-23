import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
// eslint-disable-next-line
export default [
  {
    id: 1,
    username: "admin",
    password: "demo",
    email: "admin@demo.com",
    accessToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
    refreshToken: "access-token-f8c137a2c98743f48b643e71161d90aa",
    roles: [1], // Administrator
    pic: toAbsoluteUrl("/media/users/300_21.jpg"),
    fullname: "Б.Хатанзориг",
    firstname: "Хатанзориг",
    lastname: "Баатарсүрэн",
    occupation: "programist",
    companyName: "fibocloud",
    phone: "97696333553",
    language: "en",
    timeZone: "International Date Line West",
    website: "https://fibo.cloud.com",
    emailSettings: {
      emailNotification: true,
      sendCopyToPersonalEmail: false,
      activityRelatesEmail: {
        youHaveNewNotifications: false,
        youAreSentADirectMessage: false,
        someoneAddsYouAsAsAConnection: true,
        uponNewOrder: false,
        newMembershipApproval: false,
        memberRegistration: true,
      },
      updatesFromKeenthemes: {
        newsAboutKeenthemesProductsAndFeatureUpdates: false,
        tipsOnGettingMoreOutOfKeen: false,
        thingsYouMissedSindeYouLastLoggedIntoKeen: true,
        newsAboutMetronicOnPartnerProductsAndOtherServices: true,
        tipsOnMetronicBusinessProducts: true,
      },
    },
    communication: {
      email: true,
      sms: true,
      phone: false,
    },
    address: {
      addressLine: "Модны 2",
      city: "Улаанбаатар",
      state: "Улаанбаатар",
      postCode: "11000",
    },
    socialNetworks: {
      linkedIn: "https://linkedin.com/admin",
      facebook: "https://facebook.com/admin",
      twitter: "https://twitter.com/admin",
      instagram: "https://instagram.com/admin",
    },
  }
];
