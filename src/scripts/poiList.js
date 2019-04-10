import poiStructure from "./poi"

const postDOM = {
    renderPOIs(poiList) {
        const article = document.querySelector("#display-container");
        while (article.firstChild) {
            article.removeChild(article.firstChild)
        }
        poiList.forEach(poi => {
            article.innerHTML += (poiStructure.create(poi));
        })
    }
}

export default postDOM