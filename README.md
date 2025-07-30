# ✅ TaskMaster - To-Do List Web App

**TaskMaster** is a fully functional and visually clean To-Do List Web Application built using **HTML, CSS, and JavaScript**. It allows users to manage daily tasks with features like adding new tasks, 
marking them as completed, filtering (All/Active/Completed), clearing completed ones, and switching between light/dark themes. The UI is fully responsive and works across devices.

---

## 🛠️ Tech Stack

- **HTML5** – Markup for structuring the page
- **CSS3** – Styling and responsiveness (media queries included)
- **JavaScript (ES6)** – Functional behavior and DOM manipulation
- **Font Awesome** – For icons (moon, sun, delete, etc.)

---

## 📦 Features

- ✅ **Add New Tasks** via an input field and "+" button.
- ❌ **Delete Tasks** with a confirmation prompt.
- ✔️ **Mark Tasks as Completed** using checkboxes.
- 🔄 **Real-Time Remaining Task Counter**.
- 🔍 **Filter Tasks** by:
  - All (default view)
  - Active (incomplete)
  - Completed (done)
- 🧹 **Clear All Completed Tasks** in one click.
- 🌙/☀️ **Dark & Light Theme Toggle** with seamless UI adjustments.
- 📱 **Responsive Design** for mobile, tablet, and desktop screens.

---

## 🧠 Core Concepts and Functional Highlights

### ✔️ Task Management
- **Create Tasks**: Input field + button (+) allows quick task creation
- **Delete Task**: ❌ icon with confirmation before deletion
- **Mark Complete**: Checkboxes track task state
- **Remaining Task Counter**: Dynamically updates based on checkboxes

---

### 🔎 Filtering
- **All**: Shows all tasks
- **Active**: Shows only tasks that are not yet completed
- **Completed**: Shows only checked tasks
- UI updates dynamically based on selected filter

---

### 🌙 Theme Switching
- Supports **Dark** and **Light** modes
- Switcher dynamically changes:
- Background color
- Font colors
- Toggle icon (☀️ / 🌙)

---

### 💡 JavaScript Concepts Used
- DOM manipulation using `querySelector`, `createElement`, `appendChild`, `addEventListener`
- Conditional rendering based on state (checkbox checked/unchecked)
- Event delegation for dynamic element handling
- Theme persistence logic (in-memory; can be extended to `localStorage`)
- Responsive design using **CSS media queries**

---

## Future Improvements

- Add localStorage to persist tasks across sessions
- Add task due dates and priority tags
- Add edit task functionality

---

## Author
Anmol Kumar
