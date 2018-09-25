import { Test } from './test';

export class TestSuite {
    name: String;
    description: String;
    version: String;
    properties: any;
    Tests: Test[];
    
    constructor(name: String, description: String, version: String, properties: any, Tests?: Test[]){
        this.name = name;
        this.description = description;
        this.version = version;
        this.properties = properties;
        this.Tests = Tests;
    }
}
