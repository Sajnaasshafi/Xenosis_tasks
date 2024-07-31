import React from 'react';



const challengeData = [
    {
        title: 'Push-up',
        goal: 'reduce cholestrol',
        date: '2nd Jan 2023',
        status: 'Completed'
    },
    {
        title: 'Plank',
        goal: 'reduce stomach',
        date: '9th April 2023',
        status: 'On Going',
    },
    {
        title: 'Deadlift',
        goal: 'reduce shoulder',
        date: '5th June 2023',
        status: 'Interested',
    },
    {
        ttitle: 'Squad',
        goal: 'reduce thigh',
        date: '5th June 2023',
        status: 'Interested',
    },
    {
        title: 'Push-up',
        goal: 'reduce cholestrol',
        date: '2nd Jan 2023',
        status: 'Completed'
    },
];

const ActivityList = () => {
    const textColor = challengeData.map(each => {
        if (each.status === "Completed") {
            return 'green';
        } else if (each.status === 'On Going') {
            return 'orange';
        } else {
            return 'blue';
        }
    });

    return (
        <div className="shadow mx-1 px-3 bg-light rounded-3 ">
            <div className=' d-flex align-items-center justify-content-between p-3 mt-3 ' >
                <h4 className="mb-0">My Challenges</h4>
                <button className="btn ">See All</button>
            </div>

            <div className=' '>
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Challenge Name</th>
                            <th>Goal</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {challengeData.map((challenge, index) => (
                            <tr key={index}>
                                <td>{challenge.title}</td>
                                <td>{challenge.goal}</td>
                                <td>{challenge.date}</td>
                                <td style={{ color: textColor[index] }}>{challenge.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActivityList;