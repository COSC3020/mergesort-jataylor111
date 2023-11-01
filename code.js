function mergesort(arr) {
  var n = arr.length;

  for (var curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
      for (var left_start = 0; left_start < n; left_start += 2 * curr_size) {
          var mid = Math.floor(left_start + curr_size - 1, n - 1);
          var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
          var start = left_start;
          var start2 = mid + 1;

          if (arr[mid] <= arr[start2]) {
              continue;
          }

          while (start <= mid && start2 <= right_end) {
              if (arr[start] <= arr[start2]) {
                  start++;
              } else {
                  var value = arr[start2];
                  var index = start2;

                  while (index != start) {
                      arr[index] = arr[index - 1];
                      index--;
                  }
                  arr[start] = value;

                  start++;
                  mid++;
                  start2++;
              }
          }
      }
  }
  return arr;
}
