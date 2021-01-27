const url = "js/theses-final.json";

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    json.forEach((entry) => {
      const grid = document.querySelector(".grid-container");

      let {
        Name: firstName = "[no first name]",
        Surname: lastName = "[no last name]",
        "Link to thesis on Github Pages": linkToThesis = "[no link]",
        "Thesis Title": title = "[no title]",
        Abstract: abstract = "[no abstract]",
        ShapePath = "[no path]",
        ImgPath = "[no path]",
      } = entry;

      title === "" ? (title = "No Title :(") : 0;
      abstract === "" ? (abstract = "No Abstract :(") : 0;

      let cardContainer = document.createElement("div");
      cardContainer.className = "container-card";

      // create an entry for the person
      let thesisContainerMain = document.createElement("div");
      thesisContainerMain.className = "card";

      // a div overlaping the card and creating a light shade on top
      let thesisContainerTop = document.createElement("div");
      thesisContainerTop.className = "card-shade";

      // FRONT of the cell
      let thesisContainerFront = document.createElement("div");
      thesisContainerFront.className = "card-front";

      // Create wrapper for each person
      let thesisContainerBack = document.createElement("div");
      thesisContainerBack.className = "card-back";

      // Create image container for shape Path
      let thesisShape = document.createElement("object");
      thesisShape.className = "thesis-shape";
      thesisShape.setAttribute("data", ShapePath);

      // Create image container for shape Path
      let thesisImage = document.createElement("img");
      thesisImage.className = "thesis-image";
      thesisImage.setAttribute("src", ImgPath);

      thesisImage.setAttribute(
        "style",
        `-webkit-mask: url(${ShapePath}) no-repeat center;`
      );

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
      middleDiv.className = "card-front__middle";

      cardContainer.appendChild(thesisContainerMain);
      // Render the items in the browser
      thesisContainerMain.appendChild(thesisContainerTop);
      thesisContainerFront.appendChild(fullNameHTML);
      thesisContainerFront.appendChild(middleDiv);
      thesisContainerBack.appendChild(thesisAbstractHTML);
      middleDiv.appendChild(thesisShape);

      middleDiv.appendChild(thesisImage);

      //       -webkit-mask: url(logo.svg) no-repeat center;
      // mask: url(logo.svg) no-repeat center;

      thesisContainerFront.appendChild(thesisLinkHTML);

      grid.appendChild(cardContainer);

      thesisContainerMain.appendChild(thesisContainerFront);
      thesisContainerMain.appendChild(thesisContainerBack);
    });
  })
  .then(() => {
    // let colorChoices = ["color-one", "color-two", "color-three"];

    // colorTheme = colorChoices[Math.floor(Math.random() * colorChoices.length)];

    // document.body.classList.add(colorTheme);

    document.querySelectorAll(".container-card").forEach((item) => {
      item.addEventListener("click", (event) => {
        item.querySelector(".card").classList.toggle("is-flipped");
        //handle click
      });
    });
  })
  .catch((err) =>
    console.log("Can’t access " + url + " response." + " " + err)
  );
