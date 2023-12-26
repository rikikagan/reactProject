import { observer } from "mobx-react-lite"
import { observable, makeObservable, action, computed } from 'mobx';

class Meetings {
    meetingList = [];

    constructor() {
        makeObservable(this,
            {
                meetingList: observable,
                addMeeting: action,
               
            }
        )
    }
    addMeeting = (meeting) => {
        this.meetingList = [...this.meetingList, {
            name: meeting.name,
            phone: meeting.phone,
            mail: meeting.mail,
            date: meeting.date,
            kindMeeting: meeting.kindMeeting
        }];
    }
    get meetingList()
    {
        return this.meetingList
    }
    
}
export default new Meetings();