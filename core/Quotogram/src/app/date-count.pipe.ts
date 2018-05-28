import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any){
    let today:Date = new Date();
    let noTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-noTime )
    const secondsInADay= 86400;

    var dateDifferenceSeconds=dateDifference*0.001;

    var dateCounter = dateDifferenceSeconds/secondsInADay;
    console.log(dateCounter.toString())
    if (dateCounter >= 1){
        return (dateCounter.toString() +" Day(s) ago")
    }else if (dateCounter <= 1){
        return ("Today");
    }
  }
}
