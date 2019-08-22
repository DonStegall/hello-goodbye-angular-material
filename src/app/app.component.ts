import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'hello-goodbye-angular-material';

  private inputText: string = null;

  public emptyText(): boolean {
    console.log('***' + this.inputText + '***');

    if (this.inputText === null) {
      return true;
    }

    if (this.inputText === '') {
      return true;
    }

    return false;
  }

  public handleHello() {
    this.inputText = 'Hello';
  }

  public handleGoodbye() {
    this.inputText = 'Goodbye';
  }

  public handleUpperCase() {
    this.inputText = this.inputText.toUpperCase();
  }

  public handleLowerCase() {
    this.inputText = this.inputText.toLowerCase();
  }

  public handleMessage() {
    alert(this.inputText);
  }

  public handleClear() {
    this.inputText = null;
  }

}
