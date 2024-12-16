```javascript
function findDocuments(field, array) {
  if (array.length === 0) {
    // Handle the case where the array is empty - return all documents
    return db.collection.find({}); 
  } else {
    return db.collection.find({ field: { $in: array } });
  }
}

// Example usage
const documents = findDocuments('field', []); //Returns all documents
console.log(documents.toArray());

const documents2 = findDocuments('field', [1, 2, 3]); //Returns documents where field is 1, 2 or 3
console.log(documents2.toArray());
```