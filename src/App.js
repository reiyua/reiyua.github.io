import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>reiyua</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>I'm Reiyua (pronounced ray-ya), or Rei (pronounced ray) for short. I'm a nerd at heart who's enjoyed tinkering with technology since childhood. I love running Homelabs and have one myself.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Here are some project's I have created overtime, most of these are part of my academic endeavours.</p>
          <p>More personal project's will be added as time goes on.</p>
          <p>For a more in-depth and up-to-date look at my projects, visit my Github: https://github.com/reiyua</p>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">TipToe Sole</h5>
                  <p className="card-text">This website was created as part of my Cert IV I.T course for an assignment at TAFENSW. The scenario given was to build a website for an online, Australian shoe store. This website had a main focus on accessibility and the ability to run across a range of devices. This website had to be simple to avoid distractions but ALSO be able to provide detailed information in a neat way.</p>
                  <a href="https://reiyua.github.io/TiptoeSoleStore/" className="btn btn-primary">View Website</a>
                  <a href="https://github.com/reiyua/TiptoeSoleStore" className="btn btn-primary">View Github Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">TAFE NSW Cert IV Lesson Website</h5>
                  <p className="card-text">This is a website that was created as I learned how to use HTML & CSS during my Cert IV at TAFE NSW, very basic.</p>
                  <a href="https://reiyua.github.io/TAFENSWCertIVLessonWebsite/" className="btn btn-primary">View Website</a>
                  <a href="https://github.com/reiyua/TAFENSWCertIVLessonWebsite/" className="btn btn-primary">View Github Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">RaysBookClub</h5>
                  <p className="card-text">This is a a website hosted on Google Firebase to help me learn React.js and it's derivatives for an assessment at TAFE NSW as part of my Diploma in General I.T.
                  It is designed to be a simple book review club site where user's can look at books, read further detail and leave reviews.
                  The review function was not fully implmemented as I implemented that into RaysMovieClub, my assessment task.</p>
                  <a href="https://rayyan-h-tafe-nsw.web.app" className="btn btn-primary">View Website</a>
                  <a href="https://github.com/reiyua/RaysBookClub" className="btn btn-primary">View Github Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">RaysMovieClub</h5>
                  <p className="card-text">This is a new project that I recently completed. It showcases my skills in JavaScript, HTML, and CSS. This is the assessment task version of RaysBookClub, it has features such as leaving reviews and reading further details about the movie.</p>
                  <a href="https://rayyan-h-tafe-nsw-2.web.app" className="btn btn-primary">View Website</a>
                  <a href="https://github.com/reiyua/RaysMovieClub" className="btn btn-primary">View Github Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">SimpleLogin</h5>
                  <p className="card-text">A python program I made as part of an assignment while studying at TAFE NSW. This program is designed to act as a simple login prompt with the ability to tempoarily append new credentials to the master database of credentials and list them.</p>
                  <a href="https://github.com/reiyua/SimpleLogin" className="btn btn-primary">View Github Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Marks</h5>
                  <p className="card-text">A python program I "repaired" as part of an assessment while studying at TAFE NSW.

All fixes towards the code have been noted in the comments.

Simple score calculator which calculates the total and average based on the scores provided. The scores must be between 0 and 100.

I fixed issues ranging from simple mistakes such as mismatched variable names and adding int( onto certain commands to creating new sections of code entirely which involved loops.</p>
                  <a href="https://github.com/reiyua/Marks" className="btn btn-primary">View Github Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">ReactListApp</h5>
                  <p className="card-text">This was done as part of my studies at TAFENSW to help me learn and understand React.JS and ReactDOM, hosted on CodePen.</p>
                  <a href="https://codepen.io/rayyan_hTAFENSW/pen/dyQwjqZ" className="btn btn-primary">View CodePen project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">ICTPRG302CodingLessons</h5>
                  <p className="card-text">These are pieces of Python code I created as part of my lessons back at TAFE NSW in 2022.</p>
                  <a href="https://github.com/reiyua/ICTPRG302CodingLessons" className="btn btn-primary">View Github Project</a>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <p>Currently studying a Diploma in General I.T at TAFE NSW.</p>
          <p>Completed a Certificate IV in I.T at TAFE NSW.</p>
          <p>Completed a Certificate III in I.T at TAFE NSW.</p>
          </section>
          <section>
          <h2>Volunteering / Experience</h2>
          <p>Worked as a volunteer at my former primary school as part of a week work placment with tasks such as: .</p>
          <p>- reimaging computer lab machines</p>
          <p>- setting up new computers</p>
          <p>- maintaining security update's for devices such as Windows computer's and iPads.</p>
          <p>- setting up new iPads</p>
          <p>Regularly voulunteered my time during my off day's at my high school with the technology as part of their "Genius Hour"</p>
          </section>
          <section>
          <h2>Interests</h2>
          <p>Technology</p>
          <p>Homelabs</p>
          <p>Video Games</p>
          <p>Music</p>
          <p>Anime</p>
          <p>TV Shows</p>
          </section>
        <section>
          <h2>Contact</h2>
          <p>email: rei@reiyua.lol</p>
          <p>github: @reiyua</p>
          <p>discord: reiyua</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 reiyua</p>
      </footer>
    </div>
  );
}

export default App;
