import React from "react";
import styles from "../my-style.module.css";

function UserOnline({ nickname }) {
  return (
    <li className={styles.list}>
      <div className={styles.namelist}>
        <div>
          <img
            alt='avatar'
            src='https://th.bing.com/th/id/R.50f7636bce8215706dfbd11ee812470e?rik=6iPpf3FJ77%2bLwA&riu=http%3a%2f%2fimages.clipartpanda.com%2favatars-clipart-1376606916.png&ehk=jERomu4d8j280dZK1dQ%2fr%2fE306LycOMnWt5ZYyEYc0U%3d&risl=&pid=ImgRaw&r=0'
            className={styles.image}
          />
        </div>
        <p>{nickname}</p>
      </div>
    </li>
  );
}

export default UserOnline;
