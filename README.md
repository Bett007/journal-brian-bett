# Journal App

A simple **Journal App** built with **React** that allows users to **view, create, and manage journal entries**. Entries are displayed as cards and can be marked as important. This app uses the **JSONPlaceholder API** for fetching and posting data.

---

## Features

✅ **Core Features:**  

- View existing journal entries (fetched from JSONPlaceholder)  
- Add a new journal entry (with **title** and **body**)  
- Mark entries as **important**  
- Loading state displayed while fetching/submitting data  
- Responsive **card layout** with two-column grid  

💡 **Extra Features (Optional/Advanced):**  

- Delete journal entries  
- Edit journal entries  
- Filter to show only important entries  

---

## Technologies Used

- **React** (Functional Components & Hooks)  
- **CSS Grid** for responsive layout  
- **JSONPlaceholder API** for data simulation  
- **Vite** for project scaffolding  

---

## Project Structure

journal-brian-bett/  
├── src/  
│   ├── components/  
│   │   ├── JournalList.jsx  
│   │   ├── JournalItem.jsx  
│   │   ├── JournalForm.jsx  
│   │   └── Loading.jsx  
│   ├── css/  
│   │   └── App.css  
│   ├── App.jsx  
│   └── main.jsx  
├── package.json  
├── vite.config.js  
└── README.md  

---

## Installation

1. **Clone the repository** ***(SHH option)*** 
```
git clone git@github.com:Bett007/journal-brian-bett.git
```
2. **Navigate into the project folder**  
```
cd journal-brian-bett
```
3. **Install dependencies**  
```
npm install
```
4. **Run the app**  
```
npm run dev
```
5. Open your browser at the URL shown in the terminal (usually `http://localhost:5173`)  

---

## How to Use

1. Click **"Add New Entry"** to open the form  
2. Fill in the **Title** and **Body** fields  
3. Click **"Add Entry"** to submit (client-side validation requires both fields)  
4. Click the **star icon** on a card to mark it as important  
5. Loading states are shown when fetching or submitting entries  

---

## Styling

- **Cards** for each journal entry with **rounded corners, shadows, and spacing**  
- **Two-column responsive layout** on desktop, adjusts to single column on smaller screens  
- Form styled as a **card** to match entries  

---

## Future Enhancements

- Add **delete** and **edit** functionality via API calls  
- Add **filter by important entries**  
- Persistent data storage (instead of temporary JSONPlaceholder)  

---

## Author

**Brian Bett** – Bootcamp Student at Moringa School  

---

## License

This project is for educational purposes and not for commercial use.

