"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [dropBarra1, setdropBarra1] = useState(false);    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link href='/'>Medico </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}