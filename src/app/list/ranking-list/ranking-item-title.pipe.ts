/*
 * @Author: fracong
 * @Date: 2020-08-20 09:56:24
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-20 17:48:03
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rankingItemTitle'
})
export class RankingItemTitlePipe implements PipeTransform {

  transform(title: string, itemTitleSize: number, itemlangZh: any, rankLangZh: boolean): any {
    let langZh = (itemlangZh != 'undefined') ? itemlangZh : rankLangZh;
    if (!langZh)  itemTitleSize *= 2;
    if (title.length > itemTitleSize) {
      itemTitleSize = langZh ?  itemTitleSize - 1 : itemTitleSize - 2;
      title = title.substring(0, itemTitleSize);
      title = title.concat('···');
    }
    return title;
  }

}
