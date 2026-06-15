class Solution:
    def reverseBits(self, n: int) -> int:
        #         let x = 0;
        # for(let i = 0; i < 32; i++) {
        #     if((n >> i) & 1) {
        #         x |= 1 << (31 - i)
        #     }
        # }
        # return x;
        x = 0
        for i in range(32):
            if (n >> i) & 1:
                x |= 1 << (31 - i)
        return x
        