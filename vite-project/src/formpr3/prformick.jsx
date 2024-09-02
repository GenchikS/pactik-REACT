import { Formik, Form, Field } from "formik";
import ArrayUser from "../product/favouriteBooks.json"
import css from "./feedbackform.module.css"
import { useId } from "react";

const userFormInput = {
  name: "Nic",
  email: "",
};

export default function FeedbackForm() {
    const nameId = useId();
    const emailId = useId();
    
    const handleSubmit = (value) => {
        console.log("value", userFormInput);
        // return [...userFormInput, value];
    }
    // console.log("ArrayUser", ArrayUser);  // об'єкт з json
    return (
      // <Formik initialValues={{ ArrayUser }} //  приклад підстановки масиву
      <Formik initialValues={userFormInput} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={nameId}>username</label>
                <Field className={css.name} type="text" name="name" id={nameId} />
            <label htmlFor={emailId}>user email</label>    
                <Field className={css.email} type="email" name="email" id={ emailId} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
};

