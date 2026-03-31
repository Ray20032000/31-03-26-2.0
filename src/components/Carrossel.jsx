import { useEffect, useRef } from "react";
import styles from "../styles/Carrossel.module.css";
import CardFilme from "../components/CardFilme.jsx";

function Carrossel() {
    const carroselRef = useRef(null);

    useEffect(() => {
        const carrosel = carroselRef.current;

        function handleWheel(e) {
            e.preventDefault();
            carrosel.scrollLeft += e.deltaY;
        }

        carrosel.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            carrosel.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className={styles.carrossel} ref={carroselRef}>
            <CardFilme className={styles.item} id={1}/>
            <CardFilme className={styles.item} id={2}/>
            <CardFilme className={styles.item} id={3}/>
            <CardFilme className={styles.item} id={4}/>
            <CardFilme className={styles.item} id={5}/>
            <CardFilme className={styles.item} id={6}/>
            <CardFilme className={styles.item} id={7}/>
            <CardFilme className={styles.item} id={8}/>
            <CardFilme className={styles.item} id={9}/>
            <CardFilme className={styles.item} id={10}/>

        </div>
    );
}

export default Carrossel;