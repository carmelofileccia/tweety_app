import { useState } from "react";
import { POST } from "../../utils/api";
import styles from "./index.module.scss";

const AddNewMessage = ({ reloadData, setReloadData }) => {
  const [messageInput, setMessageInput] = useState("");
  const [userInput, setUserInput] = useState("");

  const onSendData = (e) => {
    e.preventDefault();
    POST(
      "messages",
      JSON.stringify({
        text: messageInput,
        sender: userInput,
      })
    );
    alert("Il messaggio è stato inviato!");
    setReloadData(!reloadData);

  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSendData}>
        <label className={styles.wrapper__label} htmlFor="message">Tweety</label>
        <input
          className={styles.wrapper__input}
          type="text"
          placeholder="What's New?"
          id="message"
          name="message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />


        <input
          className={styles.wrapper__input}
          type="text"
          placeholder="Username"
          rows="5"
          id="user"
          name="user"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <input className={styles.wrapper__inputB} type="submit" value="Send " />
      </form>
    </div>
  );
};

export default AddNewMessage;
