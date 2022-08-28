export function getConvertedTimeContact(timestamp) {
        let a = new Date(timestamp);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let time = month + ' ' + date + ', ' + year;
        return time;
}

export function getConvertedTimeMessage(timestamp) {
    let options = { hour: "2-digit", minute: "2-digit" };
    let time = new Date(timestamp).toLocaleDateString("en-US", options)
    return time;
}