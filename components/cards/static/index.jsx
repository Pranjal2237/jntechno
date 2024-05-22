import styles from './styles.module.css'
import Image from "next/image"; 

const Static = ({ image, heading, description,direction="column",width='40px' }) => {
  return (
    <div
      style={{
        flexDirection: direction,
      }}
      className={styles.container}
    >
      <div style={{width:width}}>
        <Image src={image} alt="image" style={{width:'100%'}} />
      </div>
      <div style={{ textAlign: "center" }}>
        <h3 className={styles.heading}>
          {heading}
        </h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default Static;
