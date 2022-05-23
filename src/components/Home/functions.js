const getFlatArray = (elem) => {
    let flattenArray = [];
    const flattenMembers = elem.map(m => {
      if (m.items && m.items.length) {
        flattenArray = [...flattenArray, ...m.items];
      }
      return m;
    });
    return flattenMembers.concat(flattenArray.length ? getFlatArray(flattenArray) : flattenArray);
  };


  export {getFlatArray}