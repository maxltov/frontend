import Barebone from './barebone'

export default ({children}) => (
  <Barebone>
    <div className="app" id="app">

      <div id="aside" className="app-aside fade box-shadow-x nav-expand white" aria-hidden="true">
        <div className="sidenav modal-dialog dk">

          <div className="navbar dk dark">

            <a href="/static/index.html" className="navbar-brand">
              <svg viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path
                  d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"
                  fill="#fff" className="fill-theme"/>
              </svg>
              <img src="/static/assets/images/logo.png" alt="." className="hide"/>
              <span className="hidden-folded d-inline">Apply</span>
            </a>

          </div>

          <div className="flex hide-scroll">
            <div className="scroll">
              <div className="nav-stacked nav-active-theme" data-nav>
                <ul className="nav ">
                  <li className="nav-header">
                    <span className="text-xs hidden-folded">Main</span>
                  </li>
                  <li>
                    <a href="dashboard.6.html">
		                  <span className="nav-icon">
		                    <i className="fa fa-dashboard"></i>
		                  </span>
                      <span className="nav-text">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="dashboard.6.html">
		                  <span className="nav-icon">
		                    <i className="fa fa-bitcoin"></i>
		                  </span>
                      <span className="nav-text">Donation Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="dashboard.6.html">
		                  <span className="nav-icon">
		                    <i className="fa fa-cog"></i>
		                  </span>
                      <span className="nav-text">Account Settings</span>
                    </a>
                  </li>
                  <li className="pb-2 hidden-folded"></li>
                </ul>
                <ul className="nav ">
                  <li className="nav-header hidden-folded mt-2">
                    <span className="text-xs">Widgets</span>
                  </li>
                  <li>
                    <a href="dashboard.6.html">
		                  <span className="nav-icon">
		                    <i className="fa fa-bell"></i>
		                  </span>
                      <span className="nav-text">Alert Box</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="no-shrink ">
            <div className="nav-fold">
              <a className="d-flex p-2-3" data-toggle="dropdown">
                <span className="avatar w-28 grey hide">J</span>
                <img src="/static/assets/images/a0.jpg" alt="..." className="w-28 circle"/>
              </a>
              <div className="dropdown-menu  w pt-0 mt-2 animate fadeIn">
                <div className="row no-gutters b-b mb-2">
                  <div className="col-4 b-r">
                    <a href="app.user.html" className="py-2 pt-3 d-block text-center">
                      <i className="fa text-md fa-phone-square text-muted"></i>
                      <small className="d-block">Call</small>
                    </a>
                  </div>
                  <div className="col-4 b-r">
                    <a href="app.message.html" className="py-2 pt-3 d-block text-center">
                      <i className="fa text-md fa-comment text-muted"></i>
                      <small className="d-block">Chat</small>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="app.inbox.html" className="py-2 pt-3 d-block text-center">
                      <i className="fa text-md fa-envelope text-muted"></i>
                      <small className="d-block">Email</small>
                    </a>
                  </div>
                </div>
                <a className="dropdown-item" href="profile.html">
                  <span>Profile</span>
                </a>
                <a className="dropdown-item" href="setting.html">
                  <span>Settings</span>
                </a>
                <a className="dropdown-item" href="app.inbox.html">
                  <span className="float-right"><span className="badge info">6</span></span>
                  <span>Inbox</span>
                </a>
                <a className="dropdown-item" href="app.message.html">
                  <span>Message</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="docs.html">
                  Need help?
                </a>
                <a className="dropdown-item" href="signin.html">Sign out</a>
              </div>
              <div className="hidden-folded flex p-2-3 bg">
                <div className="d-flex p-1">
                  <a href="app.inbox.html" className="flex text-nowrap">
                    <i className="fa fa-bell text-muted mr-1"></i>
                    <span className="badge badge-pill theme">20</span>
                  </a>
                  <a href="lockme.html" className="px-2" data-toggle="tooltip" title="Logout">
                    <i className="fa fa-power-off text-muted"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="content" className="app-content box-shadow-0" role="main">

        <div className="content-header white  dark" id="content-header">
          <div className="navbar navbar-expand-lg">

            <a className="d-lg-none mx-2" data-toggle="modal" data-target="#aside">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                <path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z"/>
              </svg>
            </a>

            <div className="navbar-text nav-title flex" id="pageTitle">
              <small className="ml-4 text-muted">Welcome back</small>
            </div>

            <ul className="nav flex-row order-lg-2">

              <li className="nav-item dropdown">
                <a className="nav-link px-3" data-toggle="dropdown">
                  <i className="fa fa-bell text-muted"></i>
                  <span className="badge badge-pill up danger">7</span>
                </a>

                <div className="dropdown-menu dropdown-menu-right w-md animate fadeIn mt-2 p-0">
                  <div className="scrollable hover" styles={{maxHeight: '250px'}}>
                    <div className="list">
                      <div className="list-item " data-id="item-6">
	    	                  <span className="w-24 avatar circle brown">
	    	                      <span className="fa fa-envelope"></span>
	    	                  </span>
                        <div className="list-body">
                          <a href="" className="item-title _500">Rita Ora</a>

                          <div className="item-except text-sm text-muted h-1x">
                            Homepage mockup design
                          </div>

                          <div className="item-tag tag hide">
                          </div>
                        </div>
                        <div>
                          <span className="item-date text-xs text-muted">13:23</span>
                        </div>
                      </div>
                      <div className="list-item " data-id="item-4">
	    	                  <span className="w-24 avatar circle pink">
	    	                      <span className="fa fa-male"></span>
	    	                  </span>
                        <div className="list-body">
                          <a href="" className="item-title _500">Judith Garcia</a>

                          <div className="item-except text-sm text-muted h-1x">
                            Eddel upload a media
                          </div>

                          <div className="item-tag tag hide">
                          </div>
                        </div>
                        <div>
                          <span className="item-date text-xs text-muted">12:05</span>
                        </div>
                      </div>
                      <div className="list-item " data-id="item-11">
	    	                  <span className="w-24 avatar circle blue">
	    	                      <span className="fa fa-code-fork"></span>
	    	                  </span>
                        <div className="list-body">
                          <a href="" className="item-title _500">Tiger Nixon</a>

                          <div className="item-except text-sm text-muted h-1x">
                            Looking for some client-work
                          </div>

                          <div className="item-tag tag hide">
                          </div>
                        </div>
                        <div>
                          <span className="item-date text-xs text-muted">16:00</span>
                        </div>
                      </div>
                      <div className="list-item " data-id="item-1">
	    	                  <span className="w-24 avatar circle grey">
	    	                      <span className="fa fa-comment"></span>
	    	                  </span>
                        <div className="list-body">
                          <a href="" className="item-title _500">Summerella</a>

                          <div className="item-except text-sm text-muted h-1x">
                            Send you a message
                          </div>

                          <div className="item-tag tag hide">
                          </div>
                        </div>
                        <div>
                          <span className="item-date text-xs text-muted">July 21</span>
                        </div>
                      </div>
                      <div className="list-item " data-id="item-12">
	    	                  <span className="w-24 avatar circle green">
	    	                      <span className="fa fa-dot-circle-o"></span>
	    	                  </span>
                        <div className="list-body">
                          <a href="" className="item-title _500">Ashton Cox</a>

                          <div className="item-except text-sm text-muted h-1x">
                            Looking for some client-work
                          </div>

                          <div className="item-tag tag hide">
                          </div>
                        </div>
                        <div>
                          <span className="item-date text-xs text-muted">11:30</span>
                        </div>
                      </div>
                      <div className="list-item " data-id="item-9">
	    	                  <span className="w-24 avatar circle cyan">
	    	                      <span className="fa fa-puzzle-piece"></span>
	    	                  </span>
                        <div className="list-body">
                          <a href="" className="item-title _500">Pablo Nouvelle</a>

                          <div className="item-except text-sm text-muted h-1x">
                            It&#x27;s been a Javascript kind of day
                          </div>

                          <div className="item-tag tag hide">
                          </div>
                        </div>
                        <div>
                          <span className="item-date text-xs text-muted">15:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex px-3 py-2 b-t">
                    <div className="flex">
                      <span>6 Notifications</span>
                    </div>
                    <a href="setting.html">See all <i className="fa fa-angle-right text-muted"></i></a>
                  </div>
                </div>

              </li>


              <li className="dropdown d-flex align-items-center">
                <a href="#" data-toggle="dropdown" className="d-flex align-items-center">
	    	        <span className="avatar w-32">
	    	          <img src="/static/assets/images/a8.jpg" alt="..."/>
	    	        </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right w pt-0 mt-2 animate fadeIn">
                  <div className="row no-gutters b-b mb-2">
                    <div className="col-4 b-r">
                      <a href="app.user.html" className="py-2 pt-3 d-block text-center">
                        <i className="fa text-md fa-phone-square text-muted"></i>
                        <small className="d-block">Call</small>
                      </a>
                    </div>
                    <div className="col-4 b-r">
                      <a href="app.message.html" className="py-2 pt-3 d-block text-center">
                        <i className="fa text-md fa-comment text-muted"></i>
                        <small className="d-block">Chat</small>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="app.inbox.html" className="py-2 pt-3 d-block text-center">
                        <i className="fa text-md fa-envelope text-muted"></i>
                        <small className="d-block">Email</small>
                      </a>
                    </div>
                  </div>
                  <a className="dropdown-item" href="profile.html">
                    <span>Profile</span>
                  </a>
                  <a className="dropdown-item" href="setting.html">
                    <span>Settings</span>
                  </a>
                  <a className="dropdown-item" href="app.inbox.html">
                    <span className="float-right"><span className="badge info">6</span></span>
                    <span>Inbox</span>
                  </a>
                  <a className="dropdown-item" href="app.message.html">
                    <span>Message</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="docs.html">
                    Need help?
                  </a>
                  <a className="dropdown-item" href="signin.html">Sign out</a>
                </div>
              </li>

              <li className="d-lg-none d-flex align-items-center">
                <a href="#" className="mx-2" data-toggle="collapse" data-target="#navbarToggler">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                    <path d="M64 144h384v32H64zM64 240h384v32H64zM64 336h384v32H64z"/>
                  </svg>
                </a>
              </li>
            </ul>

            <div className="collapse navbar-collapse no-grow order-lg-1" id="navbarToggler">
              <form className="input-group m-2 my-lg-0">
	    	      <span className="input-group-btn">
	    	        <button type="button" className="btn no-border no-bg no-shadow"><i
                  className="fa fa-search"></i></button>
	    	      </span>
                <input type="text" className="form-control no-border no-bg no-shadow" placeholder="Search projects..."/>
              </form>
            </div>

          </div>
        </div>

        {children}

        <div className="content-footer white " id="content-footer">
          <div className="d-flex p-3">
            <span className="text-sm text-muted flex">&copy; Copyright. Flatfull</span>
            <div className="text-sm text-muted">Version 1.1.1</div>
          </div>
        </div>
      </div>


    </div>
  </Barebone>
)
