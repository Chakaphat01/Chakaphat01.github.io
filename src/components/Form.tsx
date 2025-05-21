import styles from "../styles/Form.module.css"
import { AppDispatch,RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setName } from "../store/slice/FromSlice";

function Form(){
  const dispatch = useDispatch<AppDispatch>();
  const { name, email } = useSelector((state: RootState) => state.form);
    return(
        <div>
            <h2 className="flex justify-center text-[30px]">Form</h2>
            <div className={styles.input_form}>
              <input 
                className={styles.input_styles}
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
              <br />
              <input
              className={styles.input_styles}
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
        </div>
    )
}
export default Form;