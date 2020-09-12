/*
 * @Author: fracong
 * @Date: 2020-09-12 16:39:29
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-12 17:02:55
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatePageInfo'
})
export class TranslatePageInfoPipe implements PipeTransform {

  transform(pageInfo: string, row: number, total: number): any {
    if(!pageInfo) return null;
    pageInfo = pageInfo.replace('{{row}}', String(row)).replace('{{total}}', String(total));
    return pageInfo;
  }

}
