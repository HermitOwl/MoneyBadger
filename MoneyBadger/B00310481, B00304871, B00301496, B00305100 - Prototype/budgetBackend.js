function IOControl(userFilePath){
	this.userFilePath = userFilePath;
	this.userFile ="";
};

function Reminder(name, description, date, frequency){
	this.name= name;
	this.frequency = frequency;
	this.description = description;
	this.date = date;
};

// Asset Object - Leon Irving B00301496

// Instantiates a new asset
function Asset(name, quantity, isIncome, reminder){
    this.name = name;
    this.quantity = quantity;
    this.isIncome = isIncome;
    this.reminder = new Reminder("", "", new Date(), 0);
}

// Setting a new reminder
function setReminder(name, description, date, frequency){
	new Reminder(name, description, date, frequency);
}

// Reset a reminder
function removeReminder(reminder){
	reminder.name = "";
	reminder.description = "";
	reminder.date = new Date();
	reminder.frequency = 0;
}

function UserBudget(userName, userPassword, filePath){
	this.userName = userName;
	this.userPassword = userPassword;
	this.saveFileLocation = filePath +"/" + userName;
};
