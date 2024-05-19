import { qinsightBenifits1 } from "@/public";
import Image from "next/image";
import React from "react";

const Dynamic = ({heading,content,haveLogo=false,logo,haveContent=true,list,haveList=false}) => {
  return (
    <div
      style={{
        flex: "0 1 31%",
        paddingInline: "1rem",
        paddingBlock: "3rem",
        background: "#f7f7f6",
        boxShadow: "0 3px 6px #00000029",
      }}
    >
      {
        haveLogo && <div style={{marginBottom:'20px'}}>
      <Image src={logo} style={{width:'20%'}} />
      </div>
      }
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "7px",
          color:'#333333'
        }}
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
