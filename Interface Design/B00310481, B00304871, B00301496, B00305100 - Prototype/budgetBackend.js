function IOControl(userFilePath){
	this.userFilePath = userFilePath;
	this.userFile ="";
};

function Reminder(name, description, date){
	this.name= name;
	this.description = description;
	this.date = date;
};

function Asset(name, quantity, isIncome, dateOfReccurence){
	this.name = name;
	this.quantity= quantity;
	this.isIncome = isIncome;
	this.dateOfReccurence = dateOfReccurence;
	this.reminder = new Reminder("","",null);
	this.frequency = 0;
};

function UserBudget(userName, userPassword, filePath){
	this.userName = userName;
	this.userPassword = userPassword;
	this.saveFileLocation = filePath +"/" + userName;
};