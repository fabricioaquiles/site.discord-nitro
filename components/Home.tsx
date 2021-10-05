import React from 'react';
import styles from './scss/styles.module.scss'

function components() {

    const title = function() {
        return `Pagina inicial`;
    }

    const render = function() {
        return (
            <div className={styles.card}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input id="nitroCode" className="form-control" placeholder="https://discord.gift/3GeMQJftuqq4rvndU" name="name"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button id="nitroButton" className={styles.btn}>Gerar nitro</button>
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