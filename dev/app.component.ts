import {Component} from '@angular/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'app',
    template: `
        <h1>This is a test</h1>
        <h2>Now comes the first component</h2>
        <my-component></my-component>

    `,
    directives: [MyComponentComponent]
})
export class AppComponent {

}
