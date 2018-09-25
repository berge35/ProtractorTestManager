import { TestInstance } from './test-instance';
export class Test {
    name: String;
    description: String;
    version: String;
    browsers: String[];
    instances: TestInstance[];

    constructor(name: String, desciption: String, version: String, browsers: String[], instances?: TestInstance[]){
        this.name = name;
        this.description = desciption;
        this.version = version;
        this.browsers = browsers;
        this.instances = instances;
    }
}
