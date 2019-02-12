import {Component, Input} from '@angular/core';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import variables from '!!sass-variable-loader!./../../assets/styles/utils.scss';


@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.scss']
})
export class BasicTemplateComponent {
  @Input() name = 'untitled';
  @Input() color = 'discordPurple';
  colorsList: object = variables;

  constructor() {
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
