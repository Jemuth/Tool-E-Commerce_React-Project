# Tool E-commerce: React project

*Concept*: To generate an e-commerce site related to the sale of tools and work accessories, with their respective categories (e.g.: electrical, manual, safety equipment, etc.).
categories (e.g.: electrical, manual, safety equipment, etc).

*General project workflow:*

* Installation and creation of React project with GitHub integration.
* Creation of navigation and essential components (Navbar, CartWidget, etc).
* Mock products and their respective details for display in their respective containers (ItemListContainer, ItemDetailContainer) and components (ItemCount, Item, etc).
* Implementation of routing through react-router-dom
* Implementation of shopping cart visualization by applying CartContext
* Integration with Firebase/Firestore
* Application of css and other components and custom navigation

*Usability*

1. *Navigation* : The catalog displays all available products, which can be filtered by clicking on the links corresponding to each category. It also incorporates filtering by brand, accessible from both the navigation bar and the sidebar.

![](https://github.com/Jemuth/PreEntregaI-JuanJana/blob/main/public/ToolAppTest1.gif)

2. *Details and purchase order* : Each product in the catalog can be viewed in detail, with its specifications, price and stock. The product can be added to the cart, which is reflected in the CartWidget component of the navigation bar. When viewing the cart, you will see a detail of the products and the possibility to make a purchase order through a form, which when submitted will generate a new document in the corresponding Firebase collection.

![](https://github.com/Jemuth/PreEntregaI-JuanJana/blob/main/public/ToolAppTest2.gif)

*To run project*

    npm run dev

*Libraries*

* Vite
* React Router Dom
* Bootstrap
* SweetAlert2
* Firebase/Firestore
