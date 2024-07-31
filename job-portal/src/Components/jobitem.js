import React, { useState } from 'react';
import JobList from './joblist'; 
import AddJob from './Addjob'; 

function JobItem() {
    const [entries, setEntries] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [filterCompanyName, setFilterCompanyName] = useState('');
    const [filterTitle, setFilterTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    const addJob = (newJob) => {
        setEntries([...entries, newJob]);
        setShowForm(false);
    };

    const filteredEntries = entries.filter(entry =>
        entry.companyname.toLowerCase().includes(filterCompanyName.toLowerCase()) &&
        entry.title.toLowerCase().includes(filterTitle.toLowerCase())
    );

    // Paginate filtered entries
    const indexOfLastEntry = currentPage * itemsPerPage;
    const indexOfFirstEntry = indexOfLastEntry - itemsPerPage;
    const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

    const totalPages = Math.ceil(filteredEntries.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="job-item-container">
            <div className="filter-container">
                <input 
                    type="text" 
                    placeholder="Filter by Company" 
                    value={filterCompanyName}
                    onChange={(e) => setFilterCompanyName(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Filter by Title" 
                    value={filterTitle}
                    onChange={(e) => setFilterTitle(e.target.value)}
                />
            </div>
            <button 
                style={{
                    color: 'white', 
                    fontWeight: 'bold', 
                    backgroundColor: 'blue', 
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    cursor: 'pointer'
                }}
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Cancel" : "Post Job"}
            </button>
            {showForm && <AddJob addJob={addJob} />}
            {currentEntries.length > 0 ? currentEntries.map((entry, index) => (
                <JobList key={index} {...entry} />
            )) : (
                <p>No jobs found</p>
            )}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default JobItem;
