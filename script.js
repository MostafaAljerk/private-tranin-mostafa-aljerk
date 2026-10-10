const backtotop = document.getElementById("back-to-top");

if (backtotop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backtotop.style.display = "block";
        } else {
            backtotop.style.display = "none";
        }
    });
}
const products = [
    {
        id: 1,
        name: "Kami Tech",
        category: "Fashion",
        categoryName: "Kami by YI 4pc 1080p Home Security Cameras",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp7.png"
    },

    {
        id: 2,
       name: "Apple",
        category: "Electronics",
        categoryName: "Apple Watch Series 8 [GPS 45mm] Smart Watch",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp6.png"
    },

    {
        id: 3,
        name: "Apple",
        category: "Electronics",
        categoryName: "2020 Apple MacBook Air Laptop: Apple M1 Chip",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp5.png"
    },

    {
        id: 4,
        name: "Philips",
        category: "Electronics",
        categoryName: "Philips H4205 On-Ear Wireless Headphones",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp4.png"
    },
     {
        id: 5,
        name: "Samsung",
        category: "Electronics",
        categoryName: "Samsung 30-100 inches The Freestyle FHD HDR Smart Projector",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/imgsp1.png"
    },
     {
        id: 6,
        name: "Fujifilm",
        category: "Fashion",
        categoryName: "Fujifilm INSTAX Mini Link 2 Smartphone Printer Exclusive",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp6.png"
    },
     {
        id: 7,
        name: "ASUS",
        category: "Home & Garden",
        categoryName: "ASUS ROG Strix G15 15.6-inch Gaming Desktop, AMD Ryzen 7-5800X",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp5.png"
    },
     {
        id: 8,
        name: "Razer",
        category: "Electronics",
        categoryName: "Razer Power Up Gaming Bundle V2 - Cynosa Lite, Gigantus V2, DeathAdder Essential",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp4.png"
    },
     {
        id: 9,
        name: "Philips",
        category: "Home & Garden",
        categoryName: "Philips H4205 On-Ear Wireless Headphones",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp4.png"
    },
     {
        id: 10,
        name: "Apple",
        category: "Fashion",
        categoryName: "Apple Watch Series 8 [GPS 45mm] Smart Watch",
        price: 2856.3,
        oldPrice: 3000,
        image: "file:///D:/train%20work/images/Ecom%20-%20Ecom%20Marketplace%20Template_files/imgsp6.png"
    },


];
let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

let selectedCategory = "all";

const productsContainer = document.getElementById("productsContainer");
const filterButtons = document.getElementById("filterButtons");

const searchInput = document.getElementById("searchInput");

const cartItems = document.getElementById("cartItems");
const offcanvasCartItems = document.getElementById("offcanvasCartItems");


const offcanvasCartTotal = document.getElementById("offcanvasCartTotal");

const cartCount = document.getElementById("cartCount");

const cartTotal = document.getElementById("cartTotal");
const noResults = document.getElementById("noResults");
console.log("productsContainer:", productsContainer);
console.log("filterButtons:", filterButtons);
console.log("searchInput:", searchInput);
 // عرض المنتجات

      function displayProducts() {

    if (!productsContainer) {
    return;
}

    const searchText = searchInput.value.trim().toLowerCase();

        const filteredProducts = products.filter(function (product) {
          const matchesCategory =
            selectedCategory === "all" || product.category === selectedCategory;

          const matchesSearch =
            product.name.toLowerCase().includes(searchText) || product.categoryName.toLowerCase().includes(searchText);

          return matchesCategory && matchesSearch;
        });

        productsContainer.innerHTML = "";

       if (filteredProducts.length === 0) {

    if (noResults) {
        noResults.classList.remove("d-none");
    }

    return;
}

if (noResults) {
    noResults.classList.add("d-none");
}

        filteredProducts.forEach(function (product) {
          productsContainer.innerHTML += `
            <div class="col">
            <div
              class="card h-100 p-3 rounded-3 product-card position-relative bg-white"
            >
              <span
                class="badge bg-warning text-white position-absolute top-0 start-0 m-3 px-2 py-1 rounded-pill small"
                >-17%</span
              >

              <div class="quick-actions">
                <a href="#" class="action-btn"
                  ><i class="fa-solid fa-bolt"></i
                ></a>
                <a href="#" class="action-btn"
                  ><i class="fa-solid fa-heart"></i
                ></a>
                <a href="#" class="action-btn"
                  ><i class="fa-solid fa-arrows-rotate"></i
                ></a>
                <a href="#" class="action-btn"
                  ><i class="fa-solid fa-eye"></i
                ></a>
              </div>

              <div class="text-center my-3">
                <img
                  src="${product.image}"
                  alt="Security Camera"
                  class="img-fluid"
                  style="height: 140px; object-fit: contain"
                />
              </div>
              <span class="text-muted extra-small d-block mb-1">${product.name}</span>
              <h6
                class="fw-bold small mb-2 text-truncate-2"
                style="color: #425a8b; min-height: 38px"
              >
                ${product.categoryName}
              </h6>
              <div class="text-warning small mb-2">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span class="text-muted extra-small">(65)</span>
              </div>
              <div class="fw-bold mb-3" style="color: #0d6efd">
                $${product.price}
                <span
                  class="text-muted text-decoration-line-through small fw-normal"
                  >${product.oldPrice}</span
                >
              </div>
              <button
                type="button"
                class="btn btn-light btn-sm text-secondary border-secondary w-100 fw-semibold mt-auto"
                onclick="addToCart(${product.id})"
                >
                 Add To Cart
              </button>
              <ul
                class="list-unstyled mt-3 pt-2 border-top text-muted extra-small mb-0"
              >
                <li class="mb-1 d-flex align-items-start">
                  <span class="me-1 text-secondary"
                    >-27-inch (diagonal) Retina 5K display</span
                  >
                </li>
                <li class="mb-1 d-flex align-items-start">
                  <span class="me-1 text-secondary"
                    >-3.1GHz 6-core 10th-generation Intel Core i5</span
                  >
                </li>
                <li class="d-flex align-items-start">
                  <span class="me-1 text-secondary"
                    >-AMD Radeon Pro 5300 graphics</span
                  >
                </li>
              </ul>
            </div>
          </div>
          `;
        });
      }



      
      function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}
// إضافة منتج إلى السلة



    function addToCart(productId) {

    const product = products.find(function (item) {
        return item.id === productId;
    });

    if (!product) {
        return;
    }

    const existingProduct = cart.find(function (item) {
        return item.id === productId;
    });

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            categoryName: product.categoryName,
            price: product.price,
            image: product.image,
            quantity: 1
        });

    }

    saveCart();

    // تحديث عدد السلة
    updateCartInformation();

    // الانتقال إلى صفحة السلة الكبيرة
    window.location.href = "./shop-cart.html";
}
      // عرض محتويات السلة

     function displayCart() {

    const cartItems = document.getElementById("cartItems");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="border rounded-3 p-4 text-center">
                Cart is empty
            </div>
        `;

        updateCartInformation();
        return;
    }


    cart.forEach(function (item) {

        const subtotal = item.price * item.quantity;

        cartItems.innerHTML += `

            <div class="row align-items-center border rounded-3 p-3 mb-3">

                <!-- Product -->
                <div class="col-5">

                    <div class="d-flex align-items-center gap-3">

                        <!-- Checkbox -->
                        <input
                            type="checkbox"
                            class="form-check-input"
                        >


                        <!-- Image -->
                        <img
                            src="${item.image}"
                            alt="${item.categoryName || item.name}"
                            style="
                                width: 80px;
                                height: 80px;
                                object-fit: contain;
                            "
                        >


                        <!-- Product Info -->
                        <div>

                            <!-- Category / Company -->
                            <small class="text-muted d-block">
                                ${item.name}
                            </small>


                            <!-- Product Name -->
                            <h6
                                class="mb-1"
                                style="color:#425a8b;"
                            >
                                ${item.categoryName || item.name}
                            </h6>


                            <!-- Stars -->
                            <div class="text-warning small">

                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>

                                <span class="text-muted">
                                    (65)
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                <!-- Unit Price -->
                <div class="col-2 text-center">

                    <strong>
                        $${item.price.toFixed(2)}
                    </strong>

                </div>


                <!-- Quantity -->
                <div class="col-2 text-center">

                    <div
                        class="d-inline-flex align-items-center border rounded"
                    >

                        <!-- Minus -->
                        <button
                            type="button"
                            class="btn btn-sm"
                            onclick="decreaseQuantity(${item.id})"
                        >
                            −
                        </button>


                        <!-- Number -->
                        <input
                            type="text"
                            value="${item.quantity}"
                            readonly
                            class="form-control form-control-sm text-center border-0"
                            style="width:45px;"
                        >


                        <!-- Plus -->
                        <button
                            type="button"
                            class="btn btn-sm"
                            onclick="increaseQuantity(${item.id})"
                        >
                            +
                        </button>

                    </div>

                </div>


                <!-- Subtotal -->
                <div class="col-2 text-center">

                    <strong>
                        $${subtotal.toFixed(2)}
                    </strong>

                </div>


                <!-- Remove -->
                <div class="col-1 text-center">

                    <button
                        type="button"
                        class="btn btn-sm btn-outline-danger"
                        onclick="removeFromCart(${item.id})"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </div>

        `;
    });


    updateCartInformation();
}
function displayOffcanvasCart() {

    if (!offcanvasCartItems) {
        return;
    }

    offcanvasCartItems.innerHTML = "";


    if (cart.length === 0) {

        offcanvasCartItems.innerHTML = `
            <div class="text-center text-muted py-4">
                Cart is empty
            </div>
        `;

        if (offcanvasCartTotal) {
            offcanvasCartTotal.textContent = "$0.00";
        }

        return;
    }


    let totalPrice = 0;


    cart.forEach(function (item) {

        const subtotal = item.price * item.quantity;

        totalPrice += subtotal;


        offcanvasCartItems.innerHTML += `

            <div class="d-flex align-items-center gap-3 border-bottom py-3">

                <!-- Image -->
                <div>

                    <img
                        src="${item.image}"
                        alt="${item.categoryName || item.name}"
                        style="
                            width:70px;
                            height:70px;
                            object-fit:contain;
                        "
                    >

                </div>


                <!-- Product Information -->
                <div class="flex-grow-1">

                    <h6 class="mb-1">

                        ${item.categoryName || item.name}

                    </h6>


                    <div class="small text-muted">

                        ${item.quantity} x
                        $${item.price.toFixed(2)}

                    </div>

                </div>


                <!-- Delete -->
                <div>

                    <button
                        type="button"
                        class="btn btn-sm btn-outline-danger"
                        onclick="removeFromCart(${item.id})"
                    >

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </div>

        `;
    });


    if (offcanvasCartTotal) {

        offcanvasCartTotal.textContent =
            "$" + totalPrice.toFixed(2);

    }

}
      // زيادة الكمية

     function increaseQuantity(productId) {

    const item = cart.find(function (product) {
        return product.id === productId;
    });

    if (item) {
        item.quantity++;
    }

    saveCart();

    displayCart();

    updateCartInformation();

}
      // تقليل الكمية

     function decreaseQuantity(productId) {

    const item = cart.find(function (product) {
        return product.id === productId;
    });

    if (!item) {
        return;
    }


    if (item.quantity > 1) {

        item.quantity--;

    } else {

        removeFromCart(productId);

        return;

    }


    saveCart();

    displayCart();

    updateCartInformation();

}

      // حذف المنتج

     function removeFromCart(productId) {

    cart = cart.filter(function (item) {
        return item.id !== productId;
    });


    saveCart();

    displayCart();

    updateCartInformation();

}
      // تحديث العدد والمجموع

    function updateCartInformation() {

    let totalQuantity = 0;
    let totalPrice = 0;


    cart.forEach(function (item) {

        totalQuantity += item.quantity;

        totalPrice += item.price * item.quantity;

    });


    // عدد السلة في Navbar
    if (cartCount) {

        cartCount.textContent = totalQuantity;

    }


    // Total في shop-cart
    if (cartTotal) {

        cartTotal.textContent =
            "$" + totalPrice.toFixed(2);

    }


    // Subtotal في shop-cart
    const cartSubtotal =
        document.getElementById("cartSubtotal");

    if (cartSubtotal) {

        cartSubtotal.textContent =
            "$" + totalPrice.toFixed(2);

    }


    // السلة الصغيرة Offcanvas
    displayOffcanvasCart();

}
      // البحث

      if (searchInput) {

    searchInput.addEventListener("input", function () {
        displayProducts();
    });

}

      // أزرار التصفية

      
if (filterButtons) {
    filterButtons.addEventListener("change", function () {

        selectedCategory = filterButtons.value;

        displayProducts();
    });
}

if (productsContainer) {
    displayProducts();
}

if (cartItems) {
    displayCart();
}

updateCartInformation();
