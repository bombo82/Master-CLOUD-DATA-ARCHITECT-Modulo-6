class LeapYear {
    
    IsLeapYear(year) {
        if (year == 0) {
            throw new Error("Year zero (0) does not exist!!!")
        }
        if (year >= 1581) {
            return this.ManageYearAfter1581(year)
        }
        if (year <= 0) {
            return false
        }

        return year % 4 == 0
    }
    
    ManageYearAfter1581(year) {
        if (year % 400 == 0) {
            return true
        }
        
        if (year % 100 == 0) {
            return false
        }

        return year % 4 == 0
    }
}

module.exports = LeapYear
