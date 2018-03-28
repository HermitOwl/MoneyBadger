var u = new UserBudget("username", "password", "filepath");

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

    //Main Menu
    var totalIncome = document.getElementById("totalIncome").valueOf();
    var totalExpenditure = document.getElementById("totalExpenditure").valueOf();
    var totalSavings = document.getElementById("totalSavings").valueOf();

    //Settings Page
    var changeDetailsButton = document.getElementById("changeDetails");
        //changeDetailsButton.onclick =
    var csvExportButton = document.getElementById("csvExport");
        //csvExportButton.onclick =
    var budgetResetButton = document.getElementById("budgetReset");
        //budgetResetButton.onclick =
    var userResetButton = document.getElementById("userReset");
        //userResetButton.onclick =

    //Add Income Page
    var addIncomeNameField = document.getElementById("addIncomeName");
    var addIncomeQuantityField = document.getElementById("addIncomeAmount");
    var addIncomeDateField = document.getElementById("addIncomeDate");
    var addIncomeFreqField = document.getElementById("addIncomeFrequency");
    var addIncomeConfirmButton = document.getElementById("addIncomeConfirm");
    addIncomeConfirmButton.onclick = addAsset(addIncomeNameField.value, addIncomeQuantityField.value, true, addIncomeFreqField.value, addIncomeDateField.value);

    //Add Expenditure Page
    var addExpenditureNameField = document.getElementById("addExpenditureName");
    var addExpenditureQuantityField = document.getElementById("addExpenditureAmount");
    var addExpenditureDateField = document.getElementById("addExpenditureDate");
    var addExpenditureFreqField = document.getElementById("addExpenditureFrequency");
    var addExpenditureConfirmButton = document.getElementById("addExpenditureConfirm");
    addExpenditureConfirmButton.onclick = addAsset(addExpenditureNameField.value, addExpenditureQuantityField.value, true, addExpenditureFreqField.value, addExpenditureDateField.value);
};

function IOControl(userFilePath){
	this.userFilePath = userFilePath;
	this.userFile ="";
}

//B00304871
function Reminder(name, description, date, frequency)
{
    this.name = name;
    this.description = description;
    this.date = date;
    this.frequency = frequency
}

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
    return this.tallyIncome() - this.tallyExpenditure();
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