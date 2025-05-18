import style2 from "./style.module.css";
const MyCatagoryCard = ({ data }) => {
  return (
    <div className={style2.cardContainer}>
      <a href="">
        <h2>{data.title}</h2>
        <div className={style2.imageGrid}>
          {data.imgLink.map((link, index) => (
            <img key={index} src={link} alt={data.name} />
          ))}
        </div>
        <p>shop now</p>
      </a>
    </div>
  );
};

export default MyCatagoryCard;
