export class Experience extends Object{
    ExperienceId;
    CompanyName;
    Position;
    DateFrom;
    DateTo;
    Description;
    City;
    ResumeId;

    constructor(){
        super()
        this.ExperienceId = null;
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