# 🎧 DJS02 – Web Component: Podcast Preview  
**Student:** Kyle Patterson  
**Module:** DJS02 – Web Component: Podcast Preview  
**Year:** 2025  

---

## Overview  

This project was created by **Kyle Patterson** as part of the DJS02 module.  
It focuses on building a **custom HTML element** (a Web Component) that shows a podcast preview in a simple and reusable way.

The goal is to make a component that can:
- Display podcast details like the title, image, genres, and number of seasons  
- Be reused anywhere in the app without changing the main code  
- Communicate with the parent page when a user interacts with it (like clicking)  

The component uses the **Web Component standard** with `customElements.define()` and the **Shadow DOM** for styling and logic separation.  

---

## Core Objectives  

### 🧩 Web Component Functionality  

This component should:
- Be created using `customElements.define()`  
- Accept podcast data (cover image, title, genres, number of seasons, and last updated date) through **HTML attributes** or **JavaScript properties**  
- Stay **stateless**, meaning it only shows data given to it — it doesn’t store or manage its own  
- Use the **Shadow DOM** to keep its styles and scripts separate from the rest of the site  
- Send out a **custom event** when it’s clicked, allowing the main application to react (like opening a modal with more details)  

---

## UI/UX Requirements  

The component should look clean, simple, and consistent with the overall app design.  
It must display:
- 🎨 **Podcast cover image**  
- 📝 **Title**  
- 🏷️ **Genres**  
- 📀 **Number of seasons**  
- ⏰ **Last updated date** (in a readable format)

Additional UI/UX expectations:
- The component must be **responsive**, working smoothly on both desktop and mobile devices  
- On click, it should send an event to the main app to show more details in a modal window  

---

## Code Quality & Maintainability  

To keep the project easy to read and maintain:
- The code is written in a **clean and modular** way  
- Both **object-oriented** and **functional** approaches are used where suitable  
- Important functions are documented using **JSDoc** (explaining what they do and what they return)  
- Formatting across HTML, CSS, and JavaScript is consistent and clear  

---

## Technical Constraints  

The component follows these technical rules:
- It does **not** use any external frameworks (like React or Vue)  
- Built only with **native JavaScript (ES6+)**, **HTML**, and **CSS**  
- It works **without reloading or navigating** to another page  
- It’s fully **compatible with modern browsers**  

---

## Deliverables  

For this project, I included:
1. A fully working Web Component file (`PodcastPreview.js`)  
2. A demo HTML page showing how the component is used  
3. This `README.md` file, explaining:  
   - How to register and use the component  
   - How to pass data into it  
   - How to listen for user interactions  

---

## How to Use the Component  

### 🧱 Registering the Component  

In your JavaScript file, import and define the component like this:
```js
import "./PodcastPreview.js";
This automatically registers your component as <podcast-card> in the browser.

🎧 Passing Data
You can pass data to the component using attributes:

html

<podcast-card 
  title="Tech Talks Daily"
  cover="images/podcast1.jpg"
  genres="Technology,Innovation"
  seasons="3"
  updated="2025-10-15">
</podcast-card>
The component will read these values and display them inside its layout automatically.

🔔 Listening for Interaction Events
When someone clicks on a podcast card, it sends a custom event to the main app.
You can listen for it like this:

js

document.addEventListener("podcast-click", (event) => {
  const podcast = event.detail;
  console.log("Podcast selected:", podcast.title);
});
This allows the parent page to open a modal, show more details, or perform any other action.

🔄 Example Data Flow
Here’s a simple look at how everything connects:

css

Main App → Passes data → <podcast-card> → User clicks → Sends event back → Main App opens modal
This setup keeps the app modular — meaning the component can be reused anywhere without rewriting your main logic.

## ✅ Final Thoughts
This project taught me how to build and use custom web components that are modular, interactive, and cleanly coded.
It also helped me understand the importance of component-based architecture in front-end development.

Created by:
👨‍💻 Kyle Patterson
📚 DJS02 – Web Component: Podcast Preview
📆 2025