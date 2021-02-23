const listOfContainers = document.getElementsByClassName("container");

Array.from(listOfContainers).forEach(function(element, index) {
  element.addEventListener("mouseover", function(){
    const IDofElement = element.getAttribute("id");
    document.querySelector(".description-content[data-project='" + IDofElement + "']").style.display = 'block';
  });

  element.addEventListener("mouseout", function(){
    const IDofElement = element.getAttribute("id");
    document.querySelector(".description-content[data-project='" + IDofElement + "']").style.display = 'none';
  });
})
