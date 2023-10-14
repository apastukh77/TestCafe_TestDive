    class Student {
        constructor(firstName, lastName, email, gender, mobileNumber, dateOfBirth, subjects, hobbies, picturePath, currentAddress, state, city) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.gender = gender;
            this.mobileNumber = mobileNumber;
            this.dateOfBirth = dateOfBirth;
            this.subjects = subjects.split(', ');
            this.hobbies = hobbies; 
            this.picturePath = picturePath;
            this.currentAddress = currentAddress;
            this.state = state;
            this.city = city;
        }

        toString() {
            return `Student { 
                firstName: ${this.firstName},
                lastName: ${this.lastName},
                email: ${this.email},
                gender: ${this.gender},
                mobileNumber: ${this.mobileNumber},
                dateOfBirth: ${this.dateOfBirth},
                subjects: ${this.subjects},
                hobbies: ${this.hobbies},
                picturePath: ${this.picturePath},
                currentAddress: ${this.currentAddress},
                state: ${this.state},
                city: ${this.city}
            }`;
        }
    }

    module.exports = Student;
