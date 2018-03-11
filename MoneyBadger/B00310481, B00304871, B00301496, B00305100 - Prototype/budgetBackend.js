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

/*
Instantiates a new Asset object based on its name, quantity, and isIncome.
The method also sets reminder to a blank state with just dueDate and frequency fields set.
 */
var Asset = function(name, quantity, isIncome, Reminder) {
    this.name = name;
    this.quantity = quantity;
    this.isIncome = isIncome;
    this.reminder = new Reminder("", "", new Date(), 0);
};

/*
Calls the Reminder() method and sets reminder to the parameters listed.
 */
Asset.prototype.setReminder = function(name, description, date, frequency) {
	this.reminder = new Reminder(name, description, date, frequency);
};

/*
Resets the reminder to a blank state.
 */
Asset.prototype.removeReminder = function() {
    this.reminder.name = "";
    this.reminder.description = "";
    this.reminder.date = new Date();
    this.reminder.frequency = 0;
};

function UserBudget(userName, userPassword, filePath){
	this.userName = userName;
	this.userPassword = userPassword;
	this.saveFileLocation = filePath +"/" + userName;
};
