import t1 from "../../assets/Images/Phka/8.jpeg";
import t2 from "../../assets/Images/Phka/9.jpeg";
import t3 from "../../assets/Images/Phka/10.jpeg";
import t4 from "../../assets/Images/Phka/11.jpeg";
import t5 from "../../assets/Images/Phka/5.jpeg";
import t6 from "../../assets/Images/Phka/6.jpeg";
import t7 from "../../assets/Images/Phka/7.jpeg";

import "./Cate.css";
const CategoryFootag = () => {
  const foot = [
    { img: t1 },
    { img: t2 },
    { img: t3 },
    { img: t4 },
    { img: t5 },
    { img: t6 },
    { img: t7 },
  ];

  return (
    <>
      <>
        <main className="flex justify-center imageReveal items-center pt-[20px]  overflow-hidden">
          <div className="scroll-container">
            <div className="scroll-content">
              {/* First set */}
              {foot.map((item, ind) => (
                <img key={`first-${ind}`} src={item.img} alt="" />
              ))}
              {/* Duplicate set */}
              {foot.map((item, ind) => (
                <img key={`second-${ind}`} src={item.img} alt="" />
              ))}
            </div>
          </div>
        </main>
      </>
    </>
  );
};

export default CategoryFootag;
