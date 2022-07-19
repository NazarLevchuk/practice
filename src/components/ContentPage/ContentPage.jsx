import React from 'react';
import s from './ContentPage.module.scss';
import { ContentPageFooter } from './ContentPageFooter/ContentPageFooter';
import { ContentPageHeader } from './ContentPageHeader/ContentPageHeader';
import { ContentPageMain } from './ContentPageMain/ContentPageMain';
import { TopBar } from './TopBar/TopBar';

export function ContentPage({ store, setIsLoggedIn }) {
  return (
    <div className={s.ContentPage_container}>
      <ContentPageHeader />
      <TopBar setIsLoggedIn={setIsLoggedIn} dispatch={store.dispatch} />
      <ContentPageMain />S
      <ContentPageFooter />
    </div>
  );
}
