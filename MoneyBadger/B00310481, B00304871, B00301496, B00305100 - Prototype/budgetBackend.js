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
function Asset(name, quantity, isIncome, Reminder){
    this.name = name;
    this.quantity = quantity;
    this.isIncome = isIncome;
    this.reminder = new Reminder("", "", new Date(), 0);
}

// Setting a new reminder
function setReminder(name, description, date, frequency){
	Reminder.name = name;
	Reminder.description = description;
	Reminder.date = date;
	Reminder.frequency = frequency;
}

// Reset a reminder
function removeReminder(){
	Reminder.name = "";
	Reminder.description = "";
	Reminder.date = new Date();
	Reminder.frequency = 0;
}

//

function UserBudget(userName, userPassword, filePath){
	this.userName = userName;
	this.userPassword = userPassword;
	this.saveFileLocation = filePath +"/" + userName;
};
