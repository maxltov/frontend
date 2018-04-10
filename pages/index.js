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
        </div>
      </div>

    </div>
  </Page>
))
