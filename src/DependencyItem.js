import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import parsePackageName from './NameParser';

function DependencyItem({ dependency, fetchDependencies }) {
  const [subDependencies, setSubDependencies] = useState([]);

  const handleExpand = () => {
    if (subDependencies.length === 0) {
      fetchDependencies(dependency.name, (newSubDependencies) => {
        setSubDependencies(newSubDependencies);
      });
    }
  };

  return (
    <Accordion onChange={handleExpand}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{dependency.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {subDependencies.map((subDep, index) => (
          <DependencyItem 
            key={`${subDep.name}-${index}`}
            dependency={subDep}
            fetchDependencies={fetchDependencies}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default DependencyItem;
