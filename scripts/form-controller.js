//Initialize all controllers
const initControllers = function() {
    const submitButton = document.getElementById('sendMessageButton');
    submitButton.addEventListener('click', submitEvent);
}

const submitEvent = function() {
    const formData = new Object();
    formData[entry1] = document.getElementById('name').value;
    formData[entry2] = document.getElementById('email').value;
    formData[entry3] = document.getElementById('phone').value;
    formData[entry4] = document.getElementById('message').value;

    postToGoogleDB(formData);
}

initControllers();