export class Qualification extends Object{
    Id;
    SchoolName;
    FieldOfStudy;
    AcademicDegree;
    DateFrom;
    DateTo;
    City;
    ResumeId;

    constructor(){
        super()
        this.Id = null;
        this.SchoolName = null;
        this.FieldOfStudy = null;
        this.AcademicDegree = null;
        this.DateFrom = null;
        this.DateTo = null;
        this.City = null;
        this.ResumeId = null;
    }
}

export default Qualification;