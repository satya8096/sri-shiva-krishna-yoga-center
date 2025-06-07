import React from "react";
import {
  onlineSchedule,
  offlineDays,
  offlineSchedule,
} from "../Data/BrandData";

const ClassesSchedule = () => {
  return (
    <div className="live-schedule-section container">
      <h3 className="section-heading" data-aos="fade">
        📅 Live Yoga Online Class Schedule
      </h3>
      <p className="schedule-subtext" data-aos="fade">
        Stay consistent with your practice — reserve your spot now.
      </p>

      <div className="schedule-table" data-aos="fade">
        <div className="table-header">
          <div>Time</div>
          <div>Class Type</div>
          <div>Trainer</div>
          <div>Action</div>
        </div>

        {onlineSchedule.map((item, index) => (
          <div className="table-row" key={index} data-aos="fade">
            <div>{item.time}</div>
            <div>Yoga</div>
            <div>Siva Rama Krishna</div>
            <div>
              <a href="/contact" className="book-btn">
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <section className="schedule-section mt-5">
        <div className="schedule-containe">
          <h3 className="section-heading" data-aos="fade">
            🧘 Offline Yoga Class Schedule
          </h3>
          <p className="schedule-subtitle" data-aos="fade">
            Join us Monday to Saturday for enriching sessions tailored for your
            body, mind, and soul.
          </p>

          <div className="schedule-gr" data-aos="fade">
            {offlineDays.map((day, index) => (
              <div key={index} className="schedule-card">
                <h3>{day}</h3>
                <div className="schedule-timing">
                  {offlineSchedule.map((time, i) => (
                    <p key={i}>{time}</p>
                  ))}
                </div>
                <h5>Sunday - Holiday</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassesSchedule;
