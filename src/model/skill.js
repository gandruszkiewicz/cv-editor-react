export class Skill extends Object{
    Id;
    Name;
    Description;
    SkillLevel;
    ResumeId;

    constructor(){
        super()
        this.Id = null;
        this.Name = null;
        this.Description = null;
        this.SkillLevel = null;
        this.ResumeId = null;
    }
}

export default Skill;