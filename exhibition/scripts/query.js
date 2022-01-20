
$(document).ready(function () {
    queryList();
});
 
function queryList() {
    var seDiscountTempMsg=[{NAME: "测试一", STATE_DATE: "20191115104955", STATE: "1", TEMP_ID: "104955011000001"},
        {NAME: "专线一", STATE_DATE: "20191115104918", STATE: "0", TEMP_ID: "104918011000000"},
        {NAME: "5G一", STATE_DATE: "20191114174557", STATE: "0", TEMP_ID: "174558011470000"}];
    var add_options;
    for(var i=0;i<seDiscountTempMsg.length;i++) {
        add_options += '<option value="' + seDiscountTempMsg[i].NAME + '">'+ seDiscountTempMsg[i].NAME + '</option>';
    }
    $("datalist#batch_list").append(add_options);
}
