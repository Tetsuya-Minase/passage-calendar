import { firebase, FirebaseContext } from './Firebase';
import { useContext, useEffect, useMemo, useState } from 'react';
import { database } from 'firebase-admin';

const useDocRef = (path: string) => {
  const { userId } = useContext(FirebaseContext);
  const ref = useMemo((): database.Reference => {
    // @ts-ignore
    return firebase.database().ref(`users/${userId}/${path}`);
  }, [userId, path]);
  return ref;
};
function useFetchDocument<T>(ref: database.Reference) {
  const [document, setDocument] = useState<T>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    ref.on('value', snapshot => {
      if (!mounted) {
        return;
      }
      if (snapshot && snapshot.val()) {
        setDocument(snapshot.val());
      }
      setLoaded(true);
    });
    return () => {
      ref.off();
      mounted = false;
    };
  }, [ref]);

  return { document, loaded };
}

export const useAllDocuments = () => {
  const ref = useDocRef('documents');
  return useFetchDocument<{ [key: string]: Document }>(ref);
};
