import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Header } from './components/pages/templates/organisms/header/Header';
import { Cards } from './components/pages/templates/organisms/cards/Cards';
import { Footer } from './components/pages/templates/organisms/footer/Footer';
import { MainPage } from './components/pages/MainPage';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.page}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/orders" element={<Cards />} />
          <Route path="/cards" element={<Cards />} />
          <Route path={'/*'} element={<MainPage />} />
          <Route path="/login" element={<MainPage />} />
          <Route path="/register" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
