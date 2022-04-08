import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand mx-4" href="#">IndiaCredit</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <form class="d-flex">
                    <button class="btn btn-outline-success mx-2" type="submit">Login</button>
                    <button class="btn btn-outline-success mx-2" type="submit">Signup</button>
                </form>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}

export default Header