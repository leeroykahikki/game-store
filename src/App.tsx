import './scss/app.scss';

import logo from './assets/game-gta.jpg';

function App() {
  return (
    <section className="category">
      <div className="container">
        <div className="categories">
          <ul className="categories__list">
            <li className="categories__item active">Новинки</li>
            <li className="categories__item">Лидеры</li>
            <li className="categories__item">Последнее добавленное</li>
          </ul>
        </div>

        <div className="cards">
          <div className="game-card">
            <svg
              className="game-card__like"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2571 4.64911L22.2567 4.64958L20.7176 6.23551L20 6.975L19.2824 6.23551L17.7433 4.64958L17.7421 4.64839C14.1437 0.928109 8.36513 0.384986 4.5317 3.65152C0.0708761 7.45914 -0.167353 14.307 3.82812 18.4376L18.9447 34.0463C19.5283 34.6486 20.4636 34.6487 21.0473 34.0465C21.0473 34.0465 21.0474 34.0464 21.0475 34.0463L36.1645 18.4372L36.1647 18.4369C40.1671 14.3065 39.929 7.45935 35.4686 3.65177L22.2571 4.64911ZM22.2571 4.64911C25.8639 0.927623 31.6349 0.385347 35.468 3.65128L22.2571 4.64911Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <div className="game-card__img">
              <img src={logo} alt="game" />
            </div>
            <p className="game-card__to-cart">В корзину</p>
            <p className="game-card__name">Grand Thef Auto V</p>
            <p className="game-card__price">990 ₽</p>
          </div>

          <div className="game-card">
            <svg
              className="game-card__like"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2571 4.64911L22.2567 4.64958L20.7176 6.23551L20 6.975L19.2824 6.23551L17.7433 4.64958L17.7421 4.64839C14.1437 0.928109 8.36513 0.384986 4.5317 3.65152C0.0708761 7.45914 -0.167353 14.307 3.82812 18.4376L18.9447 34.0463C19.5283 34.6486 20.4636 34.6487 21.0473 34.0465C21.0473 34.0465 21.0474 34.0464 21.0475 34.0463L36.1645 18.4372L36.1647 18.4369C40.1671 14.3065 39.929 7.45935 35.4686 3.65177L22.2571 4.64911ZM22.2571 4.64911C25.8639 0.927623 31.6349 0.385347 35.468 3.65128L22.2571 4.64911Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <div className="game-card__img">
              <img src={logo} alt="game" />
            </div>
            <p className="game-card__to-cart">В корзину</p>
            <p className="game-card__name">Grand Thef Auto V</p>
            <p className="game-card__price">990 ₽</p>
          </div>

          <div className="game-card">
            <svg
              className="game-card__like"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2571 4.64911L22.2567 4.64958L20.7176 6.23551L20 6.975L19.2824 6.23551L17.7433 4.64958L17.7421 4.64839C14.1437 0.928109 8.36513 0.384986 4.5317 3.65152C0.0708761 7.45914 -0.167353 14.307 3.82812 18.4376L18.9447 34.0463C19.5283 34.6486 20.4636 34.6487 21.0473 34.0465C21.0473 34.0465 21.0474 34.0464 21.0475 34.0463L36.1645 18.4372L36.1647 18.4369C40.1671 14.3065 39.929 7.45935 35.4686 3.65177L22.2571 4.64911ZM22.2571 4.64911C25.8639 0.927623 31.6349 0.385347 35.468 3.65128L22.2571 4.64911Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <div className="game-card__img">
              <img src={logo} alt="game" />
            </div>
            <p className="game-card__to-cart">В корзину</p>
            <p className="game-card__name">Grand Thef Auto V</p>
            <p className="game-card__price">990 ₽</p>
          </div>

          <div className="game-card">
            <svg
              className="game-card__like"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2571 4.64911L22.2567 4.64958L20.7176 6.23551L20 6.975L19.2824 6.23551L17.7433 4.64958L17.7421 4.64839C14.1437 0.928109 8.36513 0.384986 4.5317 3.65152C0.0708761 7.45914 -0.167353 14.307 3.82812 18.4376L18.9447 34.0463C19.5283 34.6486 20.4636 34.6487 21.0473 34.0465C21.0473 34.0465 21.0474 34.0464 21.0475 34.0463L36.1645 18.4372L36.1647 18.4369C40.1671 14.3065 39.929 7.45935 35.4686 3.65177L22.2571 4.64911ZM22.2571 4.64911C25.8639 0.927623 31.6349 0.385347 35.468 3.65128L22.2571 4.64911Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <div className="game-card__img">
              <img src={logo} alt="game" />
            </div>
            <p className="game-card__to-cart">В корзину</p>
            <p className="game-card__name">Grand Thef Auto V</p>
            <p className="game-card__price">990 ₽</p>
          </div>

          <div className="game-card">
            <svg
              className="game-card__like"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2571 4.64911L22.2567 4.64958L20.7176 6.23551L20 6.975L19.2824 6.23551L17.7433 4.64958L17.7421 4.64839C14.1437 0.928109 8.36513 0.384986 4.5317 3.65152C0.0708761 7.45914 -0.167353 14.307 3.82812 18.4376L18.9447 34.0463C19.5283 34.6486 20.4636 34.6487 21.0473 34.0465C21.0473 34.0465 21.0474 34.0464 21.0475 34.0463L36.1645 18.4372L36.1647 18.4369C40.1671 14.3065 39.929 7.45935 35.4686 3.65177L22.2571 4.64911ZM22.2571 4.64911C25.8639 0.927623 31.6349 0.385347 35.468 3.65128L22.2571 4.64911Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <div className="game-card__img">
              <img src={logo} alt="game" />
            </div>
            <p className="game-card__to-cart">В корзину</p>
            <p className="game-card__name">Grand Thef Auto V</p>
            <p className="game-card__price">990 ₽</p>
          </div>

          <div className="game-card">
            <svg
              className="game-card__like"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2571 4.64911L22.2567 4.64958L20.7176 6.23551L20 6.975L19.2824 6.23551L17.7433 4.64958L17.7421 4.64839C14.1437 0.928109 8.36513 0.384986 4.5317 3.65152C0.0708761 7.45914 -0.167353 14.307 3.82812 18.4376L18.9447 34.0463C19.5283 34.6486 20.4636 34.6487 21.0473 34.0465C21.0473 34.0465 21.0474 34.0464 21.0475 34.0463L36.1645 18.4372L36.1647 18.4369C40.1671 14.3065 39.929 7.45935 35.4686 3.65177L22.2571 4.64911ZM22.2571 4.64911C25.8639 0.927623 31.6349 0.385347 35.468 3.65128L22.2571 4.64911Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <div className="game-card__img">
              <img src={logo} alt="game" />
            </div>
            <p className="game-card__to-cart">В корзину</p>
            <p className="game-card__name">Grand Thef Auto V</p>
            <p className="game-card__price">990 ₽</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
