import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function SearchBar({ onAnalyze }) {
  const [packageName, setPackageName] = useState('');

  const handleAnalyze = () => {
    onAnalyze(packageName);
  };

  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <TextField
        label="Package Name"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" onClick={handleAnalyze}>
        Analyze
      </Button>
    </div>
  );
}

export default SearchBar;
