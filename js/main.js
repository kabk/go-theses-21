const url = "js/theses-final.json";

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    json.forEach((entry) => {
      const grid = document.querySelector(".grid-container");

      const {
        Name: firstName,
        Surname: lastName,
        "Link to thesis on Github Pages": linkToThesis,
        "Thesis Title": title,
        Abstract: abstract,
      } = entry;

      // create an entry for the person
      let thesisContainerMaster = document.createElement("div");
      thesisContainerMaster.className = "grid-cell";

      // a div overlaping the grid-cell and creating a light shade on top
      let thesisContainerTop = document.createElement("div");
      thesisContainerTop.className = "grid-cell-shade";

      // FRONT of the cell
      let thesisContainerFront = document.createElement("div");
      thesisContainerFront.className = "grid-cell-front";

      // Create wrapper for each person
      let thesisContainerBack = document.createElement("div");
      thesisContainerBack.className = "grid-cell-back";

      // Create image container for shape Path
      let thesisShape = document.createElement("div");
      thesisShape.className = "thesis-shape";

      // FULL NAME h2
      let fullName = document.createTextNode(`${firstName} ${lastName}`); // Create a text node
      let fullNameHTML = document.createElement("h2");
      fullNameHTML.appendChild(fullName);

      // TITLE h3 + link
      let thesisTitleHTML = document.createElement("h3");
      let thesisTitle = document.createTextNode(title); // Create a text node

      thesisTitleHTML.appendChild(thesisTitle);

      let thesisLinkHTML = document.createElement("a");
      thesisLinkHTML.href = linkToThesis;
      thesisLinkHTML.appendChild(thesisTitleHTML);

      // Abstract text
      let thesisAbstract = document.createTextNode(abstract); // Create a text node
      let thesisAbstractHTML = document.createElement("p");
      thesisAbstractHTML.appendChild(thesisAbstract);

      // middle DIV
      let middleDiv = document.createElement("div");
      middleDiv.className = "cell-front__middle";

      // Add items to FRONT
      thesisContainerFront.appendChild(fullNameHTML);
      thesisContainerFront.appendChild(middleDiv);
      thesisContainerBack.appendChild(thesisAbstractHTML);
      middleDiv.appendChild(thesisShape);
      thesisContainerFront.appendChild(thesisLinkHTML);

      document
        .querySelector(".grid-container")
        .appendChild(thesisContainerMaster);

      thesisContainerMaster.appendChild(thesisContainerFront);
      thesisContainerMaster.appendChild(thesisContainerBack);
    });
  })
  .catch((err) =>
    console.log("Can’t access " + url + " response." + " " + err)
  );
