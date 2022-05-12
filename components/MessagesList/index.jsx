import { useState, useEffect } from "react";
import Link from "next/link";
import { GET, DELETE } from "../../utils/api";
import styles from "./index.module.scss";

const MessagesList = ({ reloadData, setReloadData }) => {
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessagesList(data));
  }, [reloadData]);

  const onMessageDelete = (id) => {
    const deleteIt = confirm("Sei sicuro di volerlo cancellare?");

    deleteIt &&
      DELETE("messages", id).then(() => {
        setReloadData(!reloadData);
      });
  };

  const orderListByTime = (list) => list.slice(0).reverse();

  return (
    <div className={styles.wrapper}>
      {messagesList &&
        orderListByTime(messagesList).map((message) => (
          <div className={styles.wrapper__message} key={message.id}>
            <h3 className={styles.wrapper__text}>{message.text}</h3>
            <Link href={`/messages/${message.id}`}>
              <a>
                <p className={styles.wrapper__user}>{message.sender}</p>
              </a>
            </Link>

            <p className={styles.wrapper__date}>{message.date}</p>
            <button className={styles.wrapper__btn} onClick={() => onMessageDelete(message.id)}>X</button>
          </div>
        ))}
    </div>
  );
};

export default MessagesList;
