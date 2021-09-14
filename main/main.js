function printReceipt(inputs) {
    let goodsInfo = loadAllItems();
    let itemsInfo = [];
    let buyerInfo = [];
    let count = 0;
    let count1 = 0;
    for (let i = 0; i < inputs.length; i++) {
        itemsInfo[i] = {};
        for (let j = 0; j < goodsInfo.length; j++)
            if (inputs[i] == goodsInfo[j].barcode) {
                itemsInfo[i] = goodsInfo[j];
            }
    }
    for (let i = 1; i < itemsInfo.length; i++) {
        buyerInfo[count1] = {};
        if (itemsInfo[i].barcode == itemsInfo[i - 1].barcode) {
            count++;
        } else if (itemsInfo[i].barcode != itemsInfo[i - 1].barcode) {
            buyerInfo[count1] = itemsInfo[i - 1];
            buyerInfo[count1].Count = count + 1;
            buyerInfo[count1].Subtotal = (count + 1) * itemsInfo[i - 1].price;
            count = 0;
            count1++;
            if (i == itemsInfo.length - 1) {
                buyerInfo[count1] = itemsInfo[i];
                buyerInfo[count1].Count = count + 1;
                buyerInfo[count1].Subtotal = (count + 1) * itemsInfo[i].price;
            }
        }
    }
    let total = 0;
    for (let i = 0; i < buyerInfo.length; i++) {
        total += buyerInfo[i].Subtotal;
    }
    console.log("***<没钱赚商店>收据***\n" +
        "名称：" + buyerInfo[0].name + "，数量：" + buyerInfo[0].Count + buyerInfo[0].unit + "，单价：" + buyerInfo[0].price.toFixed(2) + "(元)，小计：" + buyerInfo[0].Subtotal.toFixed(2) + "(元)\n" +
        "名称：" + buyerInfo[1].name + "，数量：" + buyerInfo[1].Count + buyerInfo[1].unit + "，单价：" + buyerInfo[1].price.toFixed(2) + "(元)，小计：" + buyerInfo[1].Subtotal.toFixed(2) + "(元)\n" +
        "名称：" + buyerInfo[2].name + "，数量：" + buyerInfo[2].Count + buyerInfo[2].unit + "，单价：" + buyerInfo[2].price.toFixed(2) + "(元)，小计：" + buyerInfo[2].Subtotal.toFixed(2) + "(元)\n" +
        '----------------------\n' + '总计：' + total.toFixed(2) + '(元)\n' + '**********************');
}