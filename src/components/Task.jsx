/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Task.module.css";
import { FaTrash, FaCheck } from "react-icons/fa";
import clsx from "clsx";


export function Task({ content, deleteTask, id, toggleTaskCompleted}) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteComment() {
    deleteTask(id);
  }

  return (
    <div className={styles.main}>
      <label>
        <input
          className={styles.inputCheckbox}
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            toggleTaskCompleted(id)
          }}
        />
        {isChecked && <FaCheck className={styles.iconCheck}/>}
      </label>
      <p
        className={clsx(isChecked ? styles["withLine"] : styles["withoutLine"])}
      >
        {content.length > 240 ? content.substring(0, 249) + "..." : content}
      </p>
      <button key={content} onClick={handleDeleteComment}>
        <FaTrash size={16} />
      </button>
    </div>
  );
}
