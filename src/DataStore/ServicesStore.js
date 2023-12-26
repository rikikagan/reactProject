import { observable, makeObservable, action, computed } from 'mobx';

class ServicesStore {
    servicesList = [
        {
            serviceName:'ssss',
            description:'ww'
        }
       
    ];

    constructor() {
        makeObservable(this,
            {
                servicesList: observable,
                addService: action,
            }
        )
    }
    addService = (service) => {
        this.servicesList = [...this.servicesList, {
            serviceName: service.serviceName,
            description: service.description
        }];
    }
   
    get servicesList()
    {
        return this.servicesList
    }
    
}
export default new ServicesStore();