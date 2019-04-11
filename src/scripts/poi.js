// This component is what creates the DOM elements to be able display the POI to the DOM and all the
// requested information associated with it.
const poiStructure = {

    create: (poi) => {
     const name = poi.name
     const description = poi.description
     const cost = poi.cost
     const review = poi.review
     const location = poi.location

     return `
      <div class="container">
        <h3 class="name">${name}</h3>
          <p class="description">Description: ${description}</p>
          <p class="cost">Cost: ${cost}</p>
          <p class="review">Review: ${review}</p>
          <p class="location">Location: ${location}</p>
          <button id="editButton--${poi.id}">Edit</button>
          <button id="deleteButton--${poi.id}">Delete</button>
      </div>
  `
  }
}

export default poiStructure