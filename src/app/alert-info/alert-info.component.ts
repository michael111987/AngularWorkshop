import { Component, Input} from "@angular/core";

@Component({
    selector: 'app-alert-info',
    templateUrl: './alert-info.component.html',
    styleUrls: ['./alert-info.component.css']
})

export class AlertInfoComponent{
    @Input() alertText: {type: string, name: string, content: string};

}
