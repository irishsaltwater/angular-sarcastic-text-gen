import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SarcasticTextComponent } from './sarcastic-text/sarcastic-text.component';
import { FormsModule } from '@angular/forms';
import { SarcasmPipe } from './sarcasm.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SarcasticTextComponent,
    SarcasmPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
