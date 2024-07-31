import React from 'react'
        import "./index.css"


        const Activity = (props) => {
            const { each } = props
            const { challenge , description, startdate, enddate, goal, color } = each
            const colorText = {
                color: `${color}`
            }
            return (
                <div className='d-flex flex-column align-items-center shadow course-container'>
                    <p className='fs-2' style={colorText}>{challenge} </p>
                    <p>{description} </p>
                    <p>{startdate} </p>
                    <p>{enddate} </p>
                    <p>{goal} </p>
                </div>
            )
        }

        export default Activity