export class Resume extends Object{
    resumeId;
    userId;
    firstName;
    lastName;
    email;
    address;
    sumUp;

    constructor(userId){
        super()
        this.resumeId = null;
        this.userId = userId;
        this.documentName = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.address = null;
        this.sumUp = null;
    }
}

export default Resume;