import React from 'react';
import './homepage.css'

function Homepage() {
    return (
      <div className="Home-page">
        <div className='Home-page'>
          <h2>Welcome to kinopoisk unofficial API</h2>
          <div className='home-container'>
            <p>
              Неофициальное апи для доступа к актуальной информации кинопоиска.
              Если вы считаете этот сервис полезным,
              у вас есть возможность поддержать его работу:
              <ul className='bank-cards'>
                <li>Я.Деньги 410011496763207</li>
                <li>WebMoney R464542724522</li>
                <li>Карта 5599005076135776</li>       
                </ul>
              Если у вас есть вопросы, предложения по улучшению или вам не хватает какого-нибудь функционала
              вы можете писать на
              <address>
              <a href='mailto:support@kinopoiskapiunofficial.tech'>support@kinopoiskapiunofficial.tech</a>
              </address>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Homepage