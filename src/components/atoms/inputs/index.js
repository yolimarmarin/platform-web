import React from 'react';
import { PrimaryInputMainContainer, SearchBarInputMainContainer } from './style';
import SERACH_ICON from '../../../assets/search.svg';

const PrimaryInput = ({ placeholder, value }) => {
  return <PrimaryInputMainContainer placeholder={placeholder} value={value} background="#f5f5fb" />;
};

const SearchBarInput = ({ onChange, value = '' }) => {
  return (
    <SearchBarInputMainContainer onChange={onChange} margin="5px 0" background="#f5f5fb">
      <PrimaryInput value={value} placeholder="Search and Find" background="#f5f5fb" />
      <img className="search-icon" alt={SERACH_ICON} src={SERACH_ICON} />
    </SearchBarInputMainContainer>
  );
};

export { SearchBarInput };
