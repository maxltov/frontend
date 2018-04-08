import Page from '../layouts/main'

export default () => (
  <Page>
    <div class="d-flex flex-column flex">
      <div class="navbar light bg pos-rlt box-shadow">
        <div class="mx-auto">
          <a href="../index.html" class="navbar-brand">
            <svg viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z" fill="#fff" class="fill-theme"/>
            </svg>
            <img src="../assets/images/logo.png" alt="." class="hide"/>
              <span class="hidden-folded d-inline">Apply</span>
          </a>
        </div>
      </div>
      <div id="content-body">
        <div class="py-5 text-center w-100">
          <div class="mx-auto w-xxl w-auto-xs">
            <div class="px-3">
              <div>
                <a href="#" class="btn btn-block red text-white">
                  <i class="fa fa-youtube float-left"></i>
                  Sign in with YOUTUBE
                </a>
                <a href="#" class="btn btn-block deep-purple text-white">
                  <i class="fa fa-twitch float-left"></i>
                  Sign in with TWITCH
                </a>
              </div>
              <div class="my-3 text-sm">
                OR
              </div>
              <form name="form">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email" required/>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="password" required/>
                </div>
                <div class="mb-3">
                  <label class="md-check">
                    <input type="checkbox"/><i class="primary"></i> Keep me signed in
                  </label>
                </div>
                <button type="submit" class="btn primary">Sign in</button>
              </form>
              <div class="my-4">
                <a href="forgot-password.html" class="text-primary _600">Forgot password?</a>
              </div>
              <div>
                Do not have an account?
                <a href="/sign-up" class="text-primary _600">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
)