// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get(` https://lambda-times-backend.herokuapp.com/topics`)
  .then(response => {
    // console.log("Success! ", data.data);
    // const tabData = document.querySelectorAll('.tab');

    // tabData.appendChild(tabCreation(data));
    const tabData = response.data.topics;
    tabData.forEach(e => {
      document.querySelector(".topics").appendChild(tabCreation(e));
    });
  })

  .catch(error => {
    console.log("Error", error);
  });

function tabCreation(data) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  // tab.appendChild(topics);
  // tab.innerText = data.topics;
  tab.textContent = data;

  return tab;
}
