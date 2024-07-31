import React from 'react'
        import Header from '../Header'
        import Activity from '../Activites'
        import Activitylist from '../Activitylist'
        import "./index.css"
        import MySchedule from '../Myschedule'
        import ActivityForm from '../Activityform'

        const challengeDetails = [
            { id: 1, total: 2, text: 'Current ', color: 'orange' },
            { id: 2, total: 5, text: 'Completed ', color: 'green', },
            { id: 3, total: 10, text: 'Interested ', color: 'blue' },
        ];


const Body = () => {
    return (
        <div className='w-100 course-wrapper'>
            <Header />
            <h4 className='mx-3 d-block'>Welcome Back, John</h4>
            <div className='d-flex justify-content-around'>
                <div>
                    <div className='d-flex gap-5 mt-4 '>
                        {challengeDetails.map(each => (
                            <Activity key={each.id} each={each} />
                        ))}
                    </div>
                    <div>
                        <Activitylist />
                    </div>
                </div>
                <MySchedule />
            </div>
            <ActivityForm/>
        </div>
    );
};

export default Body;

