ArrayDiff
=========

ArrayDiff computes the difference between two JavaScript arrays (as well as any other object that uses numeric subscripts, such as a string or DOMNodeList) by finding the [longest common subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem) between them.

## Example

```javascript
var thisArray = 'nematode knowledge'.split(''),
    thatArray = 'empty bottle'.split(''),
    arrayDiff = new ArrayDiff(thatArray, thisArray);

arrayDiff.diff.forEach(function(element) {

    if (element.added()) {
        var operation = '+'
    } else if (element.removed()) {
        var operation = '-';
    } else {
        var operation = ' ';
    }
    
    console.log('%s %s', operation, element.item);
    
});
```


## Acknowledgements

Many thanks to [Professor David Eppstein](http://www.ics.uci.edu/~eppstein/) of the University of California, Irvine, whose [lecture notes](http://www.ics.uci.edu/~eppstein/161/960229.html) from February 1996 helped me get my head around the dynamic programming solution to the longest common subsequence problem.
