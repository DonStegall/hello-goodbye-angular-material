import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface MessageBoxData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-messagebox-dialog',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})

export class MessageBoxComponent {

  title: string;
  message: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageBoxDialogComponent, {
      width: '250px',
      data: {title: this.title, message: this.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-messagebox-dialog-ref',
  templateUrl: 'messagebox-dialog.html',
})

export class MessageBoxDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MessageBoxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageBoxData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
