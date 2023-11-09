import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyAviO-QuYWTq5t7qH7_l1xQf6EZGF5T6PI",
  authDomain: "autenticacao-6721f.firebaseapp.com",
  projectId: "autenticacao-6721f",
  storageBucket: "autenticacao-6721f.appspot.com",
  messagingSenderId: "745745208501",
  appId: "1:745745208501:web:e6d269417f2dcc24a7dafc"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export{ auth };
