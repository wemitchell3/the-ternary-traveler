import construct from "./domManager"
import eventHandler from "./eventHandler"
//This function is to create a form to be able to add new POIs to the current list of POIs.
const poiForm = {
    addPOIForm () {
        //Setting a variable to target the from container on the main HTML index page
        const formContainer = document.querySelector("#form-container")

        //createFormElement is a variable used to append each form element to, prior to appending
        //all form elements to the DOM at once using this variable.
        let createFormElement = construct.elementWithTextCreator("form", "Add New Point of Interest")

        createFormElement.appendChild(construct.fieldsetCreator("name"))
        createFormElement.appendChild(construct.fieldsetCreator("description"))
        createFormElement.appendChild(construct.fieldsetCreator("cost"))
        createFormElement.appendChild(construct.fieldsetCreator("review"))
        createFormElement.appendChild(construct.fieldsetCreator("location"))

        let addPOIButton = construct.buttonCreator("saveButton", "Save POI")

        addPOIButton.addEventListener("click", eventHandler.handleClick)

        createFormElement.appendChild(addPOIButton)

        //Appending all elements to the DOM at once with this function
        formContainer.appendChild(createFormElement)
    }
}

export default poiForm