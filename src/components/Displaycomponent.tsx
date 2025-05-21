import styles from "../styles/Displaycomponent.module.css"
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";

function DisplayComponent() {
    const name = useSelector((state: RootState) => state.form.name);
    const email = useSelector((state: RootState) => state.form.email);

    const [submitted, setSubmitted] = useState(false); 
    const [submittedName, setSubmittedName] = useState("");
    const [submittedEmail, setSubmittedEmail] = useState("");

    const handleSubmit = () => {
        setSubmittedName(name);
        setSubmittedEmail(email);
        setSubmitted(true);
    };

  return (
    <div>
        <button className={styles.button_form} onClick={handleSubmit}>Submit</button>
        {submitted &&(
            <div className="flex justify-center gap-[15px] ">
            <p className={styles.submit_form}>name:  {submittedName}</p>
            <p className={styles.submit_form}>email:  {submittedEmail}</p>
            </div>
    )}
    </div>
  );
};

export default DisplayComponent;
