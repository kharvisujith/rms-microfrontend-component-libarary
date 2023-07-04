import React from 'react';

export interface IJobsTitleCellRenderer{
   value:'string',
   onClick?:(value:any)=>void,
}
const JobsTitleCellRenderer = ({ value, onClick }:IJobsTitleCellRenderer) => {

  return <div className="jobs-title-cell-renderer" onClick={onClick}>{value}</div>;
};

export default JobsTitleCellRenderer;