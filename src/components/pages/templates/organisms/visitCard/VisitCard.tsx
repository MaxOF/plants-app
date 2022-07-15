import React from 'react';
import s from './VisitCard.module.scss';
import styles from '../../../../../App.module.scss';
import plant from '../../../../../utils/img/visitCard/01.jpg';

export const VisitCard = () => {
  return (
    <section className={s.page__visitCard}>
      <div className={`${styles.container} ${s.visitCard__container}`}>
        <div className={s.visitCard__body}>
          <div className={s.visitCard__header}>
            <h3>Get your favourites plant on our shop now</h3>
            <div>
              <a href="/">Visit shop</a>
            </div>
          </div>
          <div className={s.plant}>
            <img src={plant} alt="plant" />
          </div>
        </div>
      </div>
    </section>
  );
};
