let data = [];

// fetch api
fetch("../data/data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json.tabPanes;
    renderTab(json.navPills);
    filterByType("topclothes");
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
