import t1 from "../../assets/Images/Phka/8.jpeg";
import t2 from "../../assets/Images/Phka/9.jpeg";
import t3 from "../../assets/Images/Phka/10.jpeg";
import t4 from "../../assets/Images/Phka/11.jpeg";

import "./Cate.css";
const Category = () => {
  const foot = [{ img: t1 }, { img: t2 }, { img: t3 }, { img: t4 }];

  return (
    <>
      <>
        <main className="flex justify-center items-center pt-[20px]  overflow-hidden">
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

export default Category;
