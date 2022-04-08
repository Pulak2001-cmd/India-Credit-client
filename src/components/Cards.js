import React,{Fragment} from 'react'
import Card from './Card'

function Cards() {
  return (
    <Fragment>
        <div class="container my-3">
  <div class="row">
    <div class="col">
      <Card src="./Image1.png" title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." btn="Link"/>
    </div>
    <div class="col">
    <Card src="./Image1.png" title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." btn="Link"/>
    </div>
    <div class="col">
    <Card src="./Image1.png" title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." btn="Link"/>
    </div>
  </div>
</div>
    </Fragment>
  )
}

export default Cards
