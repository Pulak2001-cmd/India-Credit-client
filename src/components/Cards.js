import React,{Fragment} from 'react'
import Card from './Card'

function Cards() {
  return (
    <Fragment>
        <div class="container">
          Our Important Features
  <div class="row">
    <div class="col">
      <Card/>
    </div>
    <div class="col">
    <Card/>
    </div>
    <div class="col">
    <Card/>
    </div>
  </div>
</div>
    </Fragment>
  )
}

export default Cards