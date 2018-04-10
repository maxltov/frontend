import Page from '../layouts/main'
import withAuth from '../utils/withAuth'
export default withAuth(() => (
  <Page>
    <div className="content-main " id="content-main">
      <div class="padding">
        <div class="px-lg-5">
          <h3 class="text-md mb-4 _400">Dashboard Overview</h3>
          <div class="box">
            <div class="box-header">
              <h3>Market overview</h3>
              <small>Sale information on advertising, exhibitions, market research, online media, customer desires, PR
                and much more
              </small>
            </div>
            <div class="box-body">
              <canvas id="chart-line" data-plugin="chart" height="60"></canvas>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="box">
                <div class="box-header"><h3>Messages</h3></div>
                <div class="list inset">
                  <div class="list-item" data-id="item-7"><span class="w-40 avatar circle indigo"><img src="../assets/images/a7.jpg" alt="."/></span>
                    <div class="list-body"><a href="" class="item-title _500">Fifth Harmony</a>
                      <div class="item-except text-sm text-muted h-1x">Send you a invitation to SWO</div>
                      <div class="item-tag tag hide"></div>
                    </div>
                    <div><span class="item-date text-xs text-muted">05:35</span></div>
                  </div>
                  <div class="list-item" data-id="item-6"><span class="w-40 avatar circle brown"><img src="../assets/images/a6.jpg" alt="."/></span>
                    <div class="list-body"><a href="" class="item-title _500">Rita Ora</a>
                      <div class="item-except text-sm text-muted h-1x">Homepage mockup design</div>
                      <div class="item-tag tag hide"></div>
                    </div>
                    <div><span class="item-date text-xs text-muted">13:23</span></div>
                  </div>
                  <div class="list-item" data-id="item-14"><span class="w-40 avatar circle brown">BW</span>
                    <div class="list-body"><a href="" class="item-title _500">Brielle Williamson</a>
                      <div class="item-except text-sm text-muted h-1x">Looking for some client-work</div>
                      <div class="item-tag tag hide"></div>
                    </div>
                    <div><span class="item-date text-xs text-muted">08:00</span></div>
                  </div>
                  <div class="list-item" data-id="item-3"><span class="w-40 avatar circle green"><img src="../assets/images/a3.jpg" alt="."/></span>
                    <div class="list-body"><a href="" class="item-title _500">Jeremy Scott</a>
                      <div class="item-except text-sm text-muted h-1x">Submit a support ticket</div>
                      <div class="item-tag tag hide"></div>
                    </div>
                    <div><span class="item-date text-xs text-muted">09:05</span></div>
                  </div>
                  <div class="list-item" data-id="item-12"><span class="w-40 avatar circle green">AC</span>
                    <div class="list-body"><a href="" class="item-title _500">Ashton Cox</a>
                      <div class="item-except text-sm text-muted h-1x">Looking for some client-work</div>
                      <div class="item-tag tag hide"></div>
                    </div>
                    <div><span class="item-date text-xs text-muted">11:30</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
))