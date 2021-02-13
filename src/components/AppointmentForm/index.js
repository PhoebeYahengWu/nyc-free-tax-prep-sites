import React from "react";

function AppointmentForm({ handleAppointChange }) {
    return (
        <div className="card p-2 pb-0">
        <div className="pt-1">
        <label>
            <input type="checkbox" className="filled-in checkbox-blue" onChange={handleAppointChange}/>
            <span>Both</span>
        </label>
        </div>
        <div>
        <label>
            <input type="checkbox" className="filled-in checkbox-blue" onChange={handleAppointChange}/>
            <span>Walk-in Only</span>
        </label>
        </div>
        <div>
        <label className="mb-0">
            <input type="checkbox" className="filled-in checkbox-blue" onChange={handleAppointChange}/> 
            <span>Appointment Only</span>
        </label>
        </div>
    </div>
    )
}

export default AppointmentForm; 