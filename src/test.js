import firebase from "firebase/compat";
import "firebase/firestore";

const firestore = firebase.firestore();

//First Way
firestore
  .collection("users")
  .doc("6GNPjqMIK8sNElsMUcrj")
  .collection("carItems")
  .doc("OCsNQVsaeMHoxugcdFYW");

//Second Way
firestore.doc("/users/6GNPjqMIK8sNElsMUcrj/carItems/OCsNQVsaeMHoxugcdFYW");

//Third way
firestore.collection("/users/6GNPjqMIK8sNElsMUcrj/carItems");
