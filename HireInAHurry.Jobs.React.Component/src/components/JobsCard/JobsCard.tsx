import React, { useState } from 'react'
import Box from '@mui/material/Box';
import  './JobsCard.style.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Tooltip } from '@mui/material';
export interface IJobsCardProps{
    clientName:string;
    totalAssociateCandidatesCount:number;
    activeJobsCount:number;
    activePercentageClient:number;
    activePercentageRecruiter:number;
    selected:boolean,
    onClick?:()=>void;
}
const JobsCard = ({clientName,activeJobsCount,totalAssociateCandidatesCount,activePercentageClient,activePercentageRecruiter,selected,onClick}:IJobsCardProps) => {

  return (
    <Box data-testid="jobs-card-container" className={`jobs-card-container ${selected?'selected':''}`} onClick={onClick}>
        <h3 data-testid="jobs-card-title" className="jobs-card-title">
            {clientName}
        </h3>
        <div className="jobs-card-content">
            <div className='total-jobs-container'>
                <Tooltip title={`Client is ${activePercentageClient}% Active`} placement="top" style={{cursor:'pointer'}}>
                    <div className="jobs-client-progress-bar">
                        <div className="progress">
                            <div className="fill" style={{ width: `${activePercentageClient}%` }}></div>
                        </div>
                    </div>
                </Tooltip>
                <div data-testid="total-jobs" className='total-jobs'>{activeJobsCount}</div>
                <Tooltip title={`Recruiter is ${activePercentageRecruiter}% Active`} placement="bottom" style={{cursor:'pointer'}}>
                    <div className="jobs-recruiter-progress-bar">
                        <div className="progress">
                            <div className="fill" style={{ width: `${activePercentageRecruiter}%` }}></div>
                        </div>
                    </div>
            </Tooltip>
            </div>
            <div className='jobs-total-associated-candidates'>
                <h3 className="jobs-total-associated-candidates-title">Active Jobs</h3>
                <p>
                    <span>
                    <PersonOutlineIcon className='jobs-candidate-icon' /> {totalAssociateCandidatesCount}
                    </span> 
                    candidates
                </p>
            </div>
        </div>
    </Box>
  )
}

export default JobsCard