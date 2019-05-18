window.onload = function() {
  get();
};

let newArray = null;
function get() {
  fetch("https://randomuser.me/api/?results=20")
    .then(response => response.json())
    .then(data => {
      newArray = data.results;
      console.log(newArray);

      // List out all the user in your address book array by name and picture.
      newArray.map(currentValue => {
        //create <li> element
        let createLi = document.createElement("li");

        // adds id #listItem to each <li>
        createLi.id = "listItem";

        // selects id #contacts on the <ul>
        let contactList = document.getElementById("contacts");

        //creates an <img> element
        let image = document.createElement("img");

        //creates <button> element
        let button = document.createElement("button");

        //creates text for each <button>
        let buttonText = document.createTextNode("See More");

        //adds text inside <button>
        button.appendChild(buttonText);

        //adds id #seeMoreButton to each <button>
        button.id = "seeMoreButton";

        //when <button> is clicked, adds a <p> element inside each <li>
        let boolean = true;
        button.addEventListener("click", (e) =>{
          //prevents button from being clicked more than once
          if (boolean == false){
            return;
          }
          boolean = false;
          //creates a <p> element
          let ageText = document.createElement("p");

          //adds id #moreInfo to each <p>
          ageText.id = "moreInfo";

          //creates text for each <p> from api
          let age = document.createTextNode("Age: " + currentValue.dob.age);
          let br = document.createElement("br");
          let zip = document.createTextNode("Zip Code: " + currentValue.location.postcode);

          //adds text to each <p>
          ageText.appendChild(age);
          ageText.appendChild(br);
          ageText.appendChild(zip);

          //adds <p> inside <li>
          createLi.appendChild(ageText);
        })

        //adds the image url from api to <img>
        image.src = currentValue.picture.large;

        //adds <img> to <li>
        createLi.appendChild(image);

        //adds names from api inside each <li>
        createLi.appendChild(
          document.createTextNode(currentValue.name.first + " " + currentValue.name.last)
        );
        //adds <button> inside <li>
        createLi.appendChild(button);

        //adds each <li> inside <ul>
        contactList.append(createLi);
      });
    });
}
