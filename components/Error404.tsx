import React from 'react';
import styles from './scss/styles.module.scss';

function components() {

    const title = function() {
        return `404`;
    }

    const render = function() {
        return (
            <div className={styles.card}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <h1>404</h1>
                            <span>Página não encontrada</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button id="voltarButton" className={styles.btn}>Voltar ao inicio</button>
                    </div>
                </div>
            </div>
        );
    }

    return {
        title,
        render
    }

}

export default components();