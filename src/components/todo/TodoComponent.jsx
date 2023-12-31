import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import moment from "moment";
import {
  createTodoApi,
  retrieveTodoApi,
  updateTodoApi,
} from "./api/TodoApiService";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function TodoComponent() {
  const { id } = useParams();

  const authContext = useAuth();
  const navigate = useNavigate();

  const username = authContext.username;

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => {
    retrieveTodos();
  }, [id]);

  function retrieveTodos() {
    if (id != -1) {
      console.log("Retrieving" + username + id);
      retrieveTodoApi(username, id)
        .then((response) => {
          console.log("success", response);
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => console.log(error));
    }
  }

  function onSubmit(values) {
    console.log(values);
    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };
    console.log(todo);

    if (id == -1) {
      createTodoApi(username, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    } else {
      updateTodoApi(username, id, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    }
  }

  const validate = (values) => {
    let errors = {
      //   decripiton: "Enter a valid description",
      //   targetDate: "Enter a valid target date",
    };
    console.log(values);

    if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters";
    }

    if (
      values.targetDate.length == null ||
      values.targetDate == "" ||
      !moment(values.targetDate).isValid
    ) {
      errors.targetDate = "Enter a target date";
    }

    return errors;
  };

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-danger"
              />

              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-danger"
              />
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Target Date </label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>
              <div>
                <button className="btn btn-success m5" type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
