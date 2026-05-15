import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBi-a06cP8HeI1QSSDSrtXxyVZEx7XgR0U",
  authDomain: "speednest-c3b61.firebaseapp.com",
  projectId: "speednest-c3b61",
  storageBucket: "speednest-c3b61.firebasestorage.app",
  messagingSenderId: "930360784623",
  appId: "1:930360784623:web:c7cfcf80b407ecc35d4d1a",
  measurementId: "G-NLTMTHWY9R"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const ADMIN_EMAIL = "1@gmail.com";
export const SUPPORT_WHATSAPP = "201124680211";
export const INDEX_PAGE = "index.html";
export const HOME_PAGE = "p1.html";
export const ADMIN_PAGE = "admin.html";
