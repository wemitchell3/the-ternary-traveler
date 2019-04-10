const elementWithTextCreator = (elementType, elementTextContent) => {
    let htmlElement = document.createElement(elementType)
    htmlElement.textContent = elementTextContent
    return htmlElement
}
const inputCreator = (elementType, elementId) => {
    let htmlElement = document.createElement("input")
    htmlElement.type = elementType
    htmlElement.id = elementId
    return htmlElement
}
const construct = {
    elementWithTextCreator(elementType, elementTextContent) {
        let htmlElement = document.createElement(elementType);
        htmlElement.textContent = elementTextContent;
        return htmlElement;
    },
    buttonCreator(elementId, elementText, elementClass) {
        let button = document.createElement("button")
        button.id = elementId
        button.setAttribute("type", "submit")
        button.textContent = elementText
        button.classList.add(elementClass)
        return button
    },
    fieldsetCreator(dataitem) {
        const formFieldSet = elementWithTextCreator("fieldset");
        formFieldSet.appendChild(elementWithTextCreator("label", `Enter ${dataitem}: `))
        formFieldSet.appendChild(inputCreator("text", `${dataitem}Input`))
        return formFieldSet
    }
}

export default construct;