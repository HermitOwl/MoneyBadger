u = new UserBudget("username", "password", "filepath");

$(document).on("pageinit", "#addIncome", function()
{
    $("#addIncomeConfirm").on("click", function()
    {
        u.addAsset($("#addIncomeName").val(), parseFloat($("#addIncomeAmount").val()), true, $("#addIncomeFrequency").val(), $("#addIncomeDate").val());
        document.getElementById("totalIncome").innerHTML = "£" + u.tallyIncome().toFixed(2);
        document.getElementById("totalSavings").innerHTML = "£" + u.tallySavings().toFixed(2);
        $("#addIncomeAmount").val("");
        $("#addIncomeName").val("");
        $("#addIncomeDate").val(new Date());
    });
});

$(document).on("pageinit", "#addExpenditure", function()
{
    $("#addExpenditureConfirm").on("click", function()
    {
        u.addAsset($("#addExpenditureName").val(), parseFloat($("#addExpenditureAmount").val()), false, $("#addExpenditureFrequency").val(), $("#addExpenditureDate").val());
        document.getElementById("totalExpenditure").innerHTML = "£" + u.tallyExpenditure().toFixed(2);
        document.getElementById("totalSavings").innerHTML = "£" + u.tallySavings().toFixed(2);
        $("#addExpenditureAmount").val("");
        $("#addExpenditureName").val("");
        $("#addExpenditureDate").val(new Date());
    });
});

/*
document.onload = function(){
    //Initial Login Page
    var nameStart = document.getElementById("nameStart");
    var passwordStart = document.getElementById("passwordStart");
    var passwordConfirm = document.getElementById("passwordConfirm");
    var initialLoginConfirmButton = document.getElementById("initialLoginConfirm");

    //Login Page
    var userName = document.getElementById("name");
    var password = document.getElementById("password");
    var loginConfirm = document.getElementById("loginConfirm");

    //Settings Page
    var changeDetailsButton = document.getElementById("changeDetails");
        //changeDetailsButton.onclick =
    var csvExportButton = document.getElementById("csvExport");
        //csvExportButton.onclick =
    var budgetResetButton = document.getElementById("budgetReset");
        //budgetResetButton.onclick =
    var userResetButton = document.getElementById("userReset");
        //userResetButton.onclick =
};
*/

//B00310481
/*
This function takes in a userBudget object, inspects it and returns a XML string 
*/
function userBudgetToXML(userBudget){
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
	var temp =`<?xml version="1.0" encoding = "UTF-8"?> 
	<user id="${userBudget.userName}" checksum="${generateChecksum()}-${userBudget.userPassword}">
	<income>
	${userbudget.income.forEach(assetToXML())}
	</income>
	<expenditure>
	${userbudget.expenditure.forEach(assetToXML())}
	</expenditure>
	</user>
	`;
	
	function assetToXML(){
		var temp=`<asset id="${this.name}" quantity="${this.quantity}">
		<reminder frequency="${this.reminder.frequency}">
		<description>
		${this.reminder.description}
		</description>
		<date>${this.reminder.date.getMonth()},${this.reminder.date.getDate()},${this.reminder.date.getFullYear()}}</date>
		</reminder>
		</asset>`
		return temp;
	}
	
}

function IOControl(userFilePath){
	this.userFilePath = userFilePath;
	this.userFile ="";
};

/*
This takes the two string parameters password and 
passwordConfirm and compares them and returns the boolean result.
*/
function verifyPassword(){
	document.getElementById("initialLoginConfirm").href = "#initial"
	var nameStart = document.getElementById("nameStart");
    var passwordStart = document.getElementById("passwordStart");
    var passwordConfirm = document.getElementById("passwordConfirm");
	if((nameStart.value.trim()=="")||(passwordStart.value.trim() == "")|| (passwordConfirm.value.trim() =="")){
	window.alert("please fill all details");
	}
	else if(passwordStart.value != passwordConfirm.value){
		window.alert("Sorry the passwords don't match");
		document.getElementById("passwordStart").value="";
		document.getElementById("passwordConfirm").value="";
		//window.alert(nameStart.value +" "+ passwordStart.value+ " "+ passwordConfirm.value);
	}else{
		document.getElementById("initialLoginConfirm").href = "#home";
		document.getElementById("nameStart").value="";
		document.getElementById("passwordStart").value="";
		document.getElementById("passwordConfirm").value="";
		u = new UserBudget(nameStart,passwordConfirm,"user");
		io= new IOControl(userBudget.filePath);
		alert("success you have opened a new account");
		
	}

};



/*
This method checks if a file path is stored in userFilePath, 
if the file path is correct, 
and then stores the information in said file as string in userFile.
*/
IOControl.prototype.readFile = function(){
	if(window.localStorage.getItem(userfilePath) != null){
	var userfile = window.localStorage.getItem(userFilePath)
	}
	else 	alert("Username Not found");
};

/*
This method, taking the parameters userName and password,
 determines whether the string stored in userFile matches the information given
 in the parameters.
*/
function verifyAccount (userName, passWord){
		//assuming the file is called from LocalStorage 
		if(userFile != ""){
			var temp = "";
		}
		alert("Not complete");
};



/*
This parses the string field userFile,
provided it is not empty and well-formed, 
and stores it as a UserBudget object, which is returned.
*/
IOControl.prototype.getUserBudget = function(){
		alert("Not complete");
	return "";
};

/*
This method parses the userBudget parameter as a string and stores it in userFile,
then storing it in local Storage. 
The method then returns the success or failure of the store as a boolean.
*/
IOControl.prototype.saveAccount = function(userBudget){
	window.localStorage.setItem(userBudget.filePath,userBudgetToXML(userBudget));
		alert("Not complete");
	return false;
};
/*
This method, after executing the saveAccount() method, parses the information 
to a temporary string in the .csv format and saves it in local storage.
*/
IOControl.prototype.exportAsCSV = function(){
	alert("Not complete");
	
	return false;
};



/*This method takes in the parameters userBudget and pageIndex, 
and returns the Asset list associated with the pageIndex,
determined by the UserBudget objects income and expenditure Lists.
*/
IOControl.prototype.historyForwardEvent = function(userBudget, pageIndex){
	alert("Not tested");
	
	//return Asset[] assetList;
};

/*
This method takes in the parameters userBudget and pageIndex, 
and returns the Asset list associated with the pageIndex, 
determined by the UserBudget objects income and expenditure Lists.
*/
IOControl.prototype.historyBackEvent = function(userBudget, pageIndex){
	alert("Not complete");
 //return Asset[] assetList
 };

/*
This method takes in the parameters asset and userBudget 
and pushes the Asset into said list. 
*/
IOControl.prototype.confirmAssetEvent = function(name, quantity, isIncome, frequency, dueDate, index, userBudget){
	
	alert("Not Complete");
};

/*
This method takes in the parameters reminder, index and userBudget, 
then saves the reminder in an Asset (from either the income or expenditure lists) 
in userBudget.
*/
IOControl.prototype.confirmReminderEvent =function(name, description, date, frequency, index, userBudget){
	alert("Not complete");
};

/*
This method takes in the parameters index, asset and userBudget, 
identifies the Asset to be edited via index, 
and then replaces said Asset in its list within userBudget.
*/
IOControl.prototype.editAssetEvent =function(index, asset, userBudget, isIncome){
	alert("not Complete");
};
/*
This method takes in the parameters reminder, 
index and isIncome userBudget, identifies the Asset the reminder belongs to, 
then saves the reminder in said Asset in userBudget.
*/
IOControl.prototype.editReminderEvent = function(index, reminder, userBudget, IsIncome){
	alert("not Complete");
};
/*
This method takes in the parameters index and userBudget, identifies the Asset the reminder belongs to, 
then instantiates a blank reminder in said Asset in userBudget.
removes 
*/
IOControl.prototype.removeReminderEvent = function(index, UserBudget, isIncome)
{
alert("not Complete");
};
/*
This method generates a checksum for file and user validation and verification, and returns it as a string.
*/
IOControl.prototype.generateChecksum = function(){

	var date = new Date();
	var calculation = function(date){
		if(date.getDay() % 2 == 0){
			return 1299203 * 3^(-Math.sin((date.getMonth()+1)* date.getDate()+ (date.getYear() % 50)));
		}
		else{
			return 1299203 * 7^(-Math.sin((date.getMonth()+1)* date.getDate()+ (date.getYear() % 50)));
		}
		
		
	}
	var checksum = calculation(date).toString(16);
	
	return checksum;
};
/*
This method saves backup checksum information in case of errors.
*/
IOControl.prototype.saveCheckDocument = function(){
window.localStorage.setItem(userFilePath+"checkSum",new IOControl().generateChecksum());
	
};

//B00304871
function Reminder(name, description, date, frequency)
{
    this.name = name;
    this.description = description;
    this.date = date;
    this.frequency = frequency
}

//would spawn after current reminder
var spawnNextReminder = function() {
    //alert("here");
    var now = new Date();

    //once a month - usual payment method
    if (Reminder.frequency = 1)
    {
       // alert("in first statement");
        new Reminder().date = new Date(now.getDay(),now.getMonth()+1,now.getFullYear());
    }

    if (Reminder.frequency = 2)
    {
        new Reminder().date = new Date(now.getDay()+2,now.getMonth(),now.getFullYear());
    }

    if (Reminder.frequency = 3)
    {
        new Reminder().date = new Date(now.getDay()+7,now.getMonth()+1,now.getFullYear());
    }

    if (Reminder.frequency = 4)
    {
       // alert("in last statement");
        new Reminder().date = new Date(now.getDay()+14,now.getMonth()+1,now.getFullYear());
    }
};

Reminder.prototype.isDue = function()
{
    var now = new Date();
    if(now >= Reminder.dateTime)
    {
        alert("Check Reminders");
    }
};

/*
//would spawn after current reminder
Reminder.spawnNextReminder = function()
{
    var currReminder = Reminder;
    var now = new Date();
    var dateOne;
    var dateTwo;
    var newDate = new Date();

    //gets reminder for frequency 1 for every reminder then goes through if statements using that date as currReminder.
    new Reminder().date = new Date(now.getDay(),now.getMonth()+1,now.getFullYear());

    //once a month - usual payment method
    if (Reminder.frequency = 1)
    {
        currReminder = new Reminder();
        return currReminder;
    }

    //twice a month
    if (Reminder.frequency = 2)
    {
        dateOne = now;
        dateTwo = currReminder;

        //gives the difference in hours between now and next reminder
        var diff = Math.abs(dateOne.getTime() - dateTwo.getTime()) / 3600000;

        //divides hours by two
        var time = diff / 2;

        //adds time to 'now' var
        var n = now.getTime() + time;

        //makes var newDate a Date type
        n = newDate;

        new Reminder().date = n;
        return Reminder;
    }

    //four times a month
    if (Reminder.frequency = 3)
    {

    }
};

//https://stackoverflow.com/questions/499838/javascript-date-next-month
//https://stackoverflow.com/questions/19225414/how-to-get-the-hours-difference-between-two-date-objects
/*
// Asset Object - Leon Irving B00301496

/*
Instantiates a new Asset object based on its name, quantity, and isIncome.
The method also sets reminder to a blank state with just dueDate and frequency fields set.
 */
function Asset(name, quantity, isIncome, frequency, date)
{
    this.name = name;
    this.quantity = quantity;
    this.isIncome = isIncome;
    this.reminder = new Reminder(name, "", date, frequency);
}

/*
Calls the Reminder() method and sets reminder to the parameters listed.
*/
Asset.prototype.setReminder = function(name, description, date, frequency)
{
    this.reminder.name = name;
    this.reminder.description = description;
    this.reminder.date = date;
    this.reminder.frequency = frequency;
};

/*
Resets the reminder to a blank state.
*/
Asset.prototype.removeReminder = function()
{
    this.reminder.name = "";
    this.reminder.description = "";
    this.reminder.date = new Date();
    this.reminder.frequency = 0;
};

/*
This method instantiates the UserBudget class with the parameters userName, password, and filepath to set the listed fields.
 */
function UserBudget(userName, userPassword, filePath)
{
    this.userName = userName;
    this.userPassword = userPassword;
    this.saveFileLocation = filePath + "/" + userName;
    this.Income = [];
    this.Expenditure = [];
}

/*
This method creates a new Asset based on the parameters and pushes it into the income or expenditure arrays.
 */
UserBudget.prototype.addAsset = function(name, quantity, isIncome, frequency, dueDate)
{
    var a = new Asset(name, quantity, isIncome, frequency, dueDate);
    if (a.isIncome === true)
    {
        this.Income.push(a);
    }
    else
    {
        this.Expenditure.push(a);
    }
};

/*
This method locates an Asset object based on its location in either the income or expenditure arrays,
sets it to the listed parameters and pushes it into the income or expenditure arrays.
 */
UserBudget.prototype.setAsset = function (index, name, quantity, isIncome, frequency, dueDate)
{
    if(isIncome){
        if(this.Income.length !== 0)
            for(var i = 0; i < this.Income.length; i++)
            {
                if(i === index)
                {
                    this.Income[i] = new Asset(name, quantity, isIncome, frequency, dueDate)
                }
            }
    }
    else
    {
        if(this.Expenditure.length !== 0)
            for(i = 0; i < this.Expenditure.length; i++)
            {
                if(i === index)
                {
                    this.Expenditure[i] = new Asset(name, quantity, isIncome, frequency, dueDate)
                }
            }
    }
};

/*
Retrieve Asset object from either the income or expenditure arrays, based on the index and isIncome parameters.
 */
UserBudget.prototype.getAsset = function(Iindex, isIncome)
{
    if(isIncome)
    {
        return this.Income.splice(Iindex,1);
    }
    else
    {
        return this.Expenditure.splice(Iindex,1);
    }
};

/*
Remove Asset object from either the income or expenditure arrays, based on the index and isIncome parameters.
 */
UserBudget.prototype.removeIncome = function(index, isIncome)
{
    if (isIncome === true)
    {
        this.Income = this.Income.splice(index,1);
    }
    else
    {
        this.Expenditure = this.Expenditure.splice(index,1);
    }
};

/*
Returns the total quantity variable of each asset in the income Asset array.
 */
UserBudget.prototype.tallyIncome = function()
{
    var totalIncome = 0;

    var length = this.Income.length;

    for (var i = 0; i < length; i++)
    {
        totalIncome += this.Income[i].quantity;
    }

    return totalIncome;
};

/*
Returns the total quantity variable of each asset in the expenditure Asset array.
 */
UserBudget.prototype.tallyExpenditure = function()
{
    var totalExpenditure = 0;

    var length = this.Expenditure.length;

    for (var i = 0; i < length; i++)
    {
        totalExpenditure += this.Expenditure[i].quantity;
    }

    return totalExpenditure;
};

/*
Returns the total quantity variable of each asset in both the income and expenditure Asset arrays.
 */
UserBudget.prototype.tallySavings = function()
{
    var totalSavings = this.tallyIncome() - this.tallyExpenditure();
    if (totalSavings < 0){
        totalSavings = 0;
    }
    return totalSavings;
};

function getAssetByMonth(item)
{
    if(item.Reminder.date.getMonth() === currentMonth)
    {
        if(item.Reminder.date.getYear() === currentYear)
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}

/*
Retrieves Asset array from the income array, based on the current month of the year.
 */
function getIncomeHistory ()
{
    //First get the month
    var date = new Date();
    var currentMonth =  date.getMonth();
    var currentYear = date.getYear();

    return Income.filter(getAssetByMonth);
}

/*
Retrieves Asset array from the expenditure array, based on the current month of the year.
 */
function getExpenditureHistory ()
{
    //First get the month
    var date = new Date();
    var currentMonth =  date.getMonth();
    var currentYear = date.getYear();

    return Expenditure.filter(getAssetByMonth);
}

/*
Retrieve Asset array from the income array, based on the index of the month required.
 */
function getIncomeHistoryIndex (index)
{
    //First get the month
    var date = new Date();
    var indexMonth =  date.getMonth()- index;
    while(indexMonth <0)
    {
        var currentYear = date.getYear()-1;
        indexMonth += 11;
    }

    var temp = Income.filter(getAssetByMonth);
}

/*
Retrieve Asset array from the expenditure array, based on the index of the month required.
 */
function getExpenditureHistoryIndex (index)
{
    //First get the month
    var date = new Date();
    var indexMonth = date.getMonth() - index;
    while (indexMonth < 0) {
        var currentYear = date.getYear() - 1;
        indexMonth += 11;
    }

    var temp = Expenditure.filter(getAssetByMonth);
}
