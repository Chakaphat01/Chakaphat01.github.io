import { useDispatch, } from "react-redux";
import styles from "../styles/Home.module.css"
import { decrement, increaseByAmount, increment } from "../store/slice/CounterSlice";
import { useState } from "react";
import API from "../API";


function Home() {
    // const value = useSelector((state) => state);
    const dispatch = useDispatch();
    const [count,setCount] = useState<number>(0);
    return (
        <div className={styles.center}>
            <div> Homepage</div>
            <button onClick={() => dispatch(increment())} className={styles.btn_home03}> increment </button>
            <button onClick={() => dispatch(decrement())} className={styles.btn_home04}> decrement </button>
            <div>
                <input 
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                type="number"
                />
                <button onClick={() => dispatch(increaseByAmount(count || 0))} className={styles.btn_home02}> Increase by amount </button>
            <API/>
            </div>
        </div>
    )
}
export default Home;

