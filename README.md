# **Book Inventory System**


## **Features**
- **Add Books**: Easily add book details (title, author, year) to the inventory.  
- **View Book List**: View all books in an organized list.  
- **Filter Books**: Use filters to search books by title or author.  
- **Export Data**: Download the entire book inventory as a CSV file.

---

## **Technology Stack**
### **Frontend**
- **Framework**: React.js  
- **Styling**: Tailwind CSS  

### **Backend**
- **Framework**: Flask  
- **Database**: SQLite  

### **API Endpoints**
- `GET /api/books`: Fetch all books.  
- `POST /api/books/add`: Add a new book.  
- `GET /api/export`: Export book data as a CSV file.  

---

## **Installation**

### **System Requirements**
- **Node.js**: v14 or later  
- **Python**: v3.8 or later  

### **Setup Instructions**

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/Komal-prajapati/book-system.git
   cd book-system
   ```

2. **Backend Setup**:  
   - Navigate to the backend folder:  
     ```bash
     cd frontend/backend
     ```
   - Start the backend server:  
     ```bash
     python app.py
     ```

3. **Frontend Setup**:  
   - Navigate to the frontend folder:  
     ```bash
     cd frontend
     ```
   - Install React dependencies:  
     ```bash
     npm install
     ```
   - Start the React development server:  
     ```bash
     npm start
     ```

4. **Access the Application**:  
   - Open your browser and go to `http://localhost:3000`.

---

## **Usage**
- Navigate to the "Add Book" section to input book details.  
- View all added books in the "Book List" section.  
- Use the "Filter Books" functionality to find specific books by title or author.  
- Export your inventory to a CSV file using the "Export Data" option.  

---

## **Design Decisions**
### **Frontend**  
- **Component-Based Architecture**: Ensures modular and reusable components.  
- **Tailwind CSS**: Simplifies styling and enables quick customization.  

### **Backend**  
- **Flask Framework**: Lightweight and ideal for building RESTful APIs.  
- **SQLite**: Chosen for its simplicity and seamless integration with Flask.  

---

## **Challenges & Solutions**
1. **CORS Policy Issues**:
   - **Problem**: The frontend couldn’t communicate with the backend due to browser CORS restrictions.  
   - **Solution**: Implemented Flask-CORS to handle cross-origin requests.  

2. **Dynamic Book List Updates**:
   - **Problem**: The `BookList` component didn’t reflect newly added books automatically.  
   - **Solution**: Managed state updates in React using `useState` and passed state-modifying functions as props.  

3. **Exporting CSV**:
   - **Problem**: Formatting backend responses into a downloadable CSV file.  
   - **Solution**: Used Flask’s `Response` object to generate and return CSV files with appropriate headers.  
