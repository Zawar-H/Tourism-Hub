import React from 'react'
import jobData from "@/util/jobData"

export default function someJob(props) {

  const job = jobData.find(job => job.id === props.id);
  

    if(!job){
      return(
        <div>job not found</div>
      )
    }

  return (
    <>
        ID: {props.id}
        <br></br>
        <p>job title with id of {props.id}: {job.title}</p>
    </>
  )
}


export function getServerSideProps(ctx){
  return{
    props: {
      id: ctx.params.id
    }
  }
}