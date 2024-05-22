import styles from './styles.module.css'
import Image from "next/image";
import React from "react";

const Dynamic = ({heading,content,haveLogo=false,logo,haveContent=true,list,haveList=false}) => {
  return (
    <div
    className={styles.container}
    >
      {
        haveLogo && <div style={{marginBottom:'20px'}}>
      <Image src={logo} style={{width:'20%'}} />
      </div>
      }
      <h3
        className={styles.cardHeading}
      >
        {heading}
      </h3>
      {
        haveContent && <p>{content}</p>
      }
      {
        haveList && <ul>
        {
            list.map((listItem)=>(
                <li>
                    {listItem}
                </li>
            ))
        }
      </ul>
      }
    </div>
  );
};

export default Dynamic;
