const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const PORT = 3000;

app.get('/students', (req, res) => {
    let results = [];
    fs.createReadStream('data/students.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Apply filters first (if any)
            const filters = req.query;
            results = applyFilters(results, filters);

            // Extract pagination parameters from query, providing default values if not specified
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 10;
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;

            // Slice the results to get the page requested
            const paginatedData = results.slice(startIndex, endIndex);

            // Return the paginated data along with pagination details
            res.json({
                data: paginatedData,
                pagination: {
                    currentPage: page,
                    pageSize: limit,
                    totalRecords: results.length
                }
            });
        });
});



// Helper function to apply filters
function applyFilters(data, filters) {
    return data.filter(item => {
        for (const key in filters) {
            if (key !== 'page' && key !== 'limit') {
                const itemValue = item[key];
                const filterValue = filters[key];
                if (!itemValue || itemValue.toLowerCase() !== filterValue.toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    });
}


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
