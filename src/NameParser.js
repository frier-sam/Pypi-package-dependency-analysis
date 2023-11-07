const parsePackageName = (dependencyString) => {
  // Split on semicolon to handle conditions
  let [depPart] = dependencyString.split(';');
  
  // Extract package name by removing version specifiers and conditions
  const packageNameRegex = /^[a-zA-Z0-9-_.]+/;
  const match = depPart.match(packageNameRegex);
  
  return match ? match[0] : null;
};

export default parsePackageName;