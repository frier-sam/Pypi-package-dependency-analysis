import React, { useState, useEffect } from 'react';
import DependencyItem from './DependencyItem';
import { List } from '@mui/material';
import parsePackageName from './NameParser';

function DependencyList({ packageName }) {
  const [dependencies, setDependencies] = useState([]);
  const [fetchedPackages, setFetchedPackages] = useState(new Set());

  const fetchDependencies = (packageName, parentCallback) => {
    if (fetchedPackages.has(packageName)) return;

    fetch(`https://pypi.org/pypi/${packageName}/json`)
      .then(response => response.json())
      .then(data => {
        const subDeps = data.info.requires_dist || [];
        const newDependencies = subDeps.map(subDep => {
          const name = parsePackageName(subDep); // Use the parsePackageName function
          return { name, subDependencies: [] };
        });

        setFetchedPackages(prev => new Set([...prev, packageName]));

        if (parentCallback) {
          parentCallback(newDependencies);
        } else {
          setDependencies(newDependencies);
        }
      })
      .catch(error => console.error('Error fetching dependencies:', error));
  };

  useEffect(() => {
    if (packageName) {
      fetchDependencies(packageName);
    }
  }, [packageName]);

  return (
    <List>
      {dependencies.map((dep, index) => (
        <DependencyItem 
          key={`${dep.name}-${index}`}
          dependency={dep}
          fetchDependencies={fetchDependencies}
        />
      ))}
    </List>
  );
}

export default DependencyList;
