# Tower Of Henoi

how to apprch notes
[notes](https://geuac-my.sharepoint.com/:b:/g/personal/19021621_geu_ac_in/EXEimvPweGlJrrNM5DFBZDQB6PywA51AsFYPOkbRRc-E7g?e=sbjr2d)

```js
class Solution {
  count = 0;

  toh(N, from, to, aux) {
    if (N == 1) {
      console.log(`move disk ${N} from rod ${from} to rod ${to}`);
      this.count++;
    } else {
      this.toh(N - 1, from, aux, to);
      console.log(`move disk ${N} from rod ${from} to rod ${to}`);
      this.toh(N - 1, aux, to, from);
      this.count++;
    }

    return this.count;
  }
}
```
