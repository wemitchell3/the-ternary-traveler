import api from "./apiManager"
import postDOM from "./poiList"

const eventHandler = {
  handleClick () {
    let nameValue = document.querySelector("#nameInput").value
    let descriptionValue = document.querySelector("#descriptionInput").value
    let costValue = document.querySelector("#costInput").value
    let reviewValue = document.querySelector("#reviewInput").value
    let locationValue = document.querySelector("#locationInput").value


    const poiEntry = {
      name: nameValue,
      description: descriptionValue,
      cost: costValue,
      review: reviewValue,
      location: locationValue
  }
  api.postOnePOI(poiEntry).then(api.getAllPOIs).then(postDOM.renderPOIs)
  }
}


export default eventHandler