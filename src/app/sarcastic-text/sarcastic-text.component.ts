import { Component, OnInit } from '@angular/core';
import { Text_Object } from '../text-object';

@Component({
  selector: 'app-sarcastic-text',
  templateUrl: './sarcastic-text.component.html',
  styleUrls: ['./sarcastic-text.component.css']
})
export class SarcasticTextComponent implements OnInit {

  sarcastic_text: Text_Object = {
    inputText: "",
    outputText: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
