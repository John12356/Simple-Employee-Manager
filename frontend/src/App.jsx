import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Dialog from "./components/Dialog/Dialog";
import EditBox from "./components/EditBox/EditBox";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./assets/logo.jpg";

const App = () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  const [dialog, setDialog] = useState({
    isLoading: false,
  });
  const [edit, setEdit] = useState({
    isLoading: false,
  });
  const delIdRef = useRef();
  const editIdRef = useRef();
  const [edited, setEdited] = useState({
    emp_id: "",
    emp_name: "",
    emp_age: "",
  });
  const [ipValue, setIpValue] = useState({
    emp_id: "",
    emp_name: "",
    emp_age: "",
  });

  const [emp, setEmp] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/employee/get")
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setEmp]);

  const getEmployee = () => {
    axios
      .get("http://127.0.0.1:8000/employee/get")
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => console.log(err));
  };

  function handleOnchange(e) {
    e.preventDefault();

    setIpValue({
      ...ipValue,
      [e.target.name]: e.target.value,
    });
  }

  const addEmployee = () => {
    if (
      ipValue.emp_id === "" ||
      ipValue.emp_age === "" ||
      ipValue.emp_name === ""
    ) {
      toast.error("Enter all the details!!..");
      return;
    }
    let found = emp.find((each) => each.emp_id.toString() === ipValue.emp_id);
    if (found) {
      toast.error("Employee ID already exist:(");
      return;
    }
    if (ipValue.emp_name.length < 5 || ipValue.emp_name.length > 20) {
      toast.error("Name should contains 5 to 20 letters");
      return;
    }
    if (ipValue.emp_age < 18 || ipValue.emp_age > 60) {
      toast.error("Age should be 18 to 60");
      return;
    }

    axios
      .post("http://127.0.0.1:8000/employee/create", ipValue)
      .then((res) => {
        if (res.status === 200) {
          setEmp([...emp, ipValue]);
          // getEmployee()
          toast.success("Employee added successfully");
          setIpValue({ emp_id: "", emp_name: "", emp_age: "" });
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteEmployee = (id) => {
    setDialog({ isLoading: true });
    delIdRef.current = id;

  };

  const editEmployee = (each) => {
    setEdit({ isLoading: true });
    setEdited(each)
    editIdRef.current = each.emp_id;
  };

  const areYouSure = (yes) => {
    if (yes) {
      axios
        .post(`http://127.0.0.1:8000/employee/delete/${delIdRef.current}`)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Deleted successfully :(");
            // getEmployee();
            setEmp(emp.filter((emp) => delIdRef.current !== emp.emp_id));
          }
        })
        .catch((err) => console.log(err));
      setDialog({ isLoading: false });
    } else {
      setDialog({ isLoading: false });
    }
  };

  const confirmEdit = (yes) => {
    if (yes) {
      axios
        .post(
          `http://127.0.0.1:8000/employee/edit/${editIdRef.current}`,
          edited
        )
        .then((res) => {
          if (res.status === 200) {
            setEdited({ emp_name: "", emp_age: "" });
            toast.success("Edited Successfully!!..");
            getEmployee();
          }
        })
        .catch((err) => console.log(err));
      setEdit({ isLoading: false });
    } else setEdit({ isLoading: false });
  };

  return (
    <div className="whole-container">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="logo-div">
        <img className="app-logo" src={logo} alt="logo" />
        <h1 className="app-head">
          <span id="first">Securden </span>
          <span id="third">Employees</span>
        </h1>
      </div>
      <div className="top-div">
        <input
          name="emp_id"
          value={ipValue.emp_id}
          onChange={(e) => handleOnchange(e)}
          type="number"
          className="add-ip"
          placeholder="Enter ID"
        />
        <input
          name="emp_name"
          value={ipValue.emp_name}
          onChange={(e) => handleOnchange(e)}
          type="text"
          className="add-ip"
          placeholder="Enter name ( 5 - 20 )"
        />
        <input
          name="emp_age"
          value={ipValue.emp_age}
          onChange={(e) => handleOnchange(e)}
          type="number"
          className="add-ip"
          placeholder="Enter age ( 18 - 60 )"
        />
        <button onClick={addEmployee} className="add-bt">
          Add+
        </button>
      </div>
      <div className="body-div">
        {edit.isLoading && (
          <EditBox
            confirmEdit={confirmEdit}
            setEdited={setEdited}
            edited={edited}
            emp={emp}
            editIdRef={editIdRef}
          />
        )}
        {dialog.isLoading && <Dialog areYouSure={areYouSure} />}
        {emp.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <td>Employee ID</td>
                <td>Employee Name</td>
                <td>Employee Age</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>

            <tbody>
              {emp.map((each, id) => (
                <tr key={id}>
                  <td>{each.emp_id}</td>
                  <td>{each.emp_name}</td>
                  <td>{each.emp_age}</td>
                  <td>
                    <button
                      onClick={() => editEmployee(each)}
                      className="edit-bt"
                    >
                      <FaRegEdit size={22} color="green" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteEmployee(each.emp_id)}
                      className="del-bt"
                    >
                      <MdDelete size={22} color="#FF204E" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="no-emp">No Employees available at the moment :(</h1>
        )}
      </div>
    </div>
  );
};

export default App;
