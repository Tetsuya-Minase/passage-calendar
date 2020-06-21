import { firebase, FirebaseContext } from './Firebase';
import { useContext, useEffect, useMemo, useState } from 'react';
import { log } from 'util';
import { FormValue } from '../context/FormStateContext';

const useDocRef = () => {
  const { userId } = useContext(FirebaseContext);
  return useMemo((): firebase.database.Reference => {
    return firebase.database().ref(`/${userId}`);
  }, [userId]);

};
function useFetchDocument<T>(ref: firebase.database.Reference) {
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
  const ref = useDocRef();
  return useFetchDocument<{ [key: string]: FormValue }>(ref);
};
