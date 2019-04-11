import api from "./apiManager"
import postDOM from "./poiList"

const eventHandler = {
    handleAddPOIButton() {
        event.preventDefault()

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
        api.postOnePOI("interests", poiEntry)
        .then(api.getAllPOIs("interests")
            .then(postDOM.renderPOIs)
        )
    }
    //Still working on these

    // handlePOIEditButton() {
    //   let page = event.target.parentNode.parentNode.id.split("-")[0];
    //   let pageID = event.target.id.split("--")[2];
    //   let pageDivID = event.target.parentNode.id
    //   fetch.getOnePOI(page, pageID)
    //     .then(data => {
    //       let pageDiv = document.querySelector(`#${pageDivID}`)
    //       console.log(pageDiv)
    //       build.clearElement(pageDiv)
    //       pageDiv.appendChild(struct.editArticlesForm(data))
    //     })
    // }
    // handlePOIEditSubmitButton () {
    //   let pageID = event.target.parentNode.id.split("--")[1];
    //   let articlesTitle = document.querySelector("#editTitleInputArticles")
    //   let articlesSynopsis = document.querySelector("#editSynopsisInputArticles")
    //   let articlesTimeStamp = new Date()
    //   let articlesUrl = document.querySelector("#editUrlInputArticles")

    //   let postOnePOI = apiStructure.postArticle(articlesTitle.value, articlesSynopsis.value,
    //     articlesTimeStamp, articlesUrl.value)

    //   fetch.editEntry("articles", pageID, postOnePOI).then(data => {
    //     DOM.articles.reloadDOM()
    //   })
    // }
}


export default eventHandler