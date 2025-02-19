"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [listOpen, setListOpen] = useState(true);
    const [listOpen2, setListOpen2] = useState(true);
    const [listOpen3, setListOpen3] = useState(true);
    
    // const [numTest, setNumTest] = useState(0);

    // const testeNum = () => {
    //     setNumTest(numTest = 1);
    // }

    // switch (numTest) {
    //     case numTest == 1:
    //         setListOpen(!listOpen);
    //         console.log(listOpen);
    //         break;

    //     case numTest == 2:
    //         setListOpen2(!listOpen2);
    //         console.log(listOpen2);
    //         break;

    //     case numTest == 3:
    //         setListOpen3(!listOpen3);
    //         console.log(listOpen3);
    //         break;
    //     default:
    //         break;
    // }


    const openList = () => {
        setListOpen(!listOpen);
        // console.log(listOpen);
    };

    const openList2 = () => {
        setListOpen2(!listOpen2);
        // console.log(listOpen2)
    };

    const openList3 = () => {
        setListOpen3(!listOpen3);
        // console.log(listOpen3)
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={styles.lista} onClick={openList}>
                        <Link href='#'>Médicos</Link>
                        <ul className={`${styles.subLista} ${listOpen ? styles.litOpen : ''}`}>
                            <li className={styles.subLista}>
                                <Link href='/Medicos'>Listar </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.lista} onClick={openList2}>
                        <Link href='#'>Paciente</Link>
                        <ul className={`${styles.subLista} ${listOpen2 ? styles.litOpen : ''}`}>
                            <li className={styles.subLista}>
                                <Link href='/Paciente'>Listar </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.lista} onClick={openList3}>
                        <Link href='#'>Agendamento</Link>
                        <ul className={`${styles.subLista} ${listOpen3 ? styles.litOpen : ''}`}>
                            <li className={styles.subLista}>
                                <Link href='/Agendamento'>Listar</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}