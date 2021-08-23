const menu = [
  {
    id: 1,
    title: "jollof rice",
    category: "breakfast",
    price: 30.00,
    img: "./images/item-1.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 2,
    title: "FuFu and Bitter Leaf",
    category: "lunch",
    price: 33.99,
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 3,
    title: "buns",
    category: "snacks",
    price: 6.99,
    img: "https://media.istockphoto.com/photos/nigerian-deep-fried-buns-served-in-a-bowl-picture-id1140710177?k=6&m=1140710177&s=612x612&w=0&h=b_Re61XoYSvCxzdSMBKqD7WlingQY2hqBlTYFVD171I=",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 4,
    title: "Semo and Egusi",
    category: "breakfast",
    price: 30.99,
    img: "https://media.istockphoto.com/photos/egusi-soup-and-pounded-yam-nigerian-cuisine-picture-id498310978?k=6&m=498310978&s=612x612&w=0&h=8Po6bucmz3y3ZW2edNZLF3wltOGpwnZ80FuSzzD8H7M=",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  },
  {
    id: 5,
    title: "Suya",
    category: "lunch",
    price: 22.99,
    img: "https://media.istockphoto.com/photos/grilled-peppered-meat-picture-id1224277348?k=6&m=1224277348&s=612x612&w=0&h=PlCTqeRgvYjImCFOknb_j0C4jMRlRcVH1WcJsmdhzmQ=",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 6,
    title: "chinchin",
    category: "snacks",
    price: 18.99,
    img: "https://media.istockphoto.com/photos/bags-of-nigerian-chin-chin-for-christmas-gifts-picture-id1087787902?k=6&m=1087787902&s=612x612&w=0&h=Aw_hbKc9D448nQQPWxmxu664o5J98Ym4CDS509dTQZE=",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "PuffPuff",
    category: "breakfast",
    price: 8.99,
    img: "https://media.istockphoto.com/photos/pile-of-nigerian-puff-puff-served-at-party-picture-id1151916710?k=6&m=1151916710&s=612x612&w=0&h=aIlAw4YilmjFgXbi7TIp4zV7_ONVC_mzCnnFkPojUwI=",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Ewa Goin",
    category: "lunch",
    price: 12.99,
    img: "https://media.istockphoto.com/photos/plate-of-mashed-beans-with-red-palm-oil-picture-id654764146?k=6&m=654764146&s=612x612&w=0&h=n5JRUDfGyDHUbSr6q2dd37bKa6gTyOYCvrB0DZ9rYgw=",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Zobo",
    category: "snacks",
    price: 16.99,
    img: "https://media.istockphoto.com/photos/two-glasses-with-a-healthy-drink-zobo-and-dried-hibiscus-leaves-picture-id1308266809?k=6&m=1308266809&s=612x612&w=0&h=5YQc-Eznx3MJbmWr45RS9JrhFr5gAAXQQBhl1pHS-qU=",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Akara and Pap",
    category: "dinner",
    price: 22.99,
    img: "https://media.istockphoto.com/photos/nigeran-deep-fried-beancake-akara-with-custard-picture-id1255115646?k=6&m=1255115646&s=612x612&w=0&h=smnGThWXJ4oVFC3UayWVJmMCAcW7AG0rMv7LUFm-zI4=",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}