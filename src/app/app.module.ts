import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { HomeComponent } from './home.component';
import { ZoneLessAsyncPipe } from './zone-less-async.pipe';

@NgModule({
  declarations: [AppComponent, CounterComponent, HomeComponent, ZoneLessAsyncPipe],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
