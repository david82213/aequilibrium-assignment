# AEQ Assignment

Technical assignment for AEQ. There are few assumptions that I made.

### Part 1 Castle

Assuming I cannot build a castle at the very last index of the array because it does not satisfy the valley or peak requirement.

For example: `[2,6,6,6,3]` would return total of 2 castles. The start element of the array `[2]` is first castle and `[6,6,6]` is second castle as it satisfies the peak requirement. (`[2]` is preceding and `[3]` is following ints)

Another example: `[2,6,1,4]` would return 3.

### Part 2 Transformer

Assume user inputs one transformer at a time and keeps asking user to input until the keyword is typed. I set to `exit` in this case.
