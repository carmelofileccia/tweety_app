import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GET, DELETE } from '../../utils/api';
import LayoutAlt from '../../components/LayoutAlt';
import styles from "./[id].module.scss";



const DynamicMessage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [messageData, setMessageData] = useState({});

    const onMessageDelete = (id) => {
        const deleteIt = confirm("Sei sicuro di volerlo cancellare?");

        deleteIt &&
            DELETE("messages", id).then(() => {
                router.push('/');

            });
    };

    useEffect(() => {
        id && localStorage.setItem("id", id);

        GET(`messages/${localStorage.getItem("id")}`).then((data) => setMessageData(data));
    }, []);

    return (
        <>
            <LayoutAlt>
                <div className={styles.wrapper} >

                    <h3 className={styles.wrapper__text}>{messageData.text}</h3>
                    <p className={styles.wrapper__user}>{messageData.sender}</p>
                    <p className={styles.wrapper__data}>{messageData.date}</p>
                    <button className={styles.wrapper__btn} onClick={() => onMessageDelete(messageData.id)}>x</button>

                </div>
            </LayoutAlt>
        </>
    )

}

export default DynamicMessage;