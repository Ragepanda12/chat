import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatBar from "./ChatBar";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const MESSAGE_LIMIT = 25;

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const db = getFirestore();
  const auth = getAuth();

  const addData = async (e, formValue) => {
    const { uid, photoURL } = auth.currentUser;
    e.preventDefault();
    try {
      addDoc(collection(db, "messages"), {
        message: formValue,
        createdAt: Date.now(),
        uid,
        photoURL,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const messagesQuery = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(MESSAGE_LIMIT)
    );
    const unsub = onSnapshot(messagesQuery, (documents) => {
      const messageData = [];
      documents.forEach((doc) => {
        messageData.push(doc.data());
      });
      setMessages(messageData.reverse());
    });
  }, []);
  return (
    <>
      <main>
        {messages.map((msg) => (
          <ChatMessage
            message={msg.message}
            photoURL={msg.photoURL}
            uid={msg.uid}
          />
        ))}
      </main>
      <ChatBar onAddData={addData} />
    </>
  );
};

export default ChatRoom;
