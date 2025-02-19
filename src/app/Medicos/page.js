"use client"
import { useEffect, useState } from "react"
import styles from "./medicos.module.css"

export default function medicos() {

    const [medico, setMedico] = useState([])
    const [pesquisa, setPesquisa] = useState(undefined)

    const qualquerCoisa = async (pesquisa) => {
        const coisas = await fetch("https://api-clinica-2a.onrender.com/medicos");
        if (!coisas.ok) {
            throw new Error("Erro do cliente, sabe fazer nada tambem");
        } else {
            let data = await coisas.json();
            if (pesquisa == undefined) {
                setMedico(data);
            } else {
                data = data.filter(item => item.nome.toLowerCase().includes(pesquisa.toLowerCase()));
                setMedico(data);
            }
        }
    }

    useEffect(() => { qualquerCoisa(pesquisa) }, [pesquisa]);

    return (
        <div className={styles.medicosConteiner}>
            <h1 className={styles.medicosTitulo}>Lista de Médicos</h1>
            <input placeholder="Medicos" onChange={(e) => setPesquisa(e.target.value)} ></input>
            <div className={styles.medicoCentralizado}>
                <table className={styles.medicosTabela}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nome</th>
                            <th>telefone</th>
                            <th>email</th>
                            <th>especialidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medico.map(finicius => (
                            <tr key={finicius.id}>
                                <td>{finicius.id}</td>
                                <td>{finicius.nome}</td>
                                <td>{finicius.telefone}</td>
                                <td>{finicius.email}</td>
                                <td>{finicius.especialidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}