import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import DependencyList from './DependencyList';
import { Container } from '@mui/material';

export function App(props) {
  const [packageName, setPackageName] = useState('');
  const [fetchedPackages, setFetchedPackages] = useState(new Set());

  const handleAnalyze = (newPackageName) => {
    setPackageName(newPackageName);
    setFetchedPackages(new Set()); // Reset fetched packages on new analysis
  };

  return (
    <Container>
      <TopBar />
      <SearchBar onAnalyze={handleAnalyze} />
      <DependencyList 
        packageName={packageName} 
        fetchedPackages={fetchedPackages} 
        setFetchedPackages={setFetchedPackages} 
      />
    </Container>
  );
}
