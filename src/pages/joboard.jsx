import React from 'react';
import Jobcard from '@/components/jobcard';
import jobData from "@/util/jobData";

export default function joboard() {
  return (
    <div>
        <div className='cards'>

            {jobData.map(job => <Jobcard job={job} isRemote={job.isRemote}/>)}

        </div>

    </div>
  )
}
