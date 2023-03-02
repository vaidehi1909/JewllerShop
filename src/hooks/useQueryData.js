import { useEffect, useState } from "react";

const getFilteredData = (data, filters, filterKey) => {
  return data.filter((d) => {
    return (
      d[filterKey].filter((cat) => filters[filterKey].includes(cat)).length > 0
    );
  });
};

const getSortedData = (data, sorts, sortKey) => {
  const sortFun =
    sorts[sortKey] === "asc"
      ? (a, b) => a[sortKey] - b[sortKey]
      : (a, b) => b[sortKey] - a[sortKey];
  return data.sort(sortFun);
};

const useQueryData = ({ sourceData, filters, sorts }) => {
  const [data, setData] = useState(sourceData);

  useEffect(() => {
    const filterKeys = Object.keys(filters);
    const sortKeys = Object.keys(sorts);
    if (filterKeys.length === 0 && sortKeys.length === 0) {
      setData(sourceData);
    } else {
      let newData = sourceData.slice(0);
      if (filterKeys.length > 0) {
        newData = getFilteredData(newData, filters, filterKeys[0]);
      }
      if (sortKeys.length > 0) {
        newData = getSortedData(newData, sorts, sortKeys[0]);
      }
      setData(newData);
    }
  }, [filters, sorts, sourceData]);
  return { data };
};

export default useQueryData;
