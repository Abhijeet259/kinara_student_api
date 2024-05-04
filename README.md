kinara_student_api

# Student API with Filtering and Pagination

This project is a Node.js API that provides endpoints for filtering student data and paginating the results. It reads student details from a CSV file and allows clients to retrieve paginated and filtered data.

# Setup

To set up this project locally, follow these steps:
1. Clone the repository:
   git clone https://github.com/your-username/student-api.git

2. Navigate to the project directory:
   cd student-api

3. Install dependencies using npm:
   npm install

# Usage

Filtering with Pagination
You can use the following endpoints to test filtering with pagination:

1. Filter by total_marks and name:
   GET http://localhost:3000/students?total_marks=285&name=John%20Doe&page=1&limit=5

2. Filter by id:
   GET http://localhost:3000/students?id=1&page=1&limit=5

3. Filter by name:
   GET http://localhost:3000/students?name=John%20Doe&page=1&limit=5

4. Filter by total_marks:
   GET http://localhost:3000/students?total_marks=285&page=1&limit=5


Pagination Only
To paginate through the data without filtering, use:

1. GET http://localhost:3000/students?page=3&limit=5


Replace http://localhost:3000 with your server URL if it's different.


# Additional Notes

1. Ensure that the CSV file (students.csv) is present in the data/ directory with the correct student data.
2. The API will return JSON responses containing the paginated data along with pagination details.
3. You can customize the pagination and filtering parameters in the endpoints to suit your needs.
