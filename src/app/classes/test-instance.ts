export class TestInstance {
    name: String;
    description: String;
    date: Date;
    status: String;
    priority: number;
    results: any;

    constructor(name: String, description: String, date: Date, priority: number, results: any){
        this.name = name;
        this.description = description;
        this.date = date;
        this.status = this.status;
        this.priority = priority;
        this.results = results;
    }
}
