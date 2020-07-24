import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TemplateApp';

  onLightThemeClick() {
    this.changeTheme('light-theme');
  }

  onDarkThemeClick() {
    this.changeTheme('dark-theme');
  }

  private changeTheme(theme: string): void {
    let body = document.body;
    body.classList.remove('dark-theme');
    body.classList.remove('light-theme');
    body.classList.add(theme);
  }
}
