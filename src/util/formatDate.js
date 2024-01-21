// format UTC date to readable string

// example input: 2021-07-01T00:00:00.000Z
// example output: July 1, 2021
export default function formatDate(date) {
    // create a new date object from the date string
    const newDate = new Date(date);

    // get the month from the date object
    const month = newDate.toLocaleString('default', { month: 'long' });

    // get the day from the date object
    const day = newDate.getDate();

    // get the year from the date object
    const year = newDate.getFullYear();

    // return the formatted date string
    return `${month} ${day}, ${year}`;
}