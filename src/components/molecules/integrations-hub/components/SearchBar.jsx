import React from 'react';
import Input from '../../../ui/Input';
import Select from '../../../ui/Select';

const SearchBar = ({ searchQuery, onSearchChange, sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <Input
          type="search"
          placeholder="Search integrations by name, category, or feature..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full"
        />
      </div>
      <div className="w-full md:w-64">
        <Select
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
          placeholder="Sort by"
        />
      </div>
    </div>
  );
};

export default SearchBar;