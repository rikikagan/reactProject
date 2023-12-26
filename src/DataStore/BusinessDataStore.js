import { observable, makeObservable, action, runInAction } from 'mobx';

class BusinessDataStore {
    businessData
        = {
            name: "Uri Karmi",
            address: "Shefala 3 Tel Aviv",
            phone: "050-7387755",
            owner: "Tekno Art",
            logo: "",
            description: "The best coding academy in the world",
        }
    constructor() {
        makeObservable(this,
            {
                businessData: observable,
                updateData: action,
            }
        )
        this.postFirstData();
        // .this.initData();
    }
    postFirstData() {
        fetch("http://localhost:8787/businessData", {
            method: 'POST',
            body: JSON.stringify(this.businessData)
        }).then(() => {
            response => response.json()
            console.log("in post")
        }).catch((error) => {
            console.log(error);
        })
    }
    // initData(){
    //     fetch("http://localhost:8787/businessData").then((res)=>{
    //         res.json().then((data)=>{
    //             runInAction(()=>{
    //                 this.businessData = data;
    //                 console.log(data)
    //             })
    //         });            

    //     }).catch((error)=>{
    //         console.log(error);
    //     });
    // }

    updateData(BussinesItem) {
        console.log("in update")
        fetch("http://localhost:8787/businessData", {
            method: 'PUT',
            body: BussinesItem
        }).then((res) => {
            
            runInAction(() => {
                this.businessData = BussinesItem;
                console.log(this.businessData)
            });

        }).catch((error) => {
            console.log(error);
        })
    }

    get businessData() {
        return this.businessData
    }

}
export default new BusinessDataStore();