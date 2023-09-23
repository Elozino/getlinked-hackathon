import './timeline.css'

const Timeline = () => {
  return (
    <>
      <div className="timeline">
        <div className="timeline_header">
          <h2>Timeline</h2>
          <p>Here is the breakdown of the time we anticipate
            using for the upcoming event.</p>
        </div>
        <div className="timeline_events">
          <div className="timeline_track">
            <div className="left_track head">
              <h4 className='title'>Hackathon Announcement</h4>
              <p className='text'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
            </div>
            <div className="line_track">
              <div className="timeline_line"></div>
              <div className="circle">1</div>
            </div>
            <div className="right_track body">
              <h4 className="title">
                November 18, 2023
              </h4>
            </div>
          </div>
          <div className="timeline_track">
            <div className="left_track body">
              <h4 className="title">
                November 18, 2023
              </h4>
            </div>
            <div className="line_track">
              <div className="timeline_line"></div>
              <div className="circle">2</div>
            </div>
            <div className="right_track head">
              <h4 className='title'>Teams Registration begins</h4>
              <p className='text'>
                Interested teams can now show their interest in the
                getlinked tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
          <div className="timeline_track">
            <div className="left_track head">
              <h4 className='title'>Teams Registration ends</h4>
              <p className='text'>
                Interested Participants are no longer Allowed to
                register
              </p>
            </div>
            <div className="line_track">
              <div className="timeline_line"></div>
              <div className="circle">3</div>
            </div>
            <div className="right_track body">
              <h4 className="title">
                November 18, 2023
              </h4>
            </div>
          </div>
          <div className="timeline_track">
            <div className="left_track body">
              <h4 className="title">
                November 18, 2023
              </h4>
            </div>
            <div className="line_track">
              <div className="timeline_line"></div>
              <div className="circle">4</div>
            </div>
            <div className="right_track head">
              <h4 className='title'>Announcement of the accepted teams
                and ideas</h4>
              <p className='text'>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="timeline_track">
            <div className="left_track head">
              <h4 className='title'>Getlinked Hackathon 1.0 Offically Begins</h4>
              <p className='text'>
                Accepted teams can now proceed to build their
                ground breaking skill driven solutions
              </p>
            </div>
            <div className="line_track">
              <div className="timeline_line"></div>
              <div className="circle">5</div>
            </div>
            <div className="right_track body">
              <h4 className="title">
                November 18, 2023
              </h4>
            </div>
          </div>
          <div className="timeline_track">
            <div className="left_track body">
              <h4 className="title">
                November 18, 2023
              </h4>
            </div>
            <div className="line_track">
              <div className="timeline_line"></div>
              <div className="circle">6</div>
            </div>
            <div className="right_track head">
              <h4 className='title'>Demo Day</h4>
              <p className='text'>
                Teams get the opportunity to pitch their projects to judges.
                The winner of the hackathon will also be announced on
                this day
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline