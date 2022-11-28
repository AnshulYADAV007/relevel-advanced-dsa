/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let buyPrice = prices[0]
    let maxProfit = 0
    for(let i = 1; i < prices.length; i++){
        if(prices[i] - buyPrice > maxProfit){
            maxProfit = prices[i] - buyPrice
        }else if(prices[i] < buyPrice) {
            buyPrice = prices[i]
        }
    }
    return maxProfit
};