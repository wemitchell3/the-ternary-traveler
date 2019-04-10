import apiManager from "./apiManager"
import poiForm from "./poiForm"
import postDOM from "./poiList"


poiForm.addPOIForm()
apiManager.getAllPOIs("interests").then(poiList => {
postDOM.renderPOIs(poiList)})