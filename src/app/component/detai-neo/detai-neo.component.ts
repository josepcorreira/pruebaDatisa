import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NeoObject } from 'src/app/models/modelsNeo';

@Component({
  selector: 'app-detai-neo',
  templateUrl: './detai-neo.component.html',
  styleUrls: ['./detai-neo.component.scss']
})
export class DetaiNeoComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: NeoObject) {}

  ngOnInit(): void {
  }

}
