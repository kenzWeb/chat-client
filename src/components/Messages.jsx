import React from "react";
import styles from "../styles/Messages.module.css";

const Messages = ({ messages, name }) => {
  return (
    <div className={styles.messages}>
      {messages.map(({ user, message, image }, i) => {
        const itsMe =
          user.name.trim().toLowerCase() === name.trim().toLowerCase();
        const className = itsMe ? styles.me : styles.user;

        return (
          <div key={i} className={`${styles.message} ${className}`}>
            <span className={styles.username}>{user.name}</span>

            {message && (
              <div className={styles.text}>{message}</div>
            )}

            {image && (
              <img
                src={image}
                alt={`${user.name}'s image`}
                className={styles.image}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
