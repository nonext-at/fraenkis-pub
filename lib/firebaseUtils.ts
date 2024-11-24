import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function fetchFirebaseData() {
  try {
    const whatsappDoc = await getDocs(collection(db, 'whatsapp'));
    const newsDoc = await getDocs(collection(db, 'news'));
    const aktivitätenDocs = await getDocs(collection(db, 'aktivitäten'));
    const öffnungszeitenDoc = await getDocs(collection(db, 'öffnungszeiten'));

    const whatsapp = whatsappDoc.docs[0]?.data() || {};
    const news = newsDoc.docs[0]?.data() || {};
    const aktivitäten = aktivitätenDocs.docs.map(doc => doc.data());
    const öffnungszeiten = öffnungszeitenDoc.docs[0]?.data() || {};

    return {
      whatsapp,
      news,
      aktivitäten,
      öffnungszeiten,
    };
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return null;
  }
}