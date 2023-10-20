import { initializeApp } from "firebase/app";
/*
  Conecta con Firebase. Se necesita para TODO lo relacionado a eso.
  NOTA: Se van a cambiar luego los datos para que no se queden asi nada mas xd
*/
export function ConnectionFB() {
  const firebaseConfig = {
    apiKey: "AIzaSyC4TETeBfVzr8ROa_HIhbFM8lYXei9aSqU",
    authDomain: "cuceiservices.firebaseapp.com",
    projectId: "cuceiservices",
    storageBucket: "cuceiservices.appspot.com",
    messagingSenderId: "446021744314",
    appId: "1:446021744314:web:f0955b8c9bd007eb4ef483",
    measurementId: "G-YZWNK65VB2"
  };
  return initializeApp(firebaseConfig)
}