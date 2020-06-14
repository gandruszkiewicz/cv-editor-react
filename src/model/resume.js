export class Resume extends Object{
    ResumeId;
    UserId;
    FirstName;
    LastName;
    Email;
    Address;
    SumUp;

    constructor(userId){
        super()
        this.ResumeId = null;
        this.UserId = userId;
        this.FirstName = null;
        this.LastName = null;
        this.Email = null;
        this.Address = null;
        this.SumUp = null;
    }
}

export default Resume;