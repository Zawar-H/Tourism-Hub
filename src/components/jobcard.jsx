import React from 'react'
import Link from 'next/Link'

export default function jobcard(props) {

  return (
        <Link className='job-card' href={`/jobs/${props.job.id}`}>
            <h1>{props.job.title}</h1>
            <h2>{props.job.company}</h2>
            <h2> <i className='fa-solid fa-location-dot'></i> {props.job.location}</h2>

            <div className='tags mt-2'>
                {props.job.tags.map((tag) => {
                    return(
                        <p>
                            {tag}
                        </p>
                    )
                })}
            </div>
            <p>
                {props.job.isRemote ? "🐕" : ""}
            </p>
        </Link>
  )
}

