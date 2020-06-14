import { firebase, FirebaseContext } from './Firebase';
import { useContext, useEffect, useMemo, useState } from 'react';

const useDocRef = (path: string) => {
  const { userId } = useContext(FirebaseContext);
  return useMemo((): firebase.database.Reference => {
    return firebase.database().ref(`/`);
  }, [userId, path]);

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
  const ref = useDocRef('documents');
  return useFetchDocument<{ [key: string]: Document }>(ref);
};
