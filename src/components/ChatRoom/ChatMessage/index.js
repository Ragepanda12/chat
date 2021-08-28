import { getAuth } from "firebase/auth";

const ChatMessage = (props) => {
  const { message, photoURL, uid } = props;
  const auth = getAuth();
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
