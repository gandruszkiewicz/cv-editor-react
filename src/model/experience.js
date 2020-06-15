export class Experience extends Object{
    Id;
    CompanyName;
    Position;
    DateFrom;
    DateTo;
    Description;
    City;
    ResumeId;

    constructor(){
        super()
        this.Id = null;
        this.CompanyName = null;
        this.Position = null;
        this.DateFrom = null;
        this.DateTo = null;
        this.Description = null;
        this.City = null;
        this.ResumeId = null;
    }
}

export default Experience;