import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import * as api from '../REST.js';
import './movies.css'


const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => { //
        const films = api.getRate(); //componentDidMount - когда срендерился(отрисовался) компонент
        setMovies(await films);

        return () => { //componentWillUnmount - когда кмопонент удалился из вёрстки
            setMovies([]);
        };
    }, []);

    return (
        <div data-at={'wrapper'}>
            <div className="dictionary">
                {
                    movies.length ?
                        movies.map((move, index) =>
                            <Cards
                                key={index}
                                citys={move.nameEn}
                                about={move.year}
                                images={move.posterUrl}
                            />
                        )
                    : null
                }
            </div>
        </div>
    )
  }

export default React.memo(Movies);
