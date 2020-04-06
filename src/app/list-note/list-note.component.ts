import { Component, OnInit } from '@angular/core';

//https://www.npmjs.com/package/@ngx-pwa/local-storage
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent implements OnInit {
  list: Array<string> = new Array<string>();
  note: string = '';
  isUpdate = false;
  index = 0;
  constructor(
    public localStorage: LocalStorage
  ) {
    this.localStorage.getItem('list')
      .subscribe(data => {
        if (data != null) {
          this.list = data;
          console.log(this.list);
        }
      })
  }

  ngOnInit() {
    //this.localStorage.clear();
  }

  addNote() {
    this.list.push(this.note);
    this.note = '';
    this.saveNoteToStorage();
  }

  delete(i) {
    this.list.splice(i, 1);
    this.saveNoteToStorage();
  }

  edit(i) {
    this.note = this.list[i];
    this.isUpdate = true;
    this.index = i;
    this.saveNoteToStorage();
  }

  saveNote() {
    this.list[this.index] = this.note;
    this.note = '';
  };

  saveNoteToStorage() {
    this.localStorage.setItem('list', this.list).subscribe(() => {
      alert("Cập nhật note thành công");
    });
  }
}
