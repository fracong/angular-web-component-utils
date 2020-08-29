/*
 * @Author: fracong
 * @Date: 2020-08-29 13:20:41
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-29 13:24:11
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'transformHtml'
})
export class TransformHtmlPipe implements PipeTransform {

  constructor (private sanitizer: DomSanitizer) {
    
  }
  
  transform(style: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }

}
