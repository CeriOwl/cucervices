import { collection, getDocs } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
/*
    Funcion que regresa los datos.
*/
export async function CheckUserDB(username, password) {
    const app = require("./Connection")
    const db = getFirestore(app.ConnectionFB())
    let existence = false
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        if(doc.id != "empty") {
            if(doc.data()["username"] === username && doc.data()["password"] === password) {
                existence = true
            }
        }
    })
    return existence
}