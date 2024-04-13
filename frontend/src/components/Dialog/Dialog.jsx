import {useEffect} from "react";
import "./dialog.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Dialog = ({ areYouSure }) => {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  return (
    <div className="dialog-body">
      <div data-aos="zoom-in-up" className="dialog-div" onClick={(e) => e.stopPropagation()}>
        <h3 className="dialog-text">Are you sure want to delete?</h3>
        <div className="dialog-btn">
          <button onClick={() => areYouSure(true)} className="dialog-bt">
            Yes
          </button>
          <button onClick={() => areYouSure(false)} className="dialog-bt">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
