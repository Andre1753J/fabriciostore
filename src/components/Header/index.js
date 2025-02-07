"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [listOpen, setListOpen] = useState(true);

    const openList = () => {
        setListOpen(!listOpen);
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={styles.lista} onClick={openList}>
                        <Link href='#'>Medico </Link>
                        <ul className={`${styles.subLista} ${openList ? styles.litOpen : ''}`}>
                            <li className={styles.subLista}>
                                <Link href='/'>Listar </Link>
                            </li>
                            <li className={styles.subLista}>
                                <Link href='/'>Listar2 </Link>
                            </li>
                            <li className={styles.subLista}>
                                <Link href='/'>Listar3 </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href='/'>Pacientes </Link>
                        <ul>
                            <li>
                                <Link href='/'>Listar</Link>
                            </li>
                        </ul>
                    </li>
                    <li> {/*className={styles.list} */}
                        <Link href='/'>Agendamento </Link>
                        <ul>
                            <li className={styles.subList}>
                                <Link href='/'>Listar</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}