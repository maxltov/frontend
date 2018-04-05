export default () => (
  <div id="setting">
    <div className="setting dark-white rounded-bottom" id="theme">
      <a href="#" data-toggle-class="active" data-target="#theme" className="dark-white toggle">
        <i className="fa fa-gear text-primary fa-spin"></i>
      </a>
      <div className="box-header">
        <a href="https://themeforest.net/item/apply-web-application-admin-template/21072584?ref=flatfull"
           className="btn btn-xs rounded danger float-right">BUY</a>
        <strong>Theme Switcher</strong>
      </div>
      <div className="box-divider"></div>
      <div className="box-body">
        <p id="settingLayout">
          <label className="md-check my-1 d-block">
            <input type="checkbox" name="fixedAside"/>
            <i></i>
            <span>Fixed Aside</span>
          </label>
          <label className="md-check my-1 d-block">
            <input type="checkbox" name="fixedContent"/>
            <i></i>
            <span>Fixed Content</span>
          </label>
          <label className="md-check my-1 d-block">
            <input type="checkbox" name="folded"/>
            <i></i>
            <span>Folded Aside</span>
          </label>
          <label className="md-check my-1 d-block">
            <input type="checkbox" name="container"/>
            <i></i>
            <span>Boxed Layout</span>
          </label>
          <label className="md-check my-1 d-block">
            <input type="checkbox" name="ajax"/>
            <i></i>
            <span>Ajax load page</span>
          </label>
          <label className="pointer my-1 d-block" data-toggle="fullscreen" data-plugin="screenfull"
                 data-target="fullscreen">
          <span className="ml-1 mr-2 auto">
            <i className="fa fa-expand d-inline"></i>
            <i className="fa fa-compress d-none"></i>
          </span>
            <span>Fullscreen mode</span>
          </label>
        </p>
        <p>Colors:</p>
        <p>
          <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
            <input type="radio" name="theme" value="primary"/>
            <i className="primary"></i>
          </label>
          <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
            <input type="radio" name="theme" value="accent"/>
            <i className="accent"></i>
          </label>
          <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
            <input type="radio" name="theme" value="warn"/>
            <i className="warn"></i>
          </label>
          <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
            <input type="radio" name="theme" value="info"/>
            <i className="info"></i>
          </label>
          <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
            <input type="radio" name="theme" value="success"/>
            <i className="success"></i>
          </label>
          <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
            <input type="radio" name="theme" value="warning"/>
            <i className="warning"></i>
          </label>
          <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
            <input type="radio" name="theme" value="danger"/>
            <i className="danger"></i>
          </label>
        </p>
        <div className="row no-gutters">
          <div className="col">
            <p>Brand</p>
            <p>
              <label className="radio radio-inline m-0 mr-1 ui-check">
                <input type="radio" name="brand" value="dark-white"/>
                <i className="light"></i>
              </label>
              <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
                <input type="radio" name="brand" value="dark"/>
                <i className="dark"></i>
              </label>
            </p>
          </div>
          <div className="col mx-2">
            <p>Aside</p>
            <p>
              <label className="radio radio-inline m-0 mr-1 ui-check">
                <input type="radio" name="aside" value="white"/>
                <i className="light"></i>
              </label>
              <label className="radio radio-inline m-0 mr-1 ui-check ui-check-color">
                <input type="radio" name="aside" value="dark"/>
                <i className="dark"></i>
              </label>
            </p>
          </div>
          <div className="col">
            <p>Themes</p>
            <div className="clearfix">
              <label className="radio radio-inline ui-check">
                <input type="radio" name="bg" value=""/>
                <i className="light"></i>
              </label>
              <label className="radio radio-inline ui-check ui-check-color">
                <input type="radio" name="bg" value="dark"/>
                <i className="dark"></i>
              </label>
            </div>
          </div>
        </div>
        <p>Demos</p>
        <div className="text-md">
          <a href="dashboard.html?folded=false&amp;bg=&amp;aside=dark&amp;brand=dark"
             className="no-ajax badge light">0</a>
          <a href="dashboard.1.html?folded=false&amp;bg=&amp;aside=dark&amp;brand=dark-white"
             className="no-ajax badge light">1</a>
          <a href="dashboard.2.html?folded=false&amp;bg=&amp;aside=dark&amp;brand=white"
             className="no-ajax badge light">2</a>
          <a href="dashboard.3.html?folded=false&amp;bg=&amp;aside=white&amp;brand=white"
             className="no-ajax badge light">3</a>
          <a href="dashboard.4.html?folded=true&amp;bg=&amp;aside=dark" className="no-ajax badge light">4</a>
          <a href="dashboard.5.html?folded=true&amp;bg=&amp;aside=dark&amp;brand=dark"
             className="no-ajax badge light">5</a>
          <a href="dashboard.6.html?folded=false&amp;bg=&amp;aside=white&amp;brand=white"
             className="no-ajax badge light">6</a>
          <a href="dashboard.7.html?folded=false&amp;bg=&amp;aside=dark&amp;brand=dark" className="no-ajax badge light">7</a>
          <a href="dashboard.8.html?folded=false&amp;bg=&amp;aside=white&amp;brand=white"
             className="no-ajax badge light">8</a>
          <a href="rtl.html?folded&amp;bg=" className="no-ajax badge light">RTL</a>
        </div>
      </div>
    </div>
  </div>
)