import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  databaseUrl: process.env.DATABASE_URL
};

firebase.initializeApp(config);
export {firebase};

type FirebaseContext = {
  userId: string | null;
  userName: string;
}

export const FirebaseContext = React.createContext<FirebaseContext>({
  userId: null,
  userName: ''
});
