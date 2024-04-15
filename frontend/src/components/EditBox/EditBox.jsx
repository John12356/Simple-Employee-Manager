import "./edit.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const EditBox = ({ setEdited, edited, confirmEdit}) => {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  function handleOnchange(e) {
    e.preventDefault();

    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="edit-container">
      <div data-aos="zoom-out" className="edit-body">
        <h3>Editing {edited.emp_id}</h3>
        <input
          type="text"
          placeholder="Enter name ( 5 - 20 )"
          name="emp_name"
          value={edited.emp_name}
          onChange={(e) => handleOnchange(e)}
        />
        <input
          type="number"
          placeholder="Enter age ( 18 - 60 )"
          name="emp_age"
          value={edited.emp_age}
          onChange={(e) => handleOnchange(e)}
        />
        <div className="edit-bt-container">
          <button onClick={() => confirmEdit(true)}>Edit</button>
          <button onClick={() => confirmEdit(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditBox;
