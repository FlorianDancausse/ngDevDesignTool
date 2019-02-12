import {Component, Input} from '@angular/core';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.scss']
})
export class BasicTemplateComponent {
  @Input() name = 'untitled';
  @Input() color = 'discordPurple';
  colorsList: object = {};

  constructor() {
    this.colorsList = {
      darkBackground: '#30343F',
      primaryWhite: '#FFF0EF',
      primaryRed: '#F4989C',
      twitchPurple: '#4b367c',
      discordPurple: '#7289DA',
      peach: '#EFC69B',
      oceanGreen: '#63B995',
      yellow: '#F5CB5C'
    };
  }

  convertToImage(dom) {
    domToImage.toPng(dom)
      .then(dataUrl => {
        fileSaver.saveAs(dataUrl, this.name + '.png');
      })
      .catch(error => {
        console.log('oops, something went wrong!', error);
      });
  }
}
