export class Qualification extends Object{
    QualificationId;
    SchoolName;
    FieldOfStudy;
    AcademicDegree;
    DateFrom;
    DateTo;
    City;
    ResumeId;

    constructor(){
        super()
        this.QualificationId = null;
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