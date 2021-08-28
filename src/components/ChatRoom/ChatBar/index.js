import { useState } from "react";

const ChatBar = (props) => {
  const { onAddData } = props;
  const [formValue, setFormValue] = useState("");

  const addData = (e) => {
    setFormValue("");
    onAddData(e, formValue);
  };

  return (
    <form onSubmit={addData}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

      <button type="submit" disabled={!formValue}>
        Send
      </button>
    </form>
  );
};

export default ChatBar;
