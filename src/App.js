import React from 'react';
import './App.css'; 


function App() {

return (
    <div>
      <section id='intro' className='cc-container'>
        <div className='logo_navbar'>
          <div className='logo_navbar_container'>
            <div className='logo'>
              <h2>blogr</h2>
            </div>

            <nav className="navbar" id='phoneNavbar'>
              <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                  <li><a href="/#">Product</a></li>
                  <li><a href="/#">Company</a></li>
                  <li className="services"><a href="/#">Connect</a>
                    <ul class="dropdown">
                      <li><a href="/#">Contact </a></li>
                      <li><a href="/#">Newsletter</a></li>
                      <li><a href="/#">Linkendin</a></li>
                    </ul>

                  </li>
                  <li><a href="/#">Login</a></li>
                  <li><a href="/#" className='action_btn'>Sign Up</a></li>
                </div>
              </ul>
            </nav>
            <div id='desktopNavbar'>
              <nav className="navbar-1">
                <ul className="nav-links-1">
                  <div className="menu-1">
                    <li><a href="/footer">Product</a></li>
                    <li><a href="/footer">Company</a></li>
                    <li className="services-1"><a href="/footer">Connect</a>
                      <ul class="dropdown-1">
                        <li><a href="/footer">Contact </a></li>
                        <li><a href="/footer">Newsletter</a></li>
                        <li><a href="/footer">Linkendin</a></li>
                      </ul>

                    </li>
                    <li><a href="/">Login</a></li>
                    <li className='special_link'><a href="/#" className='action_btn-1'>Sign Up</a></li>
                  </div>
                </ul>
              </nav>
            </div>

          </div>
        </div>
        <div className='content-container'>
          <h2>A modern publishing platform</h2>
          <p>grow your audience and build your online brand</p>
          <div className='btns'>
            <button className='btn_1'><a href='/#'>Start for Free</a></button>
            <button className='btn_2'><a href='/#'>Learn More</a></button>
          </div>
        </div>
      </section>


      <section id='future' className='cc-container'>
        <div className='future-content'>
          <h2>Designed for the future</h2>
          <div className='flex-container'>
            <div className='box-1'>

              <img src='./images/illustration-editor-mobile.svg' alt='illustratorEditor' className='floating' id='mobileImg' style={{
                width: "100%", height: "400px"
              }} />

              <img src='./images/illustration-editor-desktop.svg' alt='illustratorEditor' className='floating' id='desktopImg' style={{
                width: "100%", height: "600px"
              }} />
            </div>
            <div className='box-2'>
              <div className='lil-box'>
                <div className='lil-box-content'>
                  <h2>Introducing an extensible editor</h2>
                  <p>Blogr features an exceedingly intiutive interface which lets you focus on one thing: creating content.The editor supports management of multiple blogs and allow easy manipulation of embeds such as image,videos, and Markdown.Extensibility with plugins and themes provide easy ways to add functionality or change the look of a blog.</p>
                </div>

              </div>
              <div className='lil-box'>
                <div className='lil-box-content' id='lil-box-content-1'>
                  <h2>Robust content management</h2>
                  <p>Flexible content management enables users to easily move through posts.Increase the usability of your blog by adding customized categories,sections,formats or flow.With this functionality,you're in full control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id='art' className='cc-container'>
        <div className='flex-container' id='flex-container-1'>
          <div className='box-3' id='box-3-1'>
            <img src='./images/illustration-phones.svg' alt='illustratorPhone' className='floating' id='mobileImg' style={{
              width: "100%", height: "400px"
            }} />
            <div className='abegImg'>
              <img src='./images/illustration-phones.svg' alt='illustratorPhoneDesktop' className='floating abegImg' id='desktopImg' style={{
                width: "50%", height: "700px", position: 'relative', bottom: '600px', left: '50px'
              }} />
            </div>

          </div>
          <div className='box-4'>
            <div className='box-4-content'>
              <h2>State of the Art Infrastructure</h2>
              <p>With reliability and speed in mind.Worldwide data centers provide the backbone for ultra-fast connectivity.This ensures your site will load instantly, no matter where your readers are,keeping your site competitive.</p>
            </div>
          </div>
        </div>
      </section>


      <section id='free' className='cc-container'>
        <div className='flex-container' id='flexContainer'>
          <div className='box-5'>
            <img src='./images/illustration-laptop-mobile.svg' alt='illustratorLaptop' className='floating' id='mobileImg' style={{
              width: "100%", height: "400px"
            }} />
            <img src='./images/illustration-laptop-desktop.svg' alt='illustratorLaptopDesktop' className='floating' id='desktopImg' style={{
              width: "100%", height: "400px"
            }} />
          </div>
          <div className='box-6'>
            <div className='lil-box'>
              <div className='lil-box-content'>
                <h2 className='header' >Free,Open,Simple</h2>
                <p className='paraGraph'>Blogr is a free open source application backed by a large community of helpful developers.It supports features such as code syntax highlighting.RSS feeds,social media integration,third partycommenting tools and works seamlessly Google Analytics. The architecture is clean and relatively easy to learn.</p>
              </div>
            </div>
            <div className='lil-box'>
              <div className='lil-box-content'>
                <h2 className='header'>Powerful tooling</h2>
                <p className='paraGraph'>Battries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='footer' className='cc-container'>
        <div className='logo-1'>
          <h2>blogr</h2>
        </div>
        <div className='all-links'>
          <div className='links'>
            <ul>
              <div className='top'>
                <a href='/#' className='special'>Product</a>
              </div>
              <li><a href='/#'>Overview</a></li>
              <li><a href='/#'>Pricing</a></li>
              <li><a href='/#'>Marketplace</a></li>
              <li><a href='/#'>Features</a></li>
              <li><a href='/#'>integrations</a></li>
            </ul>
          </div>

          <div className='links'>
            <ul>
              <div className='top'>
                <a href='/#' className='special special-1'>Company</a>
              </div>
              <div className='top-1'>
                <li><a href='/#'>About</a></li>
                <li><a href='/#'>Team</a></li>
                <li><a href='/#'>Blog</a></li>
                <li><a href='/#'>Careers</a></li>
              </div>

            </ul>
          </div>

          <div className='links'>
            <ul>
              <div className='top'>
                <a href='/#' className='special special-2'>Connect</a>
              </div>
              <div className='top-2'>
                <li><a href='/#'>Contact</a></li>
                <li><a href='/#'>Newsletter</a></li>
                <li><a href='/#'>Linkendin</a></li>
              </div>

            </ul>
          </div>
        </div>

      </section>
    </div>
  );

}
export default App;
