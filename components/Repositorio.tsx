import React from 'react';
import styles from './scss/styles.module.scss'

function components() {

    const title = function() {
        return `Repositório`;
    }

    const render = function() {
        return (
            <div className={styles.card}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <h2>Linguagens utilizadas</h2>
                            <p>Abaixo as linguagens que foram utilizadas neste site.</p>
                            <br></br>
                            <img className={styles.img} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="javascript" width="40" height="40" />
                            <img className={styles.img} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="javascript" width="40" height="40" />
                            <img className={styles.img} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="javascript" width="40" height="40" />
                            <br></br>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p>Clique no botão abaixo, para ser enviado ao repositório deste site.</p>
                        <a target="_blank" href="https://github.com/oDustDev/site.discord-nitro" className={styles.btn}>Clique aqui</a>
                    </div>
                </div>
            </div>
        );
    }

    return {
        title,
        render,
    }


}

export default components();