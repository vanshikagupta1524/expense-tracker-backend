const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://vanshikagupta1524:vt29P4JnxhGXym3r@expensetracker.bkck9dl.mongodb.net/?retryWrites=true&w=majority&appName=expensetracker")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}
// vt29P4JnxhGXym3r
module.exports = {db}