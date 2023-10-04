const getElements = (selector) => document.querySelector(selector);

// Render tab item
const renderTab = (data) => {
  let content = "";

  data.map((item) => {
    content += `
    <li class="nav-item" role="presentation">
      <button class="nav-link active" onclick="filterByType('${item.type}')">${item.showName}</button>
    </li>
     `;
  });

  getElements("#nav-pills").innerHTML = content;
};

// Lọc theo type
const filterByType = (type) => {
  const dataFilter = data.filter((item) => item.type === type);
  renderList(dataFilter);
};

// Render list product
const renderList = (data) => {
  let content = "";
  data.map((item) => {
    content += `
      <div class="card">
        <img src="${item.imgSrc_jpg}" class="img-fluid" alt="${item.name}"/>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <button class="btn btn-primary" onclick="testCloth('${item.id}')">Thử đồ</button>
        </div>
      </div>
    `;
  });

  getElements(".tab-content").innerHTML = content;
};

const testCloth = (id) => {
  // Tìm sản phẩm theo id
  const cloth = data.find((item) => item.id === id);
  switch (cloth.type) {
    case "topclothes":
      getElements(".bikinitop").innerHTML = `
        <img src="${cloth.imgSrc_png}" alt="${cloth.name}" />
      `;
      break;
    case "botclothes":
      getElements(".bikinibottom").innerHTML = `
        <img src="${cloth.imgSrc_png}" alt="${cloth.name}" />
      `;
      break;
    case "shoes":
      getElements(".feet").innerHTML = `
        <img src="${cloth.imgSrc_png}" alt="${cloth.name}" />
      `;
      break;
    case "handbags":
      getElements(".handbag").innerHTML = `
        <img src="${cloth.imgSrc_png}" alt="${cloth.name}" />
      `;
      break;
    case "necklaces":
      getElements(".necklace").innerHTML = `
        <img src="${cloth.imgSrc_png}" alt="${cloth.name}" />
      `;
      break;
    case "hairstyle":
      getElements(".hairstyle").innerHTML = `
        <img src="${cloth.imgSrc_png}" alt="${cloth.name}" />
      `;
      break;
    case "background":
      getElements(".background").innerHTML = `
        <img src="${cloth.imgSrc_png}" alt="${cloth.name}" />
      `;
      break;
    default:
      break;
  }
};
