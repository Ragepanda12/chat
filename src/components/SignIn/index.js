import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignIn;
