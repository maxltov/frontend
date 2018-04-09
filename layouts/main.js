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
                    <a>
		                  <span className="nav-caret">
		                    <i className="fa fa-caret-down"></i>
		                  </span>
                      <span className="nav-icon">
		                    <i className="fa fa-align-left"></i>
		                  </span>
                      <span className="nav-text">Layout</span>
                    </a>
                    <ul className="nav-sub">
                      <li>
                        <a href="layout.header.html">
                          <span className="nav-text">Header</span>
                        </a>
                      </li>
                      <li>
                        <a href="layout.sidenav.html">
                          <span className="nav-text">Sidenav</span>
                        </a>
                      </li>
                      <li>
                        <a href="layout.aside.html">
                          <span className="nav-text">Aside</span>
                        </a>
                      </li>
                      <li>
                        <a href="layout.flex.html">
                          <span className="nav-text">Flex</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="app.inbox.html">
		                  <span className="nav-badge">
		                    <b className="badge badge-sm badge-pill success">6</b>
		                  </span>
                      <span className="nav-icon">
		                    <i className="fa fa-envelope"></i>
		                  </span>
                      <span className="nav-text">Inbox</span>
                    </a>
                  </li>
                  <li>
                    <a href="app.message.html">
		                  <span className="nav-icon">
		                    <i className="fa fa-comment"></i>
		                  </span>
                      <span className="nav-text">Messages</span>
                    </a>
                  </li>
                  <li>
                    <a href="app.user.html">
		                  <span className="nav-icon">
		                    <i className="fa fa-phone-square"></i>
		                  </span>
                      <span className="nav-text">Users</span>
                    </a>
                  </li>
                  <li className="pb-2 hidden-folded"></li>
                </ul>
                <ul className="nav ">

                  <li className="nav-header hidden-folded mt-2">
                    <span className="text-xs">UI Elements</span>
                  </li>
                  <li>
                    <a>
		                    <span className="nav-caret">
		                      <i className="fa fa-caret-down"></i>
		                    </span>
                      <span className="nav-icon no-fade">
		                      <i className="badge badge-xs badge-o md b-warning"></i>
		                    </span>
                      <span className="nav-text">UI kit</span>
                    </a>
                    <ul className="nav-sub nav-mega nav-mega-3">
                      <li>
                        <a href="ui.arrow.html">
                          <span className="nav-text">Arrow</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.badge.html">
                          <span className="nav-text">Badge</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.box.html">
                          <span className="nav-text">Box</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.button.html">
                          <span className="nav-text">Button</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.color.html">
                          <span className="nav-text">Color</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.dropdown.html">
                          <span className="nav-text">Dropdown</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.grid.html">
                          <span className="nav-text">Grid</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.icon.html">
                          <span className="nav-text">Icon</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.list.html">
                          <span className="nav-text">List Group</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.modal.html">
                          <span className="nav-text">Modal</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.nav.html">
                          <span className="nav-text">Nav</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.streamline.html">
                          <span className="nav-text">Streamline</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.timeline.html">
                          <span className="nav-text">Timeline</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.widget.html">
                          <span className="nav-text">Widget</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
		                    <span className="nav-caret">
		                      <i className="fa fa-caret-down"></i>
		                    </span>
                      <span className="nav-icon no-fade">
		                      <i className="badge badge-xs badge-o md b-success"></i>
		                    </span>
                      <span className="nav-text">Components</span>
                    </a>
                    <ul className="nav-sub nav-mega">
                      <li>
                        <a href="ui.calendar.html">
                          <span className="nav-text">Calendar</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.scroll.html">
                          <span className="nav-text">Infinite Scroll</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.sortable.html">
                          <span className="nav-text">Sortable</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.scrollreveal.html">
                          <span className="nav-text">Scroll Reveal</span>
                        </a>
                      </li>
                      <li>
                        <a href="ui.map.html">
                          <span className="nav-text">Vector map</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>
		                    <span className="nav-caret">
		                      <i className="fa fa-caret-down"></i>
		                    </span>
                      <span className="nav-icon no-fade">
		                      <i className="badge badge-xs badge-o md b-primary"></i>
		                    </span>
                      <span className="nav-text">Form</span>
                    </a>
                    <ul className="nav-sub">
                      <li>
                        <a href="form.layout.html">
                          <span className="nav-text">Form Layout</span>
                        </a>
                      </li>
                      <li>
                        <a href="form.element.html">
                          <span className="nav-text">Form Element</span>
                        </a>
                      </li>
                      <li>
                        <a href="form.validation.html">
                          <span className="nav-text">Form Validation</span>
                        </a>
                      </li>
                      <li>
                        <a href="form.editor.html">
                          <span className="nav-text">Editor</span>
                        </a>
                      </li>
                      <li>
                        <a href="form.picker.html">
                          <span className="nav-text">Picker</span>
                        </a>
                      </li>
                      <li>
                        <a href="form.select.html">
                          <span className="nav-text">Select</span>
                        </a>
                      </li>
                      <li>
                        <a href="form.wizard.html">
                          <span className="nav-text">Wizard</span>
                        </a>
                      </li>
                      <li>
                        <a href="form.dropzone.html">
                          <span className="nav-text">File Upload</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>
		                    <span className="nav-caret">
		                      <i className="fa fa-caret-down"></i>
		                    </span>
                      <span className="nav-icon">
		                      <i className="badge badge-xs badge-o md"></i>
		                    </span>
                      <span className="nav-text">Tables</span>
                    </a>
                    <ul className="nav-sub">
                      <li>
                        <a href="static.html">
                          <span className="nav-text">Static table</span>
                        </a>
                      </li>
                      <li>
                        <a href="bootstrap.table.html">
                          <span className="nav-text">Bootstrap Table</span>
                        </a>
                      </li>
                      <li>
                        <a href="datatable.html">
                          <span className="nav-text">Datatable</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
		                    <span className="nav-caret">
		                      <i className="fa fa-caret-down"></i>
		                    </span>
                      <span className="nav-icon">
		                      <i className="badge badge-xs badge-o md"></i>
		                    </span>
                      <span className="nav-text">Charts</span>
                    </a>
                    <ul className="nav-sub">
                      <li>
                        <a href="chart.html">
                          <span className="nav-text">Chart</span>
                        </a>
                      </li>
                      <li>
                        <a href="chart.peity.html">
                          <span className="nav-text">Peity</span>
                        </a>
                      </li>
                      <li>
                        <a href="chartjs.html">
                          <span className="nav-text">Chartjs</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header hidden-folded mt-2">
                    <span className="text-xs">Extras</span>
                  </li>
                  <li>
                    <a>
		                    <span className="nav-caret">
		                      <i className="fa fa-caret-down"></i>
		                    </span>
                      <span className="nav-icon">
		                      <i className="badge badge-xs badge-o md"></i>
		                    </span>
                      <span className="nav-text">Pages</span>
                    </a>
                    <ul className="nav-sub nav-mega">
                      <li>
                        <a href="profile.html">
                          <span className="nav-text">Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="setting.html">
                          <span className="nav-text">Setting</span>
                        </a>
                      </li>
                      <li>
                        <a href="search.html">
                          <span className="nav-text">Search</span>
                        </a>
                      </li>
                      <li>
                        <a href="faq.html">
                          <span className="nav-text">FAQ</span>
                        </a>
                      </li>
                      <li>
                        <a href="gallery.html">
                          <span className="nav-text">Gallery</span>
                        </a>
                      </li>
                      <li>
                        <a href="invoice.html">
                          <span className="nav-text">Invoice</span>
                        </a>
                      </li>
                      <li>
                        <a href="price.html">
                          <span className="nav-text">Price</span>
                        </a>
                      </li>
                      <li>
                        <a href="blank.html">
                          <span className="nav-text">Blank</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
		                    <span className="nav-caret">
		                      <i className="fa fa-caret-down"></i>
		                    </span>
                      <span className="nav-icon">
		                      <i className="badge badge-xs badge-o md"></i>
		                    </span>
                      <span className="nav-text">Access</span>
                    </a>
                    <ul className="nav-sub nav-mega">
                      <li>
                        <a href="signin.html">
                          <span className="nav-text">Sign In</span>
                        </a>
                      </li>
                      <li>
                        <a href="signup.html">
                          <span className="nav-text">Sign Up</span>
                        </a>
                      </li>
                      <li>
                        <a href="forgot-password.html">
                          <span className="nav-text">Forgot Password</span>
                        </a>
                      </li>
                      <li>
                        <a href="lockme.html">
                          <span className="nav-text">Lockme Screen</span>
                        </a>
                      </li>
                      <li>
                        <a href="404.html">
                          <span className="nav-text">Error 404</span>
                        </a>
                      </li>
                      <li>
                        <a href="505.html">
                          <span className="nav-text">Error 505</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-3">
                    <a>
		                    <span className="nav-caret">
		                      <i className="fa fa-caret-down"></i>
		                    </span>
                      <span className="nav-icon">
		                      <i className="badge badge-xs badge-o md"></i>
		                    </span>
                      <span className="nav-text">Multi level</span>
                    </a>
                    <ul className="nav-sub nav-mega">
                      <li>
                        <a href="#sub_1">
                          <span className="nav-text">Level one</span>
                        </a>
                      </li>
                      <li>
                        <a href="#sub_1_">
		                        <span className="nav-caret">
		                          <i className="fa fa-caret-down"></i>
		                        </span>
                          <span className="nav-text">Level one</span>
                        </a>
                        <ul className="nav-sub nav-mega">
                          <li>
                            <a href="#sub_2">
                              <span className="nav-text">Level two</span>
                            </a>
                          </li>
                          <li>
                            <a href="#sub_2_">
		                            <span className="nav-caret">
		                              <i className="fa fa-caret-down"></i>
		                            </span>
                              <span className="nav-text">Level two</span>
                            </a>
                            <ul className="nav-sub nav-mega">
                              <li>
                                <a href="#sub_3_1">
                                  <span className="nav-text">Level three</span>
                                </a>
                              </li>
                              <li>
                                <a href="#sub_3_2">
                                  <span className="nav-text">Level three</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
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

        <div className="content-main " id="content-main">


          <div className="dark">
            <div className="p-4 p-md-5">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="display-4 l-s-n-1x"><span className="text-muted _300">Hello, </span><span
                    className="text-theme _700">Tiger Nixon</span></h1>
                  <div>
                    <span>tigernixon@gmail, <i className="fa fa-map-marker mx-2"></i>London</span>
                  </div>
                  <div className="mt-5">
                    <a href="profile.html" className="btn btn-outline b-a">Edit your account <i
                      className="fa fa-long-arrow-right ml-2"></i></a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex my-3 text-center">
                    <div className="lt p-3 px-4 r-l b-a">
                      <span className="text-muted">Todos</span>
                      <div className="text-white text-lg">40</div>
                    </div>
                    <div className="lt p-3 px-4 r-r b-a no-b-l">
                      <span className="text-muted">Tasks</span>
                      <div className="text-theme text-lg">20</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-active-border b-theme px-4 px-md-5">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tasks
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row no-gutters white">
            <div className="col-sm-8 col-xl-9">
              <div className="padding">
                <div className="row">
                  <div className="col-6">
                    <div className="b-a b-2x r p-3 mb-4">
                      <div className="d-flex">
                        <span className="text-muted">Last month</span>
                      </div>
                      <div className="py-3 text-center text-lg text-success">
                        $35,340
                      </div>
                      <div className="d-flex">
                        <span className="flex text-muted">Income</span>
                        <span><i className="fa fa-caret-up text-success"></i> 12%</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="b-a b-2x r p-3 mb-4">
                      <div className="d-flex">
                        <span className="text-muted">Total revenue</span>
                      </div>
                      <div className="py-3 text-center text-lg text-danger">
                        $21,560
                      </div>
                      <div className="d-flex">
                        <span className="flex text-muted">Withdraw</span>
                        <span><i className="fa fa-caret-down text-danger"></i> 5%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="box">
                      <div className="box-header">
                        <h3>Messages</h3>
                      </div>
                      <div className="list inset">
                        <div className="list-item " data-id="item-8">
						      <span className="w-40 avatar circle teal">
						          <img src="/static/assets/images/a8.jpg" alt="."/>
						      </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">RYD</a>

                            <div className="item-except text-sm text-muted h-1x">
                              Added you to repo
                            </div>

                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <span className="item-date text-xs text-muted">14:00</span>
                          </div>
                        </div>
                        <div className="list-item " data-id="item-7">
						      <span className="w-40 avatar circle indigo">
						          <img src="/static/assets/images/a7.jpg" alt="."/>
						      </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">Fifth Harmony</a>

                            <div className="item-except text-sm text-muted h-1x">
                              Send you a invitation to SWO
                            </div>

                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <span className="item-date text-xs text-muted">05:35</span>
                          </div>
                        </div>
                        <div className="list-item " data-id="item-14">
						      <span className="w-40 avatar circle brown">
						            BW
						      </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">Brielle Williamson</a>

                            <div className="item-except text-sm text-muted h-1x">
                              Looking for some client-work
                            </div>

                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <span className="item-date text-xs text-muted">08:00</span>
                          </div>
                        </div>
                        <div className="list-item " data-id="item-3">
						      <span className="w-40 avatar circle green">
						          <img src="/static/assets/images/a3.jpg" alt="."/>
						      </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">Jeremy Scott</a>

                            <div className="item-except text-sm text-muted h-1x">
                              Submit a support ticket
                            </div>

                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <span className="item-date text-xs text-muted">09:05</span>
                          </div>
                        </div>
                        <div className="list-item " data-id="item-15">
						      <span className="w-40 avatar circle indigo">
						            GW
						      </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">Garrett Winters</a>

                            <div className="item-except text-sm text-muted h-1x">
                              Looking for some client-work
                            </div>

                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <span className="item-date text-xs text-muted">13:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="box">
                      <div className="box-header">
                        <h3>Members</h3>
                      </div>
                      <div className="list inset">
                        <div className="list-item " data-id="item-10">
		                    <span className="w-40 avatar circle blue">
		                      <i className="on b-white avatar-right"></i>
		                        P
		                    </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">Postiljonen</a>


                            <div className="item-except text-sm text-muted h-1x">
                              postiljonen@gmail.com
                            </div>
                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <div className="item-action dropdown">
                              <a href="#" data-toggle="dropdown" className="text-muted"><i
                                className="fa fa-fw fa-ellipsis-v"></i></a>
                              <div className="dropdown-menu dropdown-menu-right text-color" role="menu">
                                <a className="dropdown-item">
                                  <i className="fa fa-tag"></i>
                                  Action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-pencil"></i>
                                  Another action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-reply"></i>
                                  Something else here
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item">
                                  <i className="fa fa-ellipsis-h"></i>
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-item " data-id="item-13">
		                    <span className="w-40 avatar circle pink">
		                      <i className="off b-white avatar-right"></i>
		                        AS
		                    </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">Airi Satou</a>


                            <div className="item-except text-sm text-muted h-1x">
                              airi-satou@gmail.com
                            </div>
                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <div className="item-action dropdown">
                              <a href="#" data-toggle="dropdown" className="text-muted"><i
                                className="fa fa-fw fa-ellipsis-v"></i></a>
                              <div className="dropdown-menu dropdown-menu-right text-color" role="menu">
                                <a className="dropdown-item">
                                  <i className="fa fa-tag"></i>
                                  Action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-pencil"></i>
                                  Another action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-reply"></i>
                                  Something else here
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item">
                                  <i className="fa fa-ellipsis-h"></i>
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-item " data-id="item-9">
		                    <span className="w-40 avatar circle cyan">
		                      <i className="on b-white avatar-right"></i>
		                        PN
		                    </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">Pablo Nouvelle</a>


                            <div className="item-except text-sm text-muted h-1x">
                              pablo-nouvelle@gmail.com
                            </div>
                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <div className="item-action dropdown">
                              <a href="#" data-toggle="dropdown" className="text-muted"><i
                                className="fa fa-fw fa-ellipsis-v"></i></a>
                              <div className="dropdown-menu dropdown-menu-right text-color" role="menu">
                                <a className="dropdown-item">
                                  <i className="fa fa-tag"></i>
                                  Action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-pencil"></i>
                                  Another action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-reply"></i>
                                  Something else here
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item">
                                  <i className="fa fa-ellipsis-h"></i>
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-item " data-id="item-1">
		                    <span className="w-40 avatar circle grey">
		                      <i className="on b-white avatar-right"></i>
		                        S
		                    </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">Summerella</a>


                            <div className="item-except text-sm text-muted h-1x">
                              summerella@gmail.com
                            </div>
                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <div className="item-action dropdown">
                              <a href="#" data-toggle="dropdown" className="text-muted"><i
                                className="fa fa-fw fa-ellipsis-v"></i></a>
                              <div className="dropdown-menu dropdown-menu-right text-color" role="menu">
                                <a className="dropdown-item">
                                  <i className="fa fa-tag"></i>
                                  Action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-pencil"></i>
                                  Another action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-reply"></i>
                                  Something else here
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item">
                                  <i className="fa fa-ellipsis-h"></i>
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-item " data-id="item-8">
		                    <span className="w-40 avatar circle teal">
		                      <i className="on b-white avatar-right"></i>
		                        R
		                    </span>
                          <div className="list-body">
                            <a href="" className="item-title _500">RYD</a>


                            <div className="item-except text-sm text-muted h-1x">
                              ryd@gmail.com
                            </div>
                            <div className="item-tag tag hide">
                            </div>
                          </div>
                          <div>
                            <div className="item-action dropdown">
                              <a href="#" data-toggle="dropdown" className="text-muted"><i
                                className="fa fa-fw fa-ellipsis-v"></i></a>
                              <div className="dropdown-menu dropdown-menu-right text-color" role="menu">
                                <a className="dropdown-item">
                                  <i className="fa fa-tag"></i>
                                  Action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-pencil"></i>
                                  Another action
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-reply"></i>
                                  Something else here
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item">
                                  <i className="fa fa-ellipsis-h"></i>
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="streamline mb-2">
                  <div className="sl-item">
                    <div className="sl-left">
                      <img src="/static/assets/images/a0.jpg" alt="." className="circle"/>
                    </div>
                    <div className="sl-content">
                      <div className="sl-date text-muted">2 minutes ago</div>
                      <div className="sl-author">
                        <a href="#">Peter Joo</a>
                      </div>
                      <div className="mb-3">
                        <p>Check your Internet connection</p>
                      </div>
                      <div className="sl-footer">
                        <a href="#" data-toggle="collapse" data-target="#reply-1">
                          <i className="fa fa-fw fa-mail-reply text-muted"></i> Reply
                        </a>
                      </div>
                      <div className="box collapse show m-0" id="reply-1">
                        <form>
                          <textarea className="form-control no-border" rows="3"
                                    placeholder="Type something..."></textarea>
                        </form>
                        <div className="box-footer clearfix">
                          <button className="btn info float-right btn-sm">Post</button>
                          <ul className="nav nav-pills nav-sm">
                            <li className="nav-item"><a className="nav-link" href="#"><i
                              className="fa fa-camera text-muted"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i
                              className="fa fa-video-camera text-muted"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sl-item">
                    <div className="sl-left">
                      <img src="/static/assets/images/a2.jpg" alt="." className="circle"/>
                    </div>
                    <div className="sl-content">
                      <div className="sl-date text-muted">8:30</div>
                      <div className="sl-author">
                        <a href="#">Moke</a>
                      </div>
                      <div>
                        <p>Call to customer <a href="#" className="text-primary">Jacob</a> and discuss the detail.</p>
                        <p>
		            <span className="d-inline-block p-1 b-a">
		              <img src="/static/assets/images/a1.jpg" alt="." className="w-96"/>
		            </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sl-item">
                    <div className="sl-left">
                      <img src="/static/assets/images/a3.jpg" alt="." className="circle"/>
                    </div>
                    <div className="sl-content">
                      <div className="sl-date text-muted">Sat, 5 Mar</div>
                      <div className="sl-author">
                        <a href="#">Moke</a>
                      </div>
                      <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea
                          ose dos soois.</p>
                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                      </blockquote>

                      <div className="sl-item">
                        <div className="sl-left">
                          <img src="/static/assets/images/a2.jpg" alt="." className="circle"/>
                        </div>
                        <div className="sl-content">
                          <div className="sl-date text-muted">Sun, 11 Feb</div>
                          <p><a href="#" className="text-primary">Jessi</a> assign you a task <a href="#"
                                                                                                 className="text-primary">Mockup
                            Design</a>.</p>
                        </div>
                      </div>
                      <div className="sl-item">
                        <div className="sl-left">
                          <img src="/static/assets/images/a5.jpg" alt="." className="circle"/>
                        </div>
                        <div className="sl-content">
                          <div className="sl-date text-muted">Thu, 17 Jan</div>
                          <p>Follow up to close deal</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xl-3 b-l white lt">
              <div className="p-3 b-b">
                <a href="#" className="btn btn-sm btn-outline text-theme b-theme">New Project</a>
              </div>
              <div className="p-3">
                <span className="badge success float-right">15</span>
                <h6 className="mb-3">Activity</h6>
                <div className="streamline streamline-xs streamline-dotted">
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">12:30</span>
                      <div>
                        <a href="#" className="text-primary">Airi Satou</a>
                        New features added
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">08:00</span>
                      <div>
                        <a href="#" className="text-primary">Brielle Williamson</a>
                        User experience improvements
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">July 21</span>
                      <div>
                        <a href="#" className="text-primary">Summerella</a>
                        Submit a support ticket
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">08:00</span>
                      <div>
                        <a href="#" className="text-primary">Postiljonen</a>
                        Add Google Cast support
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">05:35</span>
                      <div>
                        <a href="#" className="text-primary">Fifth Harmony</a>
                        Bug fixes
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">11:30</span>
                      <div>
                        <a href="#" className="text-primary">Ashton Cox</a>
                        New feedback from John
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b-primary ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">13:00</span>
                      <div>
                        <a href="#" className="text-primary">Garrett Winters</a>
                        Followed by Jessic
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b-primary ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">09:50</span>
                      <div>
                        <a href="#" className="text-primary">Radionomy</a>
                        Was added to Repo
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">13:23</span>
                      <div>
                        <a href="#" className="text-primary">Rita Ora</a>
                        Sent you an email
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">09:05</span>
                      <div>
                        <a href="#" className="text-primary">Jeremy Scott</a>
                        Assign you a task
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">14:00</span>
                      <div>
                        <a href="#" className="text-primary">RYD</a>
                        Add inline SVG icon
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">12:05</span>
                      <div>
                        <a href="#" className="text-primary">Judith Garcia</a>
                        Follow up to close deal
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">16:00</span>
                      <div>
                        <a href="#" className="text-primary">Tiger Nixon</a>
                        Implemented new API
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">15:00</span>
                      <div>
                        <a href="#" className="text-primary">Pablo Nouvelle</a>
                        Added API call to update track element
                      </div>
                    </div>
                  </div>
                  <div className="sl-item  b- ">
                    <div className="sl-content">
                      <span className="sl-date text-muted">08:05</span>
                      <div>
                        <a href="#" className="text-primary">Kygo</a>
                        Added you to repo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

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
