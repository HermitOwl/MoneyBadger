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

function Asset(name, quantity, isIncome, dateOfReccurence,frequency){
	this.name = name;
	this.quantity= quantity;
	this.isIncome = isIncome;
	this.reminder = new Reminder("","",dateOfRecurrence,frequency);
	
};

function UserBudget(userName, userPassword, filePath){
	this.userName = userName;
	this.userPassword = userPassword;
	this.saveFileLocation = filePath +"/" + userName;
};
